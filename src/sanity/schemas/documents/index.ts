import { category } from "./category";
import { footer } from "./footer";
import { header } from "./header";
import { page } from "./page";

import proxyString from "@/sanity/schemas/objects/shopify/proxyString";
import { aboutUs } from "@/sanity/schemas/documents/about-us";
import { returns } from "@/sanity/schemas/documents/returns";
import { regulations } from "@/sanity/schemas/documents/regulations";
import product from "@/sanity/schemas/documents/product";
import { home } from "@/sanity/schemas/documents/home";

const documents = [
  category,
  footer,
  header,
  page,
  home,
  aboutUs,
  returns,
  regulations,
  product,
];

// const moduleObjects = [shopifyProduct];
const shopifyObjects = [proxyString];
const objects = [...shopifyObjects];

export const schemaTypes = [...documents, ...objects];
