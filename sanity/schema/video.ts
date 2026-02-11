import { defineType, defineField } from 'sanity'

export const videoSchema = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube Video', value: 'youtube' },
          { title: 'Uploaded Video', value: 'upload' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Paste the full YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
      hidden: ({ document }) => document?.videoType !== 'youtube',
      validation: (Rule) =>
        Rule.custom((url, context) => {
          const videoType = (context.document as any)?.videoType
          if (videoType === 'youtube' && !url) {
            return 'YouTube URL is required for YouTube videos'
          }
          return true
        }),
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload your video file (MP4, MOV, etc.)',
      options: {
        accept: 'video/*',
      },
      hidden: ({ document }) => document?.videoType !== 'upload',
      validation: (Rule) =>
        Rule.custom((file, context) => {
          const videoType = (context.document as any)?.videoType
          if (videoType === 'upload' && !file) {
            return 'Video file is required for uploaded videos'
          }
          return true
        }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Upload a cover image for this video (auto-generates for YouTube if not provided)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this video prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'videoType',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      const typeLabels: Record<string, string> = {
        youtube: 'YouTube',
        upload: 'Video Upload',
      }
      return {
        title,
        subtitle: typeLabels[subtitle] || subtitle,
        media,
      }
    },
  },
})
