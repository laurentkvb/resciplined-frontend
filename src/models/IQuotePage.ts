import { ISliceFields } from "@models/ISliceFields";
import { File } from "@models/Common";

export interface IQuotePage extends ISliceFields{
  type: string;
  author: string;
  description: {
    description: string;
  },
  image: File,
  youtubeVideoId: string;

}
