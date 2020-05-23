import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Text from "@components/Text";

import "./style.css";

const ModalExamplePage = () => {
  const [page, setPage] = useState(0);

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
              <h2>{`Random value: ${page}`}</h2>

              <h1>
                Website Title
              </h1>
            </header>
          )}
          <Text variant="h1" display="none">{`Random value: ${page}`}</Text>


          <h2>Modal Page</h2>

          <Link to="/">Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default ModalExamplePage;
