import React, { useState, useEffect } from "react";
import Lightbox from "react-images";
import Box from "@components/Box";


interface Props {
  images: any[];
}

const Gallery: React.FC<Props> = ({ images } : Props) => {
  const [lightboxIsOpen, setLightBoxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImages, setCurrentImages] = useState<any[]>([]);

  useEffect(() => {
    setCurrentImages(shuffle(images));
  }, [images]);

  if (!images) return <Box />;


  const openLightbox = (index: number, event: any) => {
    event.preventDefault();
    setCurrentImage(index);
    setLightBoxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightBoxIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };

  const gotoImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleClickImage = () => {
    if (currentImage === images.length - 1) return;
    gotoNext();
  };

  const shuffle = (array: any[]) => {
    const result = array;
    let currentIndex = array.length; let temporaryValue; let
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      result[currentIndex] = array[randomIndex];
      result[randomIndex] = temporaryValue;
    }

    return result;
  };


  return (
    <>
      <>
        {currentImages.map((obj: any, i: number) => (
          <article className="thumb" key={obj.src}>
            <span
              style={{
                backgroundImage: `url(${obj.src})`,
                cursor: "pointer",
                outline: "0px",
              }}
              onClick={(e) => openLightbox(i, e)}
              className="image"
            >
              <img
                style={{ display: "None" }}
                src={obj.thumbnail}
                alt=""
                title={obj.title}
              />
            </span>
            <h2>{obj.title}</h2>
            <p>{obj.desc}</p>
          </article>
        ))}
      </>
      <Lightbox
        currentImage={currentImage}
        images={images.map((img) => {
          const result = img;
          result.caption = `${img.title} - ${img.desc}`;
          return result;
        })}
        isOpen={lightboxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
      />
    </>
  );
};


export default Gallery;
