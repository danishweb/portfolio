import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quotes",
      title: "Animated Quotes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Quote Text",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "delay",
              title: "Animation Delay (in seconds)",
              type: "number",
              initialValue: 0.5,
              validation: (Rule) => Rule.required().min(0),
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
