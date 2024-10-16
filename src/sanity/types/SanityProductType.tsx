export type SanityProductType = {
  createdAt: string;
  descriptionHtml: string;
  gid: string;
  id: number;
  isDeleted: boolean;
  options: {
    _key: string;
    _type: string;
    name: string;
    values: string[];
  }[];
  previewImageUrl: string;
  priceRange: {
    maxVariantPrice: number;
    minVariantPrice: number;
  };
  productType: string;
  slug: {
    current: string;
    _type: string;
  };
  status: string;
  tags: string;
  title: string;
  variants: {
    _key: string;
    _ref: string;
    _type: string;
    _weak: true;
  }[];
  vendor: string;
};
