import { File, Json } from "@models/Common";
import { IBackgroundImageProps } from "gatsby-background-image";
import { ISliceFields } from "@models/ISliceFields";

export interface SliceFields extends ISliceFields {
  title: Json;
  description: Json;
  asset?: (IBackgroundImageProps | File);
  assets? : (IBackgroundImageProps[] | File[]) ;
}
