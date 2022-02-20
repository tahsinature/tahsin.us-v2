import React from 'react';

import classes from './ReadMoreButton.module.scss';

let hold = false;
let timeOutId: NodeJS.Timeout;

export default function ReadMoreButton(props: { clickHandler: () => void; onHoldHandler?: () => void; holdReleaseHandler?: () => void }) {
  const handleMouseDown = () => {
    timeOutId = setTimeout(() => {
      if (hold) return;
      if (props.onHoldHandler) props.onHoldHandler();
      hold = true;
    }, 100);
  };

  const handleMouseUp = () => {
    clearTimeout(timeOutId);
    if (!hold) return;
    if (props.holdReleaseHandler) props.holdReleaseHandler();
    hold = false;
  };

  return (
    <div className={classes.ReadMoreButton} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={props.clickHandler}>
      <button>
        <svg className={[classes['icon-arrow'], classes['before']].join(' ')}>
          <use xlinkHref="#arrow"></use>
        </svg>
        <span className={classes['label']}>Show More</span>
        <svg className={[classes['icon-arrow'], classes['after']].join(' ')}>
          <use xlinkHref="#arrow"></use>
        </svg>
      </button>
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
