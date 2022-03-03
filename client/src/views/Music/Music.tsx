import React, { useState } from 'react';
import PreLoader from 'src/components/PreLoader/PreLoader';

import classes from './Music.module.scss';

const style = {
  borderRadius: 12,
  height: '100%',
};

function Music() {
  const [isReady, setReady] = useState(false);
  return (
    <div className={classes.Music}>
      <h2>Type of music I'm into</h2>
      <hr />

      <PreLoader isReady={isReady} className={classes.Loader}>
        <iframe
          onLoad={() => {
            setReady(true);
          }}
          title="My Everyday Music"
          style={style}
          src="https://open.spotify.com/embed/playlist/5IS5OuuFSRWfnOJTTJ5769?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </PreLoader>
    </div>
  );
}

export default Music;
