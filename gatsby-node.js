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
      pages: allContentfulPage {
        nodes {
          id
          type
        }
      }
    }
  `);

  data.pages.nodes.forEach(page => {
        let slug = page.id;
        let type = page.type.toLowerCase();

        return createPage({
          path: `${type}/${slug}`,
          component: path.resolve("./src/templates/modal/Modal.tsx"),
          context: {
            slug: slug,
            id: slug,
          }
        });
  });
};

