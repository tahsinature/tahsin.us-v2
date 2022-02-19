/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import classes from './ReadMoreButton.module.scss';

export default function ReadMoreButton(props: { clickHandler: () => void }) {
  return (
    <div className={classes.ReadMoreButton} onClick={props.clickHandler}>
      <a href="#">
        <svg className={[classes['icon-arrow'], classes['before']].join(' ')}>
          <use xlinkHref="#arrow"></use>
        </svg>
        <span className={classes['label']}>Read More</span>
        <svg className={[classes['icon-arrow'], classes['after']].join(' ')}>
          <use xlinkHref="#arrow"></use>
        </svg>
      </a>
      <svg style={{ display: 'none' }}>
        <defs>
          <symbol id="arrow" viewBox="0 0 35 15">
            <title>Arrow</title>
            <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z " />
          </symbol>
        </defs>
      </svg>
    </div>
  );
}
