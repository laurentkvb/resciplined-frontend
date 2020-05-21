import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Text from "@components/Text";

import "./style.css";
import Box from "@components/Box";

const ModalExamplePage = ({ data }) => {
  const [page, setPage] = useState(0);
  useStaticQuery(pageQuery);

  const { title, description, image } = data.contentfulPage;


  const randomValue = () => {
    const min = 0;
    const max = 1000;
    return Math.random() * (+max - +min) + +min;
  };

  useEffect(() => {
    setPage(randomValue);
  }, []);

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div style={{ zIndex: 10000 }}>
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header>

              <h1>
                {/* Website Title */}
              </h1>
            </header>
          )}

          {image !== null ? (
            <Box
              width="100%"
              height="500px"
              backgroundImage={`url(${image.file.url})`}
              backgroundPosition="center"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
            />

          )
            : (
              <>
                <Text variant="h3" color="white" textShadow="">{`${title}`}</Text>
                <Text variant="h3" color="white">{`${description.description}`}</Text>
              </>
            )}

          <Text variant="h3" color="white">{`${page}`}</Text>


          <Link to="/">Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default ModalExamplePage;

export const pageQuery = graphql`
query getPageQuote($id: String) {
  contentfulPage(id: {eq: $id}) {
    title
    description {
      description
    }
    image {
      file {
        url
      }
    }
  }
  
}

`;
