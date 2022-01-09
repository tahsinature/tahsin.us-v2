import React from 'react';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './NavBar.module.scss';
import variables from 'src/constants/variables';
import mySocket from 'src/mySocket';
import config from 'src/config';
import { getAppVersion } from 'src/util';
import ThemeToggle from 'src/components/Buttons/ThemeToggle/ThemeToggle';

let totalClicked = 0;
let currentResetter: NodeJS.Timeout;

const resetClick = () => {
  if (currentResetter) clearTimeout(currentResetter);
  currentResetter = setTimeout(() => {
    totalClicked = 0;
  }, 500);
};

const NavBar = (props: any) => {
  const { appState } = props;
  const connectionId = localStorage.getItem(variables.connectionId);

  const history = useHistory();

  const handleShowVersion = () => {
    ++totalClicked;
    resetClick();

    const socket = mySocket.getSocket();

    if (totalClicked >= 7)
      alert(`
Wow. You've discovered it!
--------------------------
Version: ${getAppVersion()}
Environment: ${process.env.NODE_ENV}
API Server: ${config.backEndBaseUrl}
Socket ID: ${socket.id}
Connection ID: ${connectionId}
`);
  };

  return (
    <nav className={classes.NavBar}>
      <button className={classes.Button} onClick={handleShowVersion} aria-label="home">
        <Avatar style={{ cursor: 'pointer', backgroundColor: appState.appTheme === 'dark' ? '#fff' : '#000' }} onClick={() => history.push('/')}>
          <p style={{ color: appState.appTheme === 'dark' ? '#000' : '#fff', paddingTop: '3px' }}>T</p>
        </Avatar>
      </button>
      <ThemeToggle />
    </nav>
  );
};

const mapStateToProps = (state: any) => ({ appState: state.appReducer });

export default connect(mapStateToProps, null)(NavBar);
