import { Document } from "@contentful/rich-text-types";

export interface File {
  file: Url;
}

export interface Url {
  url: string;
}

export interface Json {
  json: Document
}
