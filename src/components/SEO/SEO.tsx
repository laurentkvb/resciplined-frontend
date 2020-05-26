import React from "react";
import { Helmet } from "react-helmet";

import i18n from "../../../config/i18n";
import { LocaleContext } from "../../layout/Layout";

interface SEOProps {
  title?: string;
  titleAlt?: string;
  description?: string;
  banner?: string;
}

/**
 * SEO data component
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  titleAlt,
  description,
  banner
}: SEOProps) => {
  const { locale } = React.useContext(LocaleContext);

  const { defaultSEO } = i18n[locale === undefined ? "en-US" : locale];

  const metaData = {
    title: defaultSEO.title + (title ? ` - ${title}` : ""),
    titleAlt: titleAlt || defaultSEO.titleAlt,
    description: description || defaultSEO.description,
    ogLang: defaultSEO.ogLang,
    banner: `${defaultSEO.siteUrl}${banner || defaultSEO.defaultBanner}`
  };

  return (
    <>
      <Helmet title={metaData.title}>
        <html lang={metaData.ogLang} />
        <meta name="description" content={metaData.description} />
        <meta name="image" content={metaData.banner} />
        <script async src="//embed.redditmedia.com/widgets/platform.js" charSet="UTF-8" />

      </Helmet>
    </>
  );
};

export default SEO;
