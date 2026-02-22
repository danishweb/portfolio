import { defineField, defineType } from "sanity";

export const techStack = defineType({
  name: "techStack",
  title: "Tech Stack",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Technology Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used for icon mapping (e.g., typescript, react, nodejs)",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      description: "SVG icon for the technology",
      options: {
        accept: "image/svg+xml",
      },
    }),
  ],
});
