import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

// Sanity query for audio
const audioQuery = `
  *[_type == "audio"] | order(publishedAt desc) {
    _id,
    title,
    description,
    "audioUrl": audioFile.asset->url,
    "coverArtUrl": coverArt.asset->url,
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

        const audio = await client.fetch(audioQuery)

        return NextResponse.json(audio || [])
    } catch (error) {
        console.error('Error fetching audio from Sanity:', error)
        return NextResponse.json([])
    }
}
