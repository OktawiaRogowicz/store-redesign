import { SanityProductType } from "@/sanity/types/SanityProductType";
import { PortableTextBlock } from "@portabletext/types";

export type ProductContentType = {
  moreProductsSection: any[];
  sizeChart: {
    rows: {
      cells: string[];
    }[];
  };
  body: PortableTextBlock[];
  store: SanityProductType;
};
