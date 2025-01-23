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
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform Name' },
            { name: 'url', type: 'url', title: 'Profile URL' },
            { name: 'icon', type: 'string', title: 'Icon Name' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Link Text' },
            { name: 'url', type: 'string', title: 'URL' },
          ],
        },
      ],
    }),
  ],
})
