import React from "react";
import Text from "@components/Text";
import Box from "@components/Box";
import ColumnsWrapper from "@components/ColumnsWrapper/ColumnsWrapper";

const Hero: React.FC = () => (
  <ColumnsWrapper debugging>
    <Box>
      <Text variant="h1" color="black"> Hello World </Text>
    </Box>
  </ColumnsWrapper>
);

export default Hero;
