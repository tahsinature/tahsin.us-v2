import React from 'react';
import classes from './PageLoader.module.scss';
import { GlobalStyle } from './PageLoader.theme';

const PageLoader = (props: { message?: string }) => {
  return (
    <div className={classes.PageLoader}>
      <GlobalStyle />

      <div>
        <div className={classes.Loader}>
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
        <div className={[classes.Loader, classes.Triangle].join(' ')}>
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
        <div className={classes.Loader}>
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>

      {props.message ? <div className={classes.TextDiv}>{props.message}</div> : null}
    </div>
  );
};

export default PageLoader;
