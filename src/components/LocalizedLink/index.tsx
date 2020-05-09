/* eslint-disable*/
import React from "react";
import { Link } from "gatsby";
import { LocaleContext } from "../../layout/Layout";
import locales from "../../../config/i18n.js";
interface Props {
  to: string;
  children: React.ReactNode;
}

export const LocalizedLink = ({ to, ...props }: Props) => {
  const { locale } = React.useContext(LocaleContext);
  const isIndex = to === "/";
  const path = locales[locale].default
    ? to
    : `${locales[locale].path}${isIndex ? "" : `${to}`}`;
  return <Link {...props} to={path} />;
};
export default LocalizedLink;
