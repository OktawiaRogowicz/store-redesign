export type HeaderContentType = {
  name: string;
  menu: {
    selected: {
      slug: string;
      route: string;
      title: string;
      isColored?: boolean;
    }[];
    collections: {
      slug: string;
      route: string;
      title: string;
    }[];
    categories: {
      slug: string;
      route: string;
      title: string;
    }[];
  };
};
