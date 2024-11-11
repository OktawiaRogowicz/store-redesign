import { defineType, defineField } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Internal name",
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
                  title: "Slug",
                  name: "slug",
                  type: "slug",
                  options: {
                    source: "title",
                    maxLength: 200, // will be ignored if slugify is set
                    slugify: (input) =>
                      input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
                  },
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "collection" }],
                }),
                defineField({
                  name: "isColored",
                  title: "Colored",
                  initialValue: false,
                  description:
                    'Colored items font color will be red. For example: by default, link to the "sale" collection is colored.',
                  type: "boolean",
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
                  title: "Slug",
                  name: "slug",
                  type: "slug",
                  options: {
                    source: "title",
                    maxLength: 200, // will be ignored if slugify is set
                    slugify: (input) =>
                      input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
                  },
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "collection" }],
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
                  title: "Slug",
                  name: "slug",
                  type: "slug",
                  options: {
                    source: "title",
                    maxLength: 200, // will be ignored if slugify is set
                    slugify: (input) =>
                      input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
                  },
                }),
                defineField({
                  name: "Link",
                  type: "reference",
                  to: [{ type: "collection" }],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
