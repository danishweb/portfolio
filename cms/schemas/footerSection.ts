import { defineField, defineType } from 'sanity'

export const footerSection = defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'platform', 
              type: 'string', 
              title: 'Platform Name',
              validation: (Rule) => Rule.required(),
            },
            { 
              name: 'url', 
              type: 'url', 
              title: 'Profile URL',
              validation: (Rule) => Rule.required(),
            },
            { 
              name: 'icon', 
              type: 'image', 
              title: 'Platform Icon',
              validation: (Rule) => Rule.required(),
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/gif,image/webp'
              }
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'text', 
              type: 'string', 
              title: 'Button Text',
              validation: (Rule) => Rule.required(),
            },
            { 
              name: 'url', 
              type: 'url', 
              title: 'Button URL',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Button Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'PRIMARY' },
                  { title: 'Outline', value: 'OUTLINE' },
                  { title: 'White', value: 'WHITE' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'newTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
