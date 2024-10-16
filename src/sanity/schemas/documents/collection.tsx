import React from "react";
import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";
import { getExtension } from "@sanity/asset-utils";
import pluralize from "pluralize-esm";
import ShopifyIcon from "@/icons/ShopifyIcon";
import ShopifyDocumentStatus from "@/sanity/components/ShopifyDocumentStatus";
import { SanityShopifyCollectionType } from "@/sanity/schemas/shopify/shopifyCollection";

const GROUPS = [
  {
    name: "theme",
    title: "Theme",
  },
  {
    default: true,
    name: "editorial",
    title: "Editorial",
  },
  {
    name: "shopifySync",
    title: "Shopify sync",
    icon: ShopifyIcon,
  },
  {
    name: "seo",
    title: "SEO",
  },
];

export type SanityCollectionType = {
  route: string;
  titleProxy: string;
  slugProxy: string;
  store: SanityShopifyCollectionType;
};

export default defineType({
  name: "collection",
  title: "Collection",
  type: "document",
  icon: PackageIcon,
  groups: GROUPS,
  fields: [
    // Product hidden status
    // defineField({
    //   name: "hidden",
    //   type: "string",
    //   components: {
    //     field: CollectionHiddenInput,
    //   },
    //   hidden: ({ parent }) => {
    //     const isDeleted = parent?.store?.isDeleted;
    //     return !isDeleted;
    //   },
    // }),
    defineField({
      name: "slug",
      title: "Route",
      type: "string",
    }),
    // Title (proxy)
    defineField({
      name: "titleProxy",
      title: "Title",
      type: "proxyString",
      options: { field: "store.title" },
    }),
    // Slug (proxy)
    defineField({
      name: "slugProxy",
      title: "Slug",
      type: "proxyString",
      options: { field: "store.slug.current" },
    }),
    // Modules
    // defineField({
    //   name: "modules",
    //   title: "Modules",
    //   type: "array",
    //   description: "Editorial modules to associate with this collection",
    //   of: [
    //     { type: "module.callout" },
    //     { type: "module.callToAction" },
    //     { type: "module.image" },
    //     { type: "module.instagram" },
    //   ],
    //   group: "editorial",
    // }),
    // Shopify collection
    defineField({
      name: "store",
      title: "Shopify",
      type: "shopifyCollection",
      description: "Collection data from Shopify (read-only)",
      group: "shopifySync",
    }),
    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo.shopify",
      group: "seo",
    }),
  ],
  orderings: [
    {
      name: "titleAsc",
      title: "Title (A-Z)",
      by: [{ field: "store.title", direction: "asc" }],
    },
    {
      name: "titleDesc",
      title: "Title (Z-A)",
      by: [{ field: "store.title", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      imageUrl: "store.imageUrl",
      isDeleted: "store.isDeleted",
      rules: "store.rules",
      title: "store.title",
    },
    prepare(selection) {
      const { imageUrl, isDeleted, rules, title } = selection;
      const ruleCount = rules?.length || 0;

      return {
        media: (
          <ShopifyDocumentStatus
            isDeleted={isDeleted}
            type="collection"
            url={imageUrl}
            title={title}
          />
        ),
        subtitle:
          ruleCount > 0
            ? `Automated (${pluralize("rule", ruleCount, true)})`
            : "Manual",
        title,
      };
    },
  },
});
