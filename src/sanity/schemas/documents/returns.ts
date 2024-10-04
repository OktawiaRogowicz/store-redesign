import { MdOutlineCategory } from "react-icons/md";

import { defineType, defineField } from "sanity";

export const returns = defineType({
  name: "returnsPage",
  title: "Returns page",
  type: "document",
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
  ],
});
