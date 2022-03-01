import React from 'react';

import classes from './Capsule.module.scss';
import colors from 'src/constants/colors';

enum Type {
  button = 1,
  other = 2,
}
export default function Capsule(props: { className?: string; logo?: string; title: string; subtitle?: string; type?: Type; clickHandler?: () => void }) {
  let type: Type;
  type = props.type || Type.other;

  const style = type === Type.button ? { justifyContent: 'center' } : {};

  const handleClick = () => {
    if (props.clickHandler) props.clickHandler();
  };

  return (
    <div className={[classes.Capsule, props.className || ''].join(' ')} style={style} onClick={handleClick}>
      {props.logo && (
        <div className={classes.LogoBox}>
          <img src={props.logo} alt="" />
        </div>
      )}

      <div className={classes.DetailBox}>
        <p>{props.title}</p>
        {props.subtitle && <small style={{ color: colors.common.primaryGreenishColor }}>{props.subtitle}</small>}
      </div>
    </div>
  );
}
