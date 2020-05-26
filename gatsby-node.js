/* eslint-disable */

// const _ = require("lodash");
const locales = require("./config/i18n");
const path = require("path");

const {
  replaceTrailing,
  replaceBoth
} = require("./src/utils/gatsby-node-helpers");

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@sections": path.resolve(__dirname, "src/sections"),
        "@models": path.resolve(__dirname, "src/models"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@images": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils"),
      }
    }
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  Object.keys(locales).map(lang => {
    page.path = replaceTrailing(page.path);
    const name = replaceBoth(page.path);
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`;
    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name
      }
    });
  });
};

// /* Create pages for all cases with a slug */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
{
  pages: contentfulQuotes {
    quotes {
      ... on ContentfulImage {
        id
        __typename
        category
        title
        author
        image {
          file {
            url
          }
        }
      }
      ... on ContentfulText {
        __typename
        id
        category
        title
        author
        description {
          json
        }
      }
      ... on ContentfulVideo {
        __typename
        id
        category
        title
        author
        url
      }
      ... on ContentfulWebsite {
        __typename
        id
        category
        url
      }
    }
  }
}

  `);

  data.pages.quotes.forEach(page => {
        let slug = page.id;
        let category = page.category.toLowerCase().replace(" ", "_");
        console.log(category)

        return createPage({
          path: `${category}/${slug}`,
          component: path.resolve("./src/templates/modal/modal.tsx"),
          context: {
            slug: slug,
            id: slug,
            data: page,
          }
        });
  });
};

