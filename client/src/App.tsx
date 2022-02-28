import React, { useEffect, lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Particles from 'react-particles-js';

import './App.scss';
import './assets/sass/main.scss';
import classes from './App.module.scss';
import { GlobalStyle } from './App.theme';

// import UnderDevelopment from './views/UnderDevelopment/UnderDevelopment';
// import perticlesConfig from './perticles';
// import SocketLayer from './components/SocketLayer/SocketLayer';

import { IReducers } from 'src/interfaces/reducers';
// import actions from './actions';
// import config from './config';
// import storeManager from 'src/store/storeManager';
// import apiCalls from 'src/api/calls';

import NavBar from 'src/components/NavBar/NavBar';
import PageLoader from 'src/components/PageLoader/PageLoader';
import mySocket from 'src/mySocket';

const Error404 = lazy(() => import('src/views/Error404/Error404'));
const Home = lazy(() => import('src/views/Home/Home'));
const Chat = lazy(() => import('src/views/Chat/Chat'));
const List = lazy(() => import('src/views/List/List'));
const Markdown = lazy(() => import('src/views/Markdown/Markdown'));
const JSONData = lazy(() => import('src/views/JSONData/JSONData'));
const Gallery = lazy(() => import('src/views/Gallery/Gallery'));
const Movies = lazy(() => import('src/views/Movies/Movies'));
const Travels = lazy(() => import('src/views/Travels/Travels'));

function App(props: any) {
  const appState: IReducers.IAppReducer = props.appState;
  // const { basicData, isAppLoaded } = appState;

  // useEffect(() => {
  //   apiCalls.initConnection.call(config.connectionId).then(({ data: connectionData }) => {
  //     if (connectionData.isNewConnection) {
  //       config.connectionId = connectionData.connection._id;
  //       window.location.reload();
  //     }
  //     if (!isAppLoaded) storeManager.dispatch(actions.app.loadAppStart());
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    mySocket.init().then(() => {
      console.log('success socket');
    });
  }, []);

  return (
    <Router>
      {/* <Particles className={classes.Particle} width="100vw" height="100vh" params={perticlesConfig} /> */}
      <Container className={classes.Container} maxWidth="md">
        <ThemeProvider theme={{ mode: appState.appTheme }}>
          <GlobalStyle />
          <div className={['App', classes.App].join(' ')}>
            <NavBar />
            <div className={classes.Content}>
              <Suspense fallback={<PageLoader message={'Fetching Data...'} />}>
                <Switch>
                  <Route exact path={['/']} component={() => <Home />} />
                  <Route path="/chat" component={() => <Chat />} />
                  <Route path="/list" component={() => <List />} />
                  <Route path="/gallery" component={() => <Gallery />} />
                  <Route path="/movies" component={() => <Movies />} />
                  <Route path="/travels" component={() => <Travels />} />
                  <Route path="/md/:id" component={() => <Markdown />} />
                  <Route path="/json/:id" component={() => <JSONData />} />
                  <Route component={() => <Error404 />} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Container>
    </Router>
  );
}

const mapStateToProps = (state: any) => ({ appState: state.appReducer });

export default connect(mapStateToProps, null)(App);
