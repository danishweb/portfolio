import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'theme', title: 'Theme Colors' },
    { name: 'assets', title: 'Decorative Assets' },
    { name: 'buttons', title: 'Button Styles' },
  ],
  fields: [
    // General Group
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      type: 'file',
      group: 'general',
      description: 'Upload your resume (PDF). This will be used across the site (hero, footer, etc.)',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    }),

    // Theme Colors Group
    defineField({
      name: 'theme',
      title: 'Theme Colors',
      type: 'object',
      group: 'theme',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color',
          type: 'string',
          description: 'Main brand color (hex code, e.g., #000000)',
          initialValue: '#000000',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'secondaryColor',
          title: 'Secondary Color',
          type: 'string',
          description: 'Secondary brand color',
          initialValue: '#333333',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'accentColor',
          title: 'Accent Color',
          type: 'string',
          description: 'Accent/highlight color',
          initialValue: '#0066ff',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          description: 'Default page background color',
          initialValue: '#f1f1f1',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          description: 'Default text color',
          initialValue: '#000000',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'mutedTextColor',
          title: 'Muted Text Color',
          type: 'string',
          description: 'Secondary/muted text color',
          initialValue: '#666666',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
      ],
    }),

    // Decorative Assets Group
    defineField({
      name: 'decorativeAssets',
      title: 'Decorative Assets',
      type: 'object',
      group: 'assets',
      fields: [
        {
          name: 'underlineImage',
          title: 'Underline Decoration',
          type: 'image',
          description: 'SVG or image used for text underline decoration',
          options: {
            accept: 'image/svg+xml,image/png,image/jpeg,image/gif,image/webp',
          },
        },
        {
          name: 'patternLeftImage',
          title: 'Left Pattern Image',
          type: 'image',
          description: 'Decorative pattern shown on the left side',
          options: {
            accept: 'image/svg+xml,image/png,image/jpeg,image/gif,image/webp',
          },
        },
        {
          name: 'patternRightImage',
          title: 'Right Pattern Image',
          type: 'image',
          description: 'Decorative pattern shown on the right side',
          options: {
            accept: 'image/svg+xml,image/png,image/jpeg,image/gif,image/webp',
          },
        },
        {
          name: 'projectTileBackground',
          title: 'Project Tile Background',
          type: 'image',
          description: 'Background pattern for project tiles',
          options: {
            accept: 'image/svg+xml,image/png,image/jpeg,image/gif,image/webp',
          },
        },
      ],
    }),

    // Button Styles Group
    defineField({
      name: 'buttonTheme',
      title: 'Button Theme',
      type: 'object',
      group: 'buttons',
      fields: [
        {
          name: 'primaryBg',
          title: 'Primary Button Background',
          type: 'string',
          initialValue: '#000000',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'primaryText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: '#ffffff',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'primaryHoverBg',
          title: 'Primary Button Hover Background',
          type: 'string',
          initialValue: '#333333',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'outlineBorder',
          title: 'Outline Button Border',
          type: 'string',
          initialValue: '#000000',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'outlineText',
          title: 'Outline Button Text',
          type: 'string',
          initialValue: '#000000',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'outlineHoverBg',
          title: 'Outline Button Hover Background',
          type: 'string',
          initialValue: 'rgba(0, 0, 0, 0.69)',
        },
        {
          name: 'outlineHoverText',
          title: 'Outline Button Hover Text',
          type: 'string',
          initialValue: '#ffffff',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'whiteBg',
          title: 'White Button Background',
          type: 'string',
          initialValue: '#ffffff',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
        {
          name: 'whiteText',
          title: 'White Button Text',
          type: 'string',
          initialValue: '#111827',
          validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
            name: 'hex color',
            invert: false,
          }),
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global theme and styling configuration',
      }
    },
  },
})
