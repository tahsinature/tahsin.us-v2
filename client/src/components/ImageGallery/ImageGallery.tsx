import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import classes from './ImageGallery.module.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';
import images from 'src/assets/images';

const GET_PHOTOGRAPHS = gql`
  query {
    photographs {
      id
      location
      url
      caption
    }
  }
`;

interface Photograph {
  id: string;
  location: string;
  url: string;
  caption: string;
}

const Block = (props: { src: string }) => {
  const loadingImage = new Image();
  loadingImage.src = images.gifs.cameraShutter;
  const [src, updateSrc] = useState(loadingImage.src);
  const [customClasses, setClasses] = useState<string[]>([]);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.onload = () => {
      if (img.height > img.width) setClasses([classes.Vertical]);
      else if (img.height < img.width) setClasses([classes.Horizontal]);
      else setClasses([classes.Big]);

      updateSrc(props.src);
    };
    return () => {
      img.onload = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <a target="_blank" rel="noreferrer" href={props.src} className={customClasses.join(' ')}>
      <img src={src} alt="photograph" />
    </a>
  );
};

const ImageGallery = () => {
  const { loading, error, data } = useQuery<{ photographs: Photograph[] }>(GET_PHOTOGRAPHS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Root}>
      <GraphLoader data={data} error={error} loading={loading}>
        <div className={classes.Container}>
          {data?.photographs.map(ele => (
            <Block key={ele.id} src={ele.url} />
          ))}
        </div>
      </GraphLoader>
    </div>
  );
};

export default ImageGallery;
