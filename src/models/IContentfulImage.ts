import { IContentfulBase } from "@models/IContentfulBase";
import { File } from "@models/Common";

export interface IContentfulImage extends IContentfulBase {
  image: File;
}
