interface ImageGalleryProps {
  node: {
    images;
  };
}

const ImageGallery = (props: ImageGalleryProps): JSX.Element => {
  console.log(props);

  return <div></div>;
};

export default ImageGallery;
