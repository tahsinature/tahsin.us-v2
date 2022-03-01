import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import classes from './PreLoader.module.scss';

export default function PreLoader(props: { children: JSX.Element | JSX.Element[]; isReady: boolean; className?: string; onClick?: () => void }) {
  const loader = (
    <div className={[classes.PreLoader, props.className || ''].join(' ')}>
      <ReactPlaceholder style={{ display: props.isReady ? 'none' : 'block', margin: 0 }} type="rect" showLoadingAnimation ready={props.isReady}>
        <></>
      </ReactPlaceholder>
    </div>
  );

  const style = props.isReady ? {} : { display: 'none' };

  const content = (
    <div
      className={props.className || ''}
      style={style}
      onClick={() => {
        if (props.onClick) props.onClick();
      }}>
      {props.children}
    </div>
  );

  return (
    <>
      {!props.isReady && loader}
      {content}
    </>
  );
}
