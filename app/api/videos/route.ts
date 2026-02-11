import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

// Sanity query for videos
const videosQuery = `
  *[_type == "video"] | order(publishedAt desc) {
    _id,
    title,
    description,
    videoType,
    youtubeUrl,
    "videoUrl": videoFile.asset->url,
    "thumbnailUrl": thumbnail.asset->url,
    featured,
    publishedAt
  }
`

export async function GET() {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

    // If Sanity is not configured, return empty array
    if (!projectId) {
        console.log('Sanity not configured')
        return NextResponse.json([])
    }

    try {
        const client = createClient({
            projectId,
            dataset,
            apiVersion: '2024-01-01',
            useCdn: true,
        })

        const videos = await client.fetch(videosQuery)

        return NextResponse.json(videos || [])
    } catch (error) {
        console.error('Error fetching videos from Sanity:', error)
        return NextResponse.json([])
    }
}
