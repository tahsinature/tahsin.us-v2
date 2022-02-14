import React from 'react';
// import Resizer from 'react-image-file-resizer';

// import images from 'src/assets/images';

// const resizeFile = (file: any) =>
//   new Promise(resolve => {
//     // Resizer.imageFileResizer(
//     //   file,
//     //   300,
//     //   300,
//     //   'JPEG',
//     //   100,
//     //   0,
//     //   uri => {
//     //     resolve(uri);
//     //   },
//     //   'base64',
//     // );
//   });

function ResizableImage(props: { src: string }) {
  // const reader = new FileReader();

  // reader.addEventListener('load', () => {
  //   console.log('loaded');
  //   // setImageToResizeUri(reader.result);
  // });

  // if (!props.src.startsWith('data:image')) {
  //   reader.readAsDataURL(props.src as any);
  //   // URL.createObjectURL(props.src as any);
  //   // resizeFile(props.src).then(console.log).catch(console.error);
  //   // console.log(props.src);
  // }

  return (
    // <img src={images.gifs.iPhoneSpinner} alt="" />
    <img src={props.src} alt={'logo'} />
    // <div>
    // </div>
  );
}

export default ResizableImage;
