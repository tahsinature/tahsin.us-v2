// @ts-nocheck
import React from 'react';
import { connect } from 'react-redux';
import classes from './Error404.module.scss';
import Terminal from 'react-animated-term';

const termLines = [
  {
    text: "Oops! It looks like you're lost. ☹️",
    cmd: true,
  },
  {
    text: 'Sorry about that.',
    cmd: true,
  },
  {
    text: 'Let me try and help.',
    cmd: true,
  },
  {
    text: 'Go back home and start over.',
    cmd: true,
  },
];

const Error404 = (props: any) => {
  const { appState } = props;

  return (
    <div className={classes.Error404}>
      <div className={classes.TerminalContainer}>
        <Terminal lines={termLines} interval={80} white={appState.appTheme === 'dark'} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  appState: state.appReducer,
});

export default connect(mapStateToProps, null)(Error404);
