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

// const imageWithSize = {
//   '6mb':
//     'https://s3.amazonaws.com/files.dpreview.com/sample_galleries/5930710153/2558684247.jpg?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4NPXSRZNWJ7B6UIE/20230107/us-east-1/s3/aws4_request&X-Amz-Date=20230107T100044Z&X-Amz-SignedHeaders=host&X-Amz-Signature=4e9b1316a64e83e5d6a5684d567d8dfc0922016751011bd3241c790687f7b834',
//   '3.5mb':
//     'https://s3.amazonaws.com/files.dpreview.com/sample_galleries/5930710153/8395616540.jpg?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4NPXSRZNWJ7B6UIE/20230107/us-east-1/s3/aws4_request&X-Amz-Date=20230107T100044Z&X-Amz-SignedHeaders=host&X-Amz-Signature=03095ffbcefa90b32501723ca93f17721d77e32809e1099e1cb2892517413805',
//   '2.4mb':
//     'https://s3.amazonaws.com/files.dpreview.com/sample_galleries/5930710153/8778847729.jpg?X-Amz-Expires=3600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4NPXSRZNWJ7B6UIE/20230107/us-east-1/s3/aws4_request&X-Amz-Date=20230107T100044Z&X-Amz-SignedHeaders=host&X-Amz-Signature=8a3fe7445022e3fe463e113b2fdc41c05a3b5df00192a74d4311edc26ded9e84',
// };

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

const MyGallery = (props: { photographs?: Photograph[] }) => {
  // const [loadedImages, setLoadedImages] = useState(
  //   props.photographs?.map(photograph => {
  //     return {
  //       src: photograph.url,
  //       original: photograph.url,
  //       width: 0,
  //       height: 0,
  //       caption: photograph.caption,
  //     };
  //   }),
  // );

  const loadedImages = props.photographs?.map(photograph => {
    return {
      src: photograph.url,
      original: photograph.url,
      width: 100,
      height: 100,
      caption: photograph.caption || 'No Caption',
      tags: [
        { value: 'Nature', title: 'Nature' },
        { value: 'Flora', title: 'Flora' },
      ],
    };
  });

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
