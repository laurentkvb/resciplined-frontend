const website = require("./website");

module.exports = {
  "en-US": {
    path: "en",
    locale: "en-US",
    siteLanguage: "en",
    ogLang: "en-US",
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    homeBannerTitle: "Resciplined",
    defaultSEO: {
      siteLanguage: "en",
      ogLang: "en_US",
      title: "Resciplined",
      titleAlt: "Resciplined",
      description:
          "Restaurant",
      headline: "defaultHeadline",
      defaultBanner: "",
      siteUrl: "https://www.resciplined.com"
    },
  },
  nl: {
    default: true,
    path: "nl",
    locale: "nl",
    siteLanguage: "nl",
    ogLang: "nl",
    defaultTitle: "website.title",
    defaultTitleAlt: "website.titleAlt",
    defaultDescription: "website.description",
    headline: "website.headline",
    homeBannerTitle: "etc.",
    defaultSEO: {
      siteLanguage: "nl",
      ogLang: "nl_NL",
      title: "Resciplined",
      titleAlt: "Resciplined",
      description:
          "Restaurant",
      headline: "defaultHeadline",
      defaultBanner: "",
      siteUrl: "https://www.resciplined.com"
    },
  }
};
