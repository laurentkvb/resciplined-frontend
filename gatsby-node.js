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
        "@slices": path.resolve(__dirname, "src/slices")
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
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//
//   const { data } = await graphql(`
//     {
//       overviewPageItems: allContentfulPage {
//         nodes {
//           slug
//           }
//       }
//     }
//   `);
//
//   data.overviewPageItems.nodes.forEach(page => {
//       Object.keys(locales).map(lang => {
//         let slug = page.slug;
//
//         if(page.slug && page.slug === "home") {
//           slug = `/`;
//         }
//         return createPage({
//           path: `${slug}`,
//           component: path.resolve("./src/templates/Page/Page.tsx"),
//           context: {
//             slug: page.slug,
//             locale: lang
//           }
//         });
//       });
//   });
// };
//
