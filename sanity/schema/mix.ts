import { defineType, defineField } from 'sanity'

export const mixSchema = defineType({
  name: 'mix',
  title: 'Mix',
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
      name: 'mixType',
      title: 'Mix Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube Video', value: 'youtube' },
          { title: 'Uploaded Video', value: 'video' },
          { title: 'Uploaded Audio', value: 'audio' },
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
      hidden: ({ document }) => document?.mixType !== 'youtube',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload your video file (MP4, MOV, etc.)',
      options: {
        accept: 'video/*',
      },
      hidden: ({ document }) => document?.mixType !== 'video',
    }),
    defineField({
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      description: 'Upload your audio file (MP3, WAV, etc.)',
      options: {
        accept: 'audio/*',
      },
      hidden: ({ document }) => document?.mixType !== 'audio',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Upload a cover image for this mix (will auto-generate for YouTube)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this mix prominently on the homepage',
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
      subtitle: 'mixType',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      const typeLabels: Record<string, string> = {
        youtube: 'YouTube',
        video: 'Video Upload',
        audio: 'Audio Upload',
      }
      return {
        title,
        subtitle: typeLabels[subtitle] || subtitle,
        media,
      }
    },
  },
})
