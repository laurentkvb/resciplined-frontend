const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: "resciplined-frontend",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Crimson, sans-serif, Andada"],
          urls: ["/fonts/index.css"],
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/favicon.png",
        appName: null,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          firefox: true,
          windows: false
        }
      }
    },
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
  ],
};