import React, { useCallback, useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import classes from './ImageGallery.module.scss';

const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3,
    caption: 'Awesome photo',
  },
  {
    src: 'https://source.unsplash.com/u9cG4cuJ6bU/4927x1000',
    width: 4927,
    height: 1000,
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 4,
    height: 3,
  },
];

const ImageGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.addEventListener('', () => {
      console.log('loaded');
    });
    document.addEventListener('load', () => {
      console.log('loaded');
    });
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={classes.Root}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                source: photo.src,
                // srcset: 'foo srcset',
                caption: photo.caption || 'No Caption',
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};

export default ImageGallery;
