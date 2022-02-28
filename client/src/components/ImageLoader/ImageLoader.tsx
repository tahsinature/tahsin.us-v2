import React, { useEffect, useState, useRef } from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import classes from './ImageLoader.module.scss';

export default function ImageLoader(props: { src: string }) {
  const parent = useRef(null);
  const [isReady, setReady] = useState(false);
  const [style, setStyle] = useState({ width: 0, height: 0 });

  const handleImageLoaded = () => {
    console.log('loaded');
    setReady(true);
  };

  const handleImageLoadStart = () => {
    console.log('starting to load');
  };

  useEffect(() => {
    const width = (parent.current as any).offsetWidth;
    const height = (parent.current as any).offsetHeight;
    setStyle({ width, height });
  }, []);

  return (
    <div className={classes.ImageLoader} ref={parent}>
      <img style={{ display: isReady ? 'inline' : 'none' }} src={props.src} alt="" onLoad={handleImageLoaded} onLoadStart={handleImageLoadStart} />

      {isReady ? null : (
        <ReactPlaceholder style={style} className={classes.PlaceHolder} type="rect" showLoadingAnimation ready={isReady}>
          <p>component not found</p>
        </ReactPlaceholder>
      )}
    </div>
  );
}
