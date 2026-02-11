import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // We'll need a write token
})

const youtubeVideos = [
  {
    title: "TOP SWAHILI GOSPEL MIX 2026 | Surprise Edition",
    url: "https://www.youtube.com/watch?v=8JNcxlNjV2E",
    description: "Ft Joel Lwaga, Guardian Angel, Wapendwa Muziki"
  },
  {
    title: "7HM Sessions Ep 5 – LATEST GOSPEL MIX",
    url: "https://www.youtube.com/watch?v=1quNbPJ8DQw",
    description: "Live in Nairobi CBD - Ft Nairobi Street Vibes"
  },
  {
    title: "LATEST GOSPEL MIX | KIMYA EDITION",
    url: "https://www.youtube.com/watch?v=o7VtTIpf218",
    description: "Ft Guardian Angel, Rose Muhando, Obby Alpha, Moji"
  },
  {
    title: "BEST SWAHILI GOSPEL MIX 2026 | Live Praise & Worship",
    url: "https://www.youtube.com/watch?v=MI8JAmnmbSI",
    description: "Ft Dr. Ipyana, Sarah K, Zoravo, Israel Mbonyi"
  },
  {
    title: "BEST SWAHILI GOSPEL MIX 2025 | Ep 3",
    url: "https://www.youtube.com/watch?v=x8UwVXcjE0A",
    description: "Ft Sifaeli Mwabuka, Rose Muhando, Bahati Bukuku, Martha Mwaipaja"
  },
  {
    title: "Praise Atmosphere S1 E2 | AMEFANYA MUNGU",
    url: "https://www.youtube.com/watch?v=iUBzKrWxW40",
    description: "Ft Wapendwa Muziki, Olodumare, Calenda"
  },
  {
    title: "Praise Atmosphere S1 E1",
    url: "https://www.youtube.com/watch?v=uekQikG1XF4",
    description: "Best Swahili Gospel Mix - Ft Msanii Group, Sifaeli Mwabuka"
  },
  {
    title: "SWAHILI WORSHIP GOSPEL MIX 2025 | SET 3",
    url: "https://www.youtube.com/watch?v=W0o9YPrAK7A",
    description: "Ft Rose Muhando, Martha Mwaipaja, Sifaeli, Bony Mwaitage"
  },
  {
    title: "BEST OF LIVE SWAHILI PRAISE | SET 2",
    url: "https://www.youtube.com/watch?v=WrDzaY4-yAI",
    description: "Live Worship Session - Ft Bella Kombo, Dr. Sarah K"
  },
  {
    title: "BEST GOSPEL REGGAE WORSHIP | Vol. 2",
    url: "https://www.youtube.com/watch?v=DF5BvTmhMYQ",
    description: "Ft Edith Wairimu, Shasha Marley, Terry Linen"
  },
  {
    title: "BEST OF EAST AFRICA GOSPEL MIX 2025 | Vol. 3",
    url: "https://www.youtube.com/watch?v=8yyyFfP5wDs",
    description: "Ft Wapendwa Muziki, Guardian Angel, Deus Derick"
  },
  {
    title: "BEST OF LIVE SWAHILI PRAISE | SET 1",
    url: "https://www.youtube.com/watch?v=wVfaWSukNlg",
    description: "Ft Israel Mbonyi, Dr. Ipyana"
  },
  {
    title: "Throwback Edition | Best Swahili Praise & Worship",
    url: "https://www.youtube.com/watch?v=ev7U4Ycvj2w",
    description: "Ft Solomon Mkubwa, Eunice Njeri, Chibalonza"
  },
  {
    title: "BEST OF WAPENDWA MUZIKI MIX 2025",
    url: "https://www.youtube.com/watch?v=YZFqDp-6UvY",
    description: "Ft Anasafisha, Moyo wa Kukuabudu, Yesu Njoo, Parapanda"
  },
  {
    title: "SWAHILI WORSHIP GOSPEL MIX | SHUSHA NYAVU",
    url: "https://www.youtube.com/watch?v=ohOaG8mxOGU",
    description: "Ft Christina Shusho, Obby Alpha, Guardian Angel"
  },
  {
    title: "GOSPEL ANTHEM MIX 2024 | BLEND 4",
    url: "https://www.youtube.com/watch?v=qNAOrNogk2o",
    description: "Ft Guardian Angel, Bahati, Size 8, Timeless, Jabidii, Willy Paul"
  },
  {
    title: "BEST OF DEUS DERRICK MIX 2024 | BLEND 3",
    url: "https://www.youtube.com/watch?v=L4MqHAW7GFA",
    description: "Ft Deus Derrick, Guardian Angel - Neema, Nimependa, Hajamaliza"
  }
]

async function importVideos() {
  console.log('Starting import of YouTube videos to Sanity...\n')

  let successCount = 0
  let errorCount = 0

  for (const [index, video] of youtubeVideos.entries()) {
    try {
      const doc = {
        _type: 'video',
        title: video.title,
        description: video.description,
        videoType: 'youtube',
        youtubeUrl: video.url,
        featured: false,
        publishedAt: new Date(Date.now() - (youtubeVideos.length - index) * 24 * 60 * 60 * 1000).toISOString(), // Stagger dates
      }

      const result = await client.create(doc)
      console.log(`✓ Imported: ${video.title}`)
      successCount++
    } catch (error) {
      console.error(`✗ Failed to import: ${video.title}`, error)
      errorCount++
    }
  }

  console.log(`\n✅ Import complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
}

importVideos()
