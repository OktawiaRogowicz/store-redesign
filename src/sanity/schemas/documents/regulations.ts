import { MdOutlineCategory } from "react-icons/md";

import { defineType, defineField } from "@sanity-typed/types";

export type RegulationsContentType = {
  name: string;
};

export const regulations = defineType({
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
