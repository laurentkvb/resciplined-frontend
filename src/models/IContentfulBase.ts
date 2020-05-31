import { IContentfulCategory } from "@models/IContentfulCategory";

export interface IContentfulBase {
  id: number;
  __typename: string;
  title: string;
  author: string;
  category: IContentfulCategory;
}
