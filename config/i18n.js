const website = require("./website");

module.exports = {
  "en-US": {
    default: true,
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
    default: false,
    path: "nl",
    locale: "nl",
    siteLanguage: "nl",
    ogLang: "nl",
    defaultTitle: "Resciplined",
    defaultTitleAlt: "Resciplined",
    defaultDescription: "Be responsible. Be disciplined",
    headline: "Be responsible. Be disciplined",
    homeBannerTitle: "etc.",
    defaultSEO: {
      siteLanguage: "nl",
      ogLang: "nl_NL",
      title: "Resciplined",
      titleAlt: "Resciplined",
      description: "Be responsible. Be disciplined",
      headline: "defaultHeadline",
      defaultBanner: "",
      siteUrl: "https://www.resciplined.com"
    },
  }
};
