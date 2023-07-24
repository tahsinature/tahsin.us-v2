// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Gallery, Image as RGGImage } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import classes from './ImageGallery.module.scss';
import './ImageGallery.scss';
import GraphLoader from 'src/components/GraphLoader/GraphLoader';

export interface CustomImage extends RGGImage {
  original: string;
}

const GET_PHOTOGRAPHS = gql`
  query {
    photographs {
      id
      location
      url
      caption
      camera
    }
  }
`;

interface Photograph {
  id: string;
  location: string;
  url: string;
  caption: string;
  camera: string;
}

const Block = (props: { src: string; currentimage: CustomImage; nextImage: CustomImage; prevImage: CustomImage; handleClose: () => void; handleMovePrev: () => void; handleMoveNext: () => void }) => {
  return (
    <Lightbox
      mainSrc={props.currentimage.original}
      imageTitle={props.currentimage.caption}
      mainSrcThumbnail={props.currentimage.src}
      nextSrc={props.nextImage.original}
      nextSrcThumbnail={props.nextImage.src}
      prevSrc={props.prevImage.original}
      prevSrcThumbnail={props.prevImage.src}
      onCloseRequest={props.handleClose}
      onMovePrevRequest={props.handleMovePrev}
      onMoveNextRequest={props.handleMoveNext}
    />
  );
};

const CameraInfo = (props: { camera: string }) => {
  if (!props.camera) return null;
  return <p className={classes.Camera}>📸 {props.camera}</p>;
};

const Caption = (props: { caption: string; location: string; camera: string }) => {
  return (
    <div className={classes.Caption}>
      <p>{`${props.caption || 'No Caption'} - ${props.location}`}</p>
      <CameraInfo camera={props.camera} />
    </div>
  );
};

const MyGallery = (props: { photographs?: Photograph[] }) => {
  const [loadedImages, setLoadedImages] = useState(
    props.photographs?.map(photograph => {
      return {
        src: photograph.url,
        original: photograph.url,
        width: 100,
        height: 100,
        caption: <Caption caption={photograph.caption} location={photograph.location} camera={photograph.camera} />,
        customOverlay: <CameraInfo camera={photograph.camera} />,
        tags: [
          // { value: 'Nature', title: 'Nature' },
        ],
      };
    }),
  );

  useEffect(() => {
    loadedImages?.forEach(ele => {
      const img = new Image();
      img.src = ele.src;
      img.onload = () => {
        ele.width = img.width;
        ele.height = img.height;
        setLoadedImages([...loadedImages]);
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [index, setIndex] = useState(-1);

  if (!loadedImages?.length) return <div>No Images</div>;

  const currentImage = loadedImages[index];
  const nextIndex = (index + 1) % loadedImages.length;
  const nextImage = loadedImages[nextIndex] || currentImage;
  const prevIndex = (index + loadedImages.length - 1) % loadedImages.length;
  const prevImage = loadedImages[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className={classes.DevAfterRoot}>
      <Gallery images={loadedImages} onClick={handleClick} enableImageSelection={false} />
      {!!currentImage && (
        <Block
          src={currentImage.original}
          currentimage={currentImage}
          nextImage={nextImage}
          prevImage={prevImage}
          handleClose={handleClose}
          handleMovePrev={handleMovePrev}
          handleMoveNext={handleMoveNext}
        />
      )}
    </div>
  );
};

const ImageGallery = () => {
  const { loading, error, data } = useQuery<{ photographs: Photograph[] }>(GET_PHOTOGRAPHS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Root}>
      <GraphLoader data={data} error={error} loading={loading} loadingMsg="Loading Photographs">
        <MyGallery />
      </GraphLoader>
    </div>
  );
};

export default ImageGallery;
