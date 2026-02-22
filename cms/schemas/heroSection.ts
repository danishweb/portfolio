import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting Text',
      type: 'string',
      description: 'The greeting text (e.g., "Hi, I\'m Danish 🤘")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'object',
      fields: [
        {
          name: 'highlightedText',
          title: 'Highlighted Text',
          type: 'string',
          description: 'Text that will be underlined (e.g., "Building")',
        },
        {
          name: 'remainingText',
          title: 'Remaining Text',
          type: 'string',
          description: 'Rest of the heading text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      fields: [
        {
          name: 'role',
          title: 'Professional Role',
          type: 'string',
          description: 'Your professional title (e.g., "Software Developer")',
        },
        {
          name: 'company',
          title: 'Company Name',
          type: 'string',
          description: 'Your company name',
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'Your personal tagline',
        },
      ],
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
    defineField({
      name: 'sectionStyles',
      title: 'Section Styles',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          initialValue: '#f1f1f1',
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          initialValue: '#000000',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'greeting',
      subtitle: 'introduction.role',
      media: 'profileImage',
    },
  },
})
