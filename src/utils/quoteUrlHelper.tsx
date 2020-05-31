import { IContentfulBase } from "@models/IContentfulBase";

export const quoteUrlHelper = (quote: IContentfulBase): string => {
  const quoteCategory = quote.category.slug;
  const quoteSlug = quote.id;

  return `${window.location.origin.toString()}/${quoteCategory}/${quoteSlug}`;
};
