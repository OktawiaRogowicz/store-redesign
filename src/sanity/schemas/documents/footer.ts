import { MdOutlineCategory } from "react-icons/md";
import { defineType, defineField } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "customerService",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "phoneNumber",
          type: "string",
        }),
        defineField({
          name: "email",
          type: "string",
        }),
        defineField({
          name: "openingHours",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "street",
          type: "string",
        }),
        defineField({
          name: "postalCode",
          type: "string",
        }),
        defineField({
          name: "city",
          type: "string",
        }),
        defineField({
          name: "country",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "credits",
      type: "string",
    }),
    defineField({
      name: "menu",
      type: "array",
      of: [
        {
          name: "footerMenuItem",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "reference",
              to: [
                { type: "page" },
                { type: "aboutUsPage" },
                { type: "returnsPage" },
                { type: "regulationsPage" },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "newsletter",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "description",
          type: "string",
        }),
        defineField({
          name: "inputPlaceholder",
          type: "string",
        }),
        defineField({
          name: "termsOfService",
          type: "string",
        }),
      ],
    }),
  ],
});
