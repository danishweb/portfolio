import { defineField, defineType } from 'sanity'

export const skillsSection = defineType({
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skillCategories',
      title: 'Skill Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'category', 
              type: 'string', 
              title: 'Category Name',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'skills',
              title: 'Skills',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'techStack' }],
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
          description: 'Use valid CSS color value',
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          description: 'Use valid CSS color value',
        },
      ],
    }),
  ],
});
