import { groq } from 'next-sanity'

// Fetch all mixes, sorted by date
export const mixesQuery = groq`
  *[_type == "mix"] | order(publishedAt desc) {
    _id,
    title,
    description,
    mixType,
    youtubeUrl,
    "videoUrl": videoFile.asset->url,
    "audioUrl": audioFile.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    featured,
    publishedAt
  }
`

// Fetch featured mixes only
export const featuredMixesQuery = groq`
  *[_type == "mix" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    description,
    mixType,
    youtubeUrl,
    "videoUrl": videoFile.asset->url,
    "audioUrl": audioFile.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    publishedAt
  }
`

// Fetch a single mix by ID
export const mixByIdQuery = groq`
  *[_type == "mix" && _id == $id][0] {
    _id,
    title,
    description,
    mixType,
    youtubeUrl,
    "videoUrl": videoFile.asset->url,
    "audioUrl": audioFile.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    featured,
    publishedAt
  }
`
