import React from 'react';
import classes from './Header.module.scss';

const Header = (props: any) => {
  // return <h2 className={[classes.Header, 'f2 ttu tracked bb-l tc'].join(' ')}>{props.children}</h2>;
  return <h2 className={[classes.Header].join(' ')}>{props.children}</h2>;
};

export default Header;
