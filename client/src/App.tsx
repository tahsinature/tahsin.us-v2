import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

import './App.scss';
import './assets/sass/main.scss';
import classes from './App.module.scss';
import { GlobalStyle } from './App.theme';

import NavBar from './components/NavBar/NavBar';

import Home from './views/Home/Home';
import Chat from './views/Chat/Chat';
import List from './views/List/List';
import Error404 from './views/Error404/Error404';

// import UnderDevelopment from './views/UnderDevelopment/UnderDevelopment';

import perticlesConfig from './perticles';
import Markdown from './views/Markdown/Markdown';
// import SocketLayer from './components/SocketLayer/SocketLayer';
import PageLoader from './components/PageLoader/PageLoader';
import storeManager from './store/storeManager';
import actions from './actions';
import { IReducers } from './interfaces/reducers';
import apiCalls from './api/calls';
import config from './config';
import JSONData from './views/JSONData/JSONData';

function App(props: any) {
  const appState: IReducers.IAppReducer = props.appState;
  const { basicData, isAppLoaded } = appState;

  useEffect(() => {
    apiCalls.initConnection.call(config.connectionId).then(({ data: connectionData }) => {
      if (connectionData.isNewConnection) {
        config.connectionId = connectionData.connection._id;
        window.location.reload();
      }
      if (!isAppLoaded) storeManager.dispatch(actions.app.loadAppStart());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContentComponent = () => {
    if (!basicData) throw new Error('basic data not loaded but component trying to render');
    return (
      <>
        <NavBar />
        <div className={classes.Content}>
          <Switch>
            <Route exact path={['/']} component={() => <Home basicData={basicData} />} />
            <Route path="/chat" component={() => <Chat />} />
            <Route path="/list" component={() => <List />} />
            <Route path="/md/:id" component={() => <Markdown />} />
            <Route path="/json/:id" component={() => <JSONData />} />
            <Route component={() => <Error404 />} />
          </Switch>
        </div>
      </>
    );
  };

  return (
    <Router>
      <Particles className={classes.Particle} width="100vw" height="100vh" params={perticlesConfig} />
      <Container className={classes.Container} maxWidth="md">
        <ThemeProvider theme={{ mode: appState.appTheme }}>
          <GlobalStyle />
          <div className={['App', classes.App].join(' ')}>{isAppLoaded ? getContentComponent() : <PageLoader message={'Loading Profile Data...'} />}</div>
          {/* <SocketLayer>
            
          </SocketLayer> */}
        </ThemeProvider>
      </Container>
    </Router>
  );
}

const mapStateToProps = (state: any) => ({ appState: state.appReducer });

export default connect(mapStateToProps, null)(App);
