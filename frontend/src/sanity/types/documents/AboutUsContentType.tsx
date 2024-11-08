import { SanityProductType } from "@/sanity/types/SanityProductType";

export type AboutUsContentType = {
  name: string;
  slug: string;
  headerSection: {
    title: string;
    description: string;
    image: any;
  };
  iconDescriptionsSection: {
    id: string;
    icon: any;
    title: string;
    description: string;
  }[];
  twoImagesSection: {
    title: string;
    productLeft: SanityProductType;
    productRight: SanityProductType;
  };
};
