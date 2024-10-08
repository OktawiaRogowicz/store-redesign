import { defineField, defineType } from "sanity";
import { MdOutlineCategory } from "react-icons/md";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  preview: {
    select: {
      title: "internalName",
    },
  },
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: "internalName",
      title: "Internal name",
      type: "string",
      description:
        "This field is used only in your Sanity project structure, for example showing up in lists. It won't be visible in the store.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Create a route for this page.",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
  ],
});
