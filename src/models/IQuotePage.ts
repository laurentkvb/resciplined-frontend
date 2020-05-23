import { ISliceFields } from "@models/ISliceFields";
import { File, Json } from "@models/Common";

export interface IQuotePage extends ISliceFields{
  type: string;
  author: string;
  description: Json;
  image: File,
  youtubeVideoId: string;

}
