import { category } from "./category";
import { footer } from "./footer";
import { header } from "./header";
import { page } from "./page";

import proxyString from "../objects/shopify/proxyString";
import { aboutUs } from "./about-us";
import { returns } from "./returns";
import { regulations } from "./regulations";
import product from "./product";
import { home } from "./home";
import collection from "./collection";
import shopifyCollection from "../shopify/shopifyCollection";
import seo from "../seo/seo";
import seoShopify from "../seo/seoShopify";
import seoDescription from "../seo/seoDescription";
import shopifyCollectionRule from "../shopify/shopifyCollectionRule";
import placeholderString from "../shopify/placeholderString";

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
