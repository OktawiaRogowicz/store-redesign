import { defineType, defineField } from "sanity";
import { MdOutlineCategory } from "react-icons/md";

export type RegulationsContentType = {
  name: string;
};

export const regulationsType = defineType({
  name: "regulationsPage",
  title: "Regulations page",
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
  ],
});
