import { SanityProductType } from "@/sanity/types/SanityProductType";

export type HomeContentType = {
  name: string;
  slug: string;
  heroSection: {
    title: string;
    button: string;
    slug: string;
    images: { left: any; right: any }[];
  };
  productsSliderSection: {
    title: string;
    products: SanityProductType[];
  };
};
