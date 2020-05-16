import React, { ReactNode } from "react";
import Flex from "@components/Flex";
import Box from "@components/Box";
import { SystemProps } from "@models/styledSystem";

interface Props extends SystemProps {
  children: ReactNode;
  fullWidth?: boolean;
  debugging?: boolean;
}

/* These value below come from the spaces table made
 by design team, (max width -(minus) fixed widths
 of outside gutters)
 */
const WIDTHS_INNER_CONTENT = ["0px", "100%", "100%", "100%", "100%", "1200px", "1260px"];

/**
 * 12 column grid wrapper
 * @param children React Nodes content that have to be in the content
 * @param fullWidth if set to true, then the component will be shown without
 * paddingX variables enables.
 * @param debugging is true, then columns gets colored for debugging purposes
 * @param props are optional parameters to change properties of the parents
 * CSS properties.
 */
const ColumnsWrapper = ({ children,
  fullWidth = false,
  debugging = false,
  ...props } : Props) => (
    <Flex
      justifyContent="center"
      width="100%"
      height={["100%", "100%", "100%", "100%", "500px", "500px", "500px"]}
      {...props}
    >

      <Flex
        width={["0px",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "1920px"]}
        flexDirection="row"
        paddingX={[
          fullWidth ? "0px" : "12px",
          fullWidth ? "0px" : "12px",
          fullWidth ? "0px" : "24px",
          fullWidth ? "0px" : "24px",
          "100px",
          "120px",
          "120px"
        ]}
        backgroundColor={!debugging ? "black" : "green"}
      >

        {!fullWidth ? (
          <>

            <Box flex={1} backgroundColor={!debugging ? "black" : "yellow"} />

            <Flex
              width={WIDTHS_INNER_CONTENT}
              height="100%"
              backgroundColor="white"
              flexDirection="column"
            >
              {children}
            </Flex>

            <Box flex={1} backgroundColor={!debugging ? "black" : "yellow"} />

          </>
        ) : (
          <Flex
            width="100%"
            height="100%"
            backgroundColor="black"
            flexDirection="column"
            overflow="inherit"
          >
            {children}
          </Flex>
        )}

      </Flex>
    </Flex>
);

export default ColumnsWrapper;
