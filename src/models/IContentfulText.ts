import { IContentfulBase } from "@models/IContentfulBase";
import { Json } from "@models/Common";

export interface IContentfulText extends IContentfulBase {
  description: Json;
}
