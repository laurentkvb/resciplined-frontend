import * as React from "react";

import Gallery from "@components/Gallery";
import Layout from "@components/Layout/Layout";
import SEO from "@components/SEO";

import { graphql, useStaticQuery } from "gatsby";
import { IContentfulCategory } from "@models/IContentfulCategory";
import { IInternalCategory } from "@models/IInternalCategory";


const HomePage: React.FC = () => {
  const data = useStaticQuery(pageQuery);

  const convertCategories = (array: IContentfulCategory[]) => {
    const result: IInternalCategory[] = [];


    array.forEach(((value: IContentfulCategory) => {
      const imageQuery = {
        src: value.image.file.url,
        thumbnail: value.image.file.url,
        title: value.name,
        desc: "Nothing",
        type: value.name.toLowerCase().replace(" ", "_"),
        slug: value.slug,
      };


      result.push(imageQuery);
    }));

    return result;
  };

  const images = convertCategories(data.contentfulQuotes.categories);


  return (
    <Layout>
      <SEO />
      <Gallery categoryImages={images} />
    </Layout>
  );
};

const pageQuery = graphql`
{
  contentfulQuotes {
    categories {
      name
      slug
      image {
        file {
          url
        }
      }
    }
  }
}
`;


export default HomePage;
