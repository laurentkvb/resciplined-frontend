import * as React from "react";
import { ReactNode } from "react";
import { SliceFields } from "@models/SliceFields";

interface OverviewPageContext {
  data: {
    contentfulPage: {
      slices: SliceFields[]
    };
  };
}

// const Page: React.FC<OverviewPageContext> = ({ data }) => {
const Page: React.FC<OverviewPageContext> = () => {
  // useStaticQuery(pageQuery);

  const componentReactNodes : ReactNode[] = [];
  // slicesReducer(data
  //     .contentfulPage.slices);

  return (
    <>
      {componentReactNodes}
    </>
  );
};

// export const pageQuery = graphql`
// query Page($slug: String) {
//   contentfulPage(slug: {eq: $slug}) {
//     title
//   }
// }
// `;

export default Page;
