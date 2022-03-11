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
      <h2>My Productivity Booster Playlist</h2>
      <hr />

      <PreLoader isReady={isReady} className={classes.Loader}>
        <iframe
          onLoad={() => {
            setReady(true);
          }}
          title="My Productivity Booster Playlist"
          style={style}
          src="https://open.spotify.com/embed/playlist/5IS5OuuFSRWfnOJTTJ5769?utm_source=generator&theme=1"
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
