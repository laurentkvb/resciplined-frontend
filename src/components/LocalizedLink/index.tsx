/* eslint-disable*/
import React from "react";
import { Link } from "gatsby";
import { LocaleContext } from "../../layout/Layout";
import locales from "../../../config/i18n.js";
import i18n from "../../../config/i18n";
interface Props {
  to: string;
  children: React.ReactNode;
}

export const LocalizedLink = ({ to, ...props }: Props) => {
  const { locale } = React.useContext(LocaleContext);
  const isIndex = to === "/";

  const localeNotNull = i18n[locale === undefined ? "en-US" : "en-US"];

  const path = locales["en-US"].default
    ? to
    : `${locales[localeNotNull].path}${isIndex ? "" : `${to}`}`;
  return <Link {...props} to={path} />;
};
export default LocalizedLink;
