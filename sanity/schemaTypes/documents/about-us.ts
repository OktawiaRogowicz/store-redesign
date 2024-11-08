import { MdOutlineCategory } from "react-icons/md";
import { defineType, defineField } from "sanity";
import { SanityProductType } from "../../types/SanityProductType";

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

export const aboutUsType = defineType({
  name: "aboutUsPage",
  title: "About us page",
  type: "document",
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "string",
      // readOnly: true,
    }),
    defineField({
      name: "headerSection",
      title: "CartSummary section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "image",
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "iconDescriptionsSection",
      title: "Icon descriptions Section",
      type: "array",
      of: [
        {
          name: "iconDescriptionItem",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              type: "image",
            }),
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "twoImagesSection",
      title: "Two images section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "productLeft",
          title: "Product on the left",
          type: "reference",
          to: [{ type: "product" }],
        }),
        defineField({
          name: "productRight",
          title: "Product on the right",
          type: "reference",
          to: [{ type: "product" }],
        }),
      ],
    }),
  ],
});
