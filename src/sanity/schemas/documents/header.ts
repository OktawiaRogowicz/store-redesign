import { defineType, defineField } from "sanity";

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "menu",
      type: "object",
      fields: [
        defineField({
          name: "selected",
          type: "array",
          of: [
            {
              name: "header-menu-item",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "page" }],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "collections",
          type: "array",
          of: [
            {
              name: "menu-item",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "page" }],
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "categories",
          type: "array",
          of: [
            {
              name: "menu-item",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  type: "string",
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "category" }],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
