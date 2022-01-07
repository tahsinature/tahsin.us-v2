import React from 'react';

import classes from './Travels.module.scss';

export default function Travels() {
  return (
    <div className={classes.Travels}>
      <div className={classes.Destination}>
        <p>Jakarta, Indonesia</p>
      </div>
      <div className={classes.Destination}>
        <p>Jakarta, Indonesia</p>
      </div>
      <div className={classes.Destination}>
        <p>Jakarta, Indonesia</p>
      </div>
    </div>
  );
}
