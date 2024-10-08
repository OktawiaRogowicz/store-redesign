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
import collection from "@/sanity/schemas/documents/collection";
import shopifyCollection from "@/sanity/schemas/shopify/shopifyCollection";
import seo from "@/sanity/schemas/seo/seo";
import seoShopify from "@/sanity/schemas/seo/seoShopify";
import seoDescription from "@/sanity/schemas/seo/seoDescription";
import shopifyCollectionRule from "@/sanity/schemas/shopify/shopifyCollectionRule";
import placeholderString from "@/sanity/schemas/shopify/placeholderString";

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
  collection,
];

const seoSchemas = [seo, seoShopify, seoDescription];

// const moduleObjects = [shopifyProduct];
const shopifyObjects = [proxyString];
const objects = [...shopifyObjects];

const shopify = [shopifyCollection, shopifyCollectionRule, placeholderString];

export const schemaTypes = [
  ...documents,
  ...objects,
  ...seoSchemas,
  ...shopify,
];
