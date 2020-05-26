import React, { useState, useEffect } from "react";
import "./gallery.css";

import Lightbox from "react-images";
import Box from "@components/Box";
import { graphql, navigate, useStaticQuery } from "gatsby";


interface Props {
  images: any[];
}

const Gallery: React.FC<Props> = ({ images } : Props) => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [lightboxIsOpen, setLightBoxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImages, setCurrentImages] = useState<any[]>([]);

  const availableQuotePages = useStaticQuery(pageQuery);

  const contentfulQuotes = availableQuotePages.contentfulQuotes.quotes;


  useEffect(() => {
    if (isFirstRun) {
      setIsFirstRun(false);
      setCurrentImages(shuffle(images));
    }
  }, [images, isFirstRun]);

  if (!images) return <Box />;


  const openLightbox = (index: number, event: any) => {
    const imageSelected = images[index];

    // random, but should be based on the image type clicked
    const items = contentfulQuotes.filter((test: any) => test.category.toLowerCase().replace(" ", "_") === imageSelected.type.toLowerCase());
    const item = items[Math.floor(Math.random() * items.length)];


    navigate(`${item.category.toLowerCase().replace(" ", "_")}/${item.id}`, { state: {
      modal: true
    } }); // navigate to edit page


    event.preventDefault();
    // setCurrentImage(index);
    // setLightBoxIsOpen(true);
    // navigate("modal-example", { state: {
    //   modal: true,
    //   noScroll: false
    // } }); // navigate to edit page
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
    console.log(`Index: ${index}`);
    navigate("modal-example", { state: {
      modal: true
    } }); // navigate to edit page

    // setCurrentImage(index);
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

            <h2 style={{ zIndex: 1 }}>{obj.title}</h2>
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

export const pageQuery = graphql` {
  contentfulQuotes {
    quotes {
      ... on ContentfulImage {
        id
        __typename
        category
        title
        author
        image {
          file {
            url
          }
        }
      }
      ... on ContentfulText {
        __typename
        id
        category
        title
        author
        description {
          json
        }
      }
      ... on ContentfulVideo {
        __typename
        id
        category
        title
        author
        url
      }
      ... on ContentfulWebsite {
        __typename
        id
        category
        url
      }
    }
  }
}
`;
