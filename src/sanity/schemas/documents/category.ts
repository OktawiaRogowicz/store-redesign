import {defineField, defineType} from 'sanity'
import { MdOutlineCategory } from "react-icons/md";

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    preview: {
        select: {
            title: 'internalName',
        },
    },
    icon: MdOutlineCategory,
    fields: [
        defineField({
            name: 'internalName',
            title: 'Internal name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
    ],
})
