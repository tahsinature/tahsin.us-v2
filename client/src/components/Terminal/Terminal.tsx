// @ts-nocheck
import React from 'react';
import { connect } from 'react-redux';
import CLI from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';

const Terminal = (props: {
  height?: number;
  lines: {
    text: string;
    cmd: boolean;
    delay?: number;
  }[];
}) => {
  return <CLI height={props.height || 100} lines={props.lines} interval={80} white={props.appState.appTheme === 'dark'} />;
};

const mapStateToProps = (state: any) => ({
  appState: state.appReducer,
});

export default connect(mapStateToProps, null)(Terminal);
