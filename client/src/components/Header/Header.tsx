import React from 'react';

import classes from './Header.module.scss';

const Header = (props: { title: string; icon?: React.ReactElement }) => {
  return (
    <div className={[classes.Header].join(' ')}>
      {props.icon && <span>{props.icon || null}</span>}
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
