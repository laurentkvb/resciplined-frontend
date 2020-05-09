import React, { ReactNode } from "react";

import { Box } from "@components/Box";
import { SliceFields } from "@models/SliceFields";
import Hero from "@slices/Hero";


export const slicesReducer = (slices: SliceFields[])
: ReactNode[] => {
  const result : ReactNode[] = [];

  if (slices !== null) {
    slices?.forEach((slice: SliceFields, key: number) => {
      switch (slice.sliceType) {
        case "Hero":
          return result.push(<Hero />);
        default:
          return <Box key={key} />;
      }
    });
  }

  return result;
};
