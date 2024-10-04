export const locales = ["pl", "en"] as string[];
export const defaultLocale = "pl" as string;
export const localePrefix = "as-needed";

type RouteKey = {
  key: string;
  href: string;
};

export const ROUTES = {
  home: {
    key: "home",
    href: "/",
  },
  aboutUs: {
    key: "about-us",
    href: "/about-us",
  },
  returns: {
    key: "returns",
    href: "/returns",
  },
  cart: {
    key: "cart",
    href: "/cart",
  },
  products: {
    key: "cart",
    href: "/products",
  },
};

type HeaderConfigurationType = {
  [categoryKey: string]: {
    [routeKey: string]: {
      route: RouteKey;
    };
  };
};

export const headerConfiguration: HeaderConfigurationType = {
  general: {
    home: {
      route: ROUTES.home,
    },
  },
};
