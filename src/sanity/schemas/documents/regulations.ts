import { MdOutlineCategory } from "react-icons/md";

import { defineType, defineField } from "@sanity-typed/types";

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
  ],
});
