import NextImage from "next/image";
import { useState } from "react";
import Bubble from "../shared/bubble";
import Label from "../shared/label";

interface ImageGalleryProps {
  node: {
    images;
  };
}

const ImageGallery = (props: ImageGalleryProps): JSX.Element => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-9">
        {props.node.images.map((image, index) => (
          <div
            className="relative cursor-pointer"
            key={index}
            onClick={() => {
              setShowLightbox(true);
              setCurrentImageIndex(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "enter") {
                setShowLightbox(true);
                setCurrentImageIndex(index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="relative h-48 md:h-64 xl:h-96">
              <NextImage
                src={image.urlPreview}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Bubble className="absolute right-1 top-1" size="small">
              <NextImage
                src="/expander.svg"
                layout="fill"
                objectFit="contain"
              />
            </Bubble>
          </div>
        ))}
      </div>
      <div
        className={`fixed top-0 left-0 bg-white w-screen h-screen z-10 ${
          showLightbox ? "flex justify-center" : "hidden"
        }`}
      >
        <Bubble
          className="absolute top-10 right-2 md:right-9 md:top-14"
          onClick={() => {
            setShowLightbox(false);
            setCurrentImageIndex(null);
          }}
        >
          <NextImage src="/close.svg" layout="fill" objectFit="contain" />
        </Bubble>
        {currentImageIndex != null && (
          <div className="w-full sm:max-w-4xl mx-5 sm:mx-8 h-full flex flex-col justify-center">
            <div className="relative w-full h-1/2">
              <NextImage
                src={props.node.images[currentImageIndex].url}
                layout="fill"
                objectFit="contain"
                alt={props.node.images[currentImageIndex].alt}
              />
              <Bubble
                className="absolute top-1/2 -mt-4 sm:-mt-7 -left-4 md:-left-7"
                onClick={() => {
                  if (currentImageIndex === 0) {
                    setCurrentImageIndex(props.node.images.length - 1);
                  } else {
                    setCurrentImageIndex(currentImageIndex - 1);
                  }
                }}
              >
                <NextImage
                  src="/arrow-left.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </Bubble>
              <Bubble
                className="absolute top-1/2 -mt-4 sm:-mt-7 -right-4 md:-right-7"
                onClick={() => {
                  if (currentImageIndex === props.node.images.length - 1) {
                    setCurrentImageIndex(0);
                  } else {
                    setCurrentImageIndex(currentImageIndex + 1);
                  }
                }}
              >
                <NextImage
                  src="/arrow-right.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </Bubble>
            </div>
            <div className="w-full font-milona flex flex-row items-center justify-end space-x-3 mt-3">
              <Label>Foto</Label>
              <span className="text-2xl sm:text-3xl">
                {props.node.images[currentImageIndex].credits}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
