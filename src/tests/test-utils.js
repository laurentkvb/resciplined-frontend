import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

const customRender = (ui, options) => render(
  ui, { wrapper: AllTheProviders, ...options }
);

export * from "@testing-library/react";
export { customRender as render };
