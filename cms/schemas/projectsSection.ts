import { defineField, defineType } from "sanity";

export const projectsSection = defineType({
  name: "projectsSection",
  title: "Projects Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Project Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Project Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Project Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "gradient",
              title: "Gradient Colors",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(2).max(2),
            },
            {
              name: "url",
              title: "Project URL",
              type: "url",
            },
            {
              name: "tech",
              title: "Technologies Used",
              type: "array",
              of: [
                {
                  type: "reference",
                  to: [{ type: "techStack" }],
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
      name: "sectionStyles",
      title: "Section Styles",
      type: "object",
      fields: [
        {
          name: "backgroundColor",
          title: "Background Color",
          type: "string",
          description: "Use valid CSS color value",
        },
        {
          name: "textColor",
          title: "Text Color",
          type: "string",
          description: "Use valid CSS color value",
        },
      ],
    }),
  ],
});
