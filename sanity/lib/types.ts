export interface SanityMix {
  _id: string
  title: string
  description: string | null
  mixType: 'youtube' | 'video' | 'audio'
  youtubeUrl: string | null
  videoUrl: string | null
  audioUrl: string | null
  thumbnailUrl: string | null
  featured: boolean
  publishedAt: string
}
