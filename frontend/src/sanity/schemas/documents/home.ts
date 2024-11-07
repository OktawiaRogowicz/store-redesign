import { MdOutlineCategory } from "react-icons/md";
import { defineType, defineField } from "sanity";
import { SanityProductType } from "../../types/SanityProductType";

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

export const home = defineType({
  name: "homePage",
  title: "Home Page",
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
      readOnly: true,
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "button",
          type: "string",
        }),
        defineField({
          name: "link",
          type: "reference",
          to: [{ type: "collection" }],
        }),
        defineField({
          name: "images",
          title: "images",
          type: "array",
          of: [
            defineField({
              name: "imagePair",
              title: "Image pair",
              type: "object",
              fields: [
                defineField({
                  name: "left",
                  type: "image",
                }),
                defineField({
                  name: "right",
                  type: "image",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "productsSliderSection",
      title: "Products slider section",
      type: "reference",
      to: [{ type: "collection" }],
    }),
  ],
});
