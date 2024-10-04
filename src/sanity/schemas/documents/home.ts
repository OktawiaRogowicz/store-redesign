import { MdOutlineCategory } from "react-icons/md";
import { defineType, defineField } from "sanity";

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
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "products",
          title: "Products",
          type: "array",
          of: [
            defineField({
              name: "product",
              type: "reference",
              to: [{ type: "product" }],
            }),
          ],
        }),
      ],
    }),
  ],
});
