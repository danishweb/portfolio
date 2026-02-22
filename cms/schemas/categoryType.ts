import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'color',
      title: 'Category Color',
      type: 'string',
      description: 'Color for the category tag (hex code)',
      initialValue: '#9333ea', // Default purple color
      validation: (Rule) => 
        Rule.required()
          .regex(/^#[0-9A-Fa-f]{6}$/, {
            name: 'hex color',
            invert: false,
          })
          .error('Please enter a valid hex color code (e.g., #9333ea)'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
