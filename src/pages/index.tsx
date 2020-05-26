import * as React from "react";

import Gallery from "@components/Gallery";
import Layout from "@components/Layout/Layout";
import SEO from "@components/SEO";

import { graphql, useStaticQuery } from "gatsby";


const HomePage: React.FC = () => {
  const data = useStaticQuery(pageQuery);

  const convertCategories = (array: any[]) => {
    const result: any[] = [];


    array.forEach(((value: any) => {
      const imageQuery = {
        src: value.image.file.url,
        thumbnail: value.image.file.url,
        title: value.name,
        desc: "Nothing",
        type: value.name.toLowerCase().replace(" ", "_"),
      };


      result.push(imageQuery);
    }));

    return result;
  };

  const images = convertCategories(data.contentfulQuotes.categories);


  return (
    <Layout>
      <SEO />
      <Gallery images={images} />
    </Layout>
  );
};

const pageQuery = graphql`
{
  contentfulQuotes {
    categories {
      name
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
