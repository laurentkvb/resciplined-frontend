import React, { useState, useEffect } from "react";
import "./gallery.css";

import { randomArrayELementHelper } from "@utils/randomArrayElementHelper";
import Lightbox from "react-images";
import Box from "@components/Box";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { IContentfulBase } from "@models/IContentfulBase";
import { IInternalCategory } from "@models/IInternalCategory";


interface Props {
  categoryImages: IInternalCategory[];
}

const Gallery: React.FC<Props> = ({ categoryImages } : Props) => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [lightboxIsOpen, setLightBoxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImages, setCurrentImages] = useState<IInternalCategory[]>([]);

  const availableQuotePages = useStaticQuery(pageQuery);

  const contentfulQuotes: IContentfulBase[] = availableQuotePages.contentfulQuotes.quotes;


  useEffect(() => {
    if (isFirstRun) {
      setIsFirstRun(false);
      setCurrentImages(shuffle(categoryImages));
    }
  }, [categoryImages, isFirstRun]);

  if (!categoryImages) return <Box />;


  // const openLightbox = (index: number, event: any) => {
  const openLightbox = (index: number) => {
    const imageSelected = currentImages[index];

    let items = contentfulQuotes;

    if (imageSelected.slug !== "random") {
      items = items
        .filter((test: IContentfulBase) => test.category.slug === imageSelected.slug);
      const item = randomArrayELementHelper(items);

      navigate(`${item.category.slug}/${item.id}`, { state: {
        modal: true,
      } }); // navigate to edit page
    } else {
      navigate("random", { state: {
        modal: true,
      } }); // navigate to edit page
    }


    // event.preventDefault();
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

  const gotoImage = () => {
    navigate("modal-example", { state: {
      modal: true
    } }); // navigate to edit page

    // setCurrentImage(index);
  };

  const handleClickImage = () => {
    if (currentImage === categoryImages.length - 1) return;
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
        {currentImages.map((obj: IInternalCategory, i: number) => (


          <article className="thumb" key={obj.src}>


            <span
              style={{
                backgroundImage: `url(${obj.src})`,
                cursor: "pointer",
                outline: "0px",
              }}
              // onClick={(e) => openLightbox(i, e)}
              onClick={() => openLightbox(i)}
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
        images={currentImages.map((img) => {
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
        category {
          name
          slug
        }
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
        category {
          name
          slug
        }
        title
        author
        description {
          json
        }
      }
      ... on ContentfulVideo {
        __typename
        id
        category {
          name
          slug
        }
        title
        author
        url
      }
      ... on ContentfulWebsite {
        __typename
        id
        category {
          name
          slug
        }
        url
      }
    }
  }
}
`;
