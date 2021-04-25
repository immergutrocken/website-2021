import NextImage from "next/image";
import Bubble from "../shared/bubble";

interface ImageGalleryProps {
  node: {
    images;
  };
}

const ImageGallery = (props: ImageGalleryProps): JSX.Element => {
  console.log(props.node.images);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-9">
      {props.node.images.map((image, index) => (
        <div className="relative" key={index}>
          <div className="relative h-48">
            <NextImage src={image.urlPreview} layout="fill" objectFit="cover" />
          </div>
          <Bubble className="absolute right-1 top-1 sm:w-9 sm:h-9" size="small">
            <NextImage src="/expander.svg" layout="fill" objectFit="contain" />
          </Bubble>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
