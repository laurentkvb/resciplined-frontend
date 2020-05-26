import React, { ReactNode } from "react";

import "../../static/fonts/index.css";
import "@fortawesome/fontawesome-pro/js/all";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import SEO from "@components/SEO";


interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: ReactNode;
  pageContext: {
    locale: string;
  };
  locale: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LocaleContext: React.Context<any> = React.createContext("");


// const data = useStaticQuery(footerQuery);
// const { contentfulFooter } = data;
const Layout: React.FC<DefaultLayoutProps> = ({
  children,
  pageContext: { locale }
}: DefaultLayoutProps) => (
  <LocaleContext.Provider value={{ locale }}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />

      <div>
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  </LocaleContext.Provider>
);


export default Layout;
