import React from 'react';
import { connect } from 'react-redux';
import { actionTypes } from '../../../actions';

import classes from './ThemeToggle.module.scss';

const ThemeToggle = (props: any) => {
  const { appState, toggleTheme } = props;

  const currentBtnClass = appState.appTheme === 'dark' ? classes.dawn : classes.dusk;

  return (
    <button className={[classes.ThemeToggle, currentBtnClass].join(' ')} onClick={toggleTheme}>
      <div className={classes['toggle-glyph']}>
        <svg width="24" height="64" viewBox="0 0 24 64">
          <circle cx="12" cy="16" r="4" />
          <path d="M12,11h0a1,1,0,0,1-1-1c.08-.63.61-3.45.61-3.45a.4.4,0,0,1,.77,0S12.92,9.37,13,10A1,1,0,0,1,12,11Z" />
          <path d="M8.46,12.46h0a1,1,0,0,1-1.41,0C6.66,12,5,9.59,5,9.59A.4.4,0,0,1,5.59,9s2.38,1.62,2.87,2A1,1,0,0,1,8.46,12.46Z" />
          <path d="M7,16H7a1,1,0,0,1-1,1c-.63-.08-3.45-.61-3.45-.61a.4.4,0,0,1,0-.77S5.37,15.08,6,15A1,1,0,0,1,7,16Z" />
          <path d="M8.46,19.54h0a1,1,0,0,1,0,1.41c-.5.39-2.87,2-2.87,2A.4.4,0,0,1,5,22.41s1.62-2.38,2-2.87A1,1,0,0,1,8.46,19.54Z" />
          <path d="M12,21h0a1,1,0,0,1,1,1c-.08.63-.61,3.45-.61,3.45a.4.4,0,0,1-.77,0S11.08,22.63,11,22A1,1,0,0,1,12,21Z" />
          <path d="M15.54,19.54h0a1,1,0,0,1,1.41,0c.39.5,2,2.87,2,2.87a.4.4,0,0,1-.55.55s-2.38-1.62-2.87-2A1,1,0,0,1,15.54,19.54Z" />
          <path d="M17,16h0a1,1,0,0,1,1-1c.63.08,3.45.61,3.45.61a.4.4,0,0,1,0,.77s-2.82.54-3.45.61A1,1,0,0,1,17,16Z" />
          <path d="M15.54,12.46h0a1,1,0,0,1,0-1.41c.5-.39,2.87-2,2.87-2a.4.4,0,0,1,.55.55s-1.62,2.38-2,2.87A1,1,0,0,1,15.54,12.46Z" />
          <path d="M7.37,47.75A7.09,7.09,0,0,1,14.64,41h.18a1,1,0,0,1,.47,1.84,6,6,0,0,0,0,10.3,1,1,0,0,1-.5,1.84h-.42A7,7,0,0,1,7.37,47.75Z" />
        </svg>
      </div>
    </button>
  );
};

const mapStateToProps = (state: any) => ({ appState: state.appReducer });
const mapDispatchToProps = (dispatch: any) => ({
  toggleTheme: () => dispatch({ type: actionTypes.APP.TOGGLE_THEME }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
