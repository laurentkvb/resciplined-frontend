/* eslint-disable */

import React from "react";

import Layout from "./src/layout/Layout";

interface Props {
  element: any;
  props: any;
}

/**
 * Wrapper component that wraps pages that won’t get unmounted on page change.
 * https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
 */
const wrapPageElement: React.FC<Props> = ({ element, props }: Props) => (
  <Layout {...props}>{element}</Layout>
);

export default wrapPageElement;
