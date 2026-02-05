export type MixType = 'youtube' | 'video' | 'audio';

export interface Mix {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    type: MixType;
    url: string; // YouTube URL or path to local file
}

export const mixes: Mix[] = [
    // --- Placeholders for functionality testing ---
    /*
    {
        id: 9991,
        title: "Local Video Test",
        description: "Test video loaded from public/uploads. Replace url with actual file.",
        thumbnail: "/assets/academy-bg.jpeg",
        type: "video",
        url: "/uploads/test-video.mp4"
    },
    {
        id: 9992,
        title: "Local Audio Test",
        description: "Test audio loaded from public/uploads. Replace url with actual file.",
        thumbnail: "/assets/academy-bg.jpeg",
        type: "audio",
        url: "/uploads/test-audio.mp3"
    },
    */
    // --- Existing Content ---
    {
        id: 1,
        title: "TOP SWAHILI GOSPEL MIX 2026 | Surprise Edition",
        thumbnail: "/assets/thumbnails/8JNcxlNjV2E.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=8JNcxlNjV2E",
        description: "Ft Joel Lwaga, Guardian Angel, Wapendwa Muziki"
    },
    {
        id: 2,
        title: "7HM Sessions Ep 5 – LATEST GOSPEL MIX",
        thumbnail: "/assets/thumbnails/1quNbPJ8DQw.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=1quNbPJ8DQw",
        description: "Live in Nairobi CBD - Ft Nairobi Street Vibes"
    },
    {
        id: 3,
        title: "LATEST GOSPEL MIX | KIMYA EDITION",
        thumbnail: "/assets/thumbnails/o7VtTIpf218.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=o7VtTIpf218",
        description: "Ft Guardian Angel, Rose Muhando, Obby Alpha, Moji"
    },
    {
        id: 4,
        title: "BEST SWAHILI GOSPEL MIX 2026 | Live Praise & Worship",
        thumbnail: "/assets/thumbnails/MI8JAmnmbSI.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=MI8JAmnmbSI",
        description: "Ft Dr. Ipyana, Sarah K, Zoravo, Israel Mbonyi"
    },
    {
        id: 5,
        title: "BEST SWAHILI GOSPEL MIX 2025 | Ep 3",
        thumbnail: "/assets/thumbnails/x8UwVXcjE0A.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=x8UwVXcjE0A",
        description: "Ft Sifaeli Mwabuka, Rose Muhando, Bahati Bukuku, Martha Mwaipaja"
    },
    {
        id: 6,
        title: "Praise Atmosphere S1 E2 | AMEFANYA MUNGU",
        thumbnail: "/assets/thumbnails/iUBzKrWxW40.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=iUBzKrWxW40",
        description: "Ft Wapendwa Muziki, Olodumare, Calenda"
    },
    {
        id: 7,
        title: "Praise Atmosphere S1 E1",
        thumbnail: "/assets/thumbnails/uekQikG1XF4.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=uekQikG1XF4",
        description: "Best Swahili Gospel Mix - Ft Msanii Group, Sifaeli Mwabuka"
    },
    {
        id: 8,
        title: "SWAHILI WORSHIP GOSPEL MIX 2025 | SET 3",
        thumbnail: "/assets/thumbnails/W0o9YPrAK7A.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=W0o9YPrAK7A",
        description: "Ft Rose Muhando, Martha Mwaipaja, Sifaeli, Bony Mwaitage"
    },
    {
        id: 9,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 2",
        thumbnail: "/assets/thumbnails/WrDzaY4-yAI.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=WrDzaY4-yAI",
        description: "Live Worship Session - Ft Bella Kombo, Dr. Sarah K"
    },
    {
        id: 10,
        title: "BEST GOSPEL REGGAE WORSHIP | Vol. 2",
        thumbnail: "/assets/thumbnails/DF5BvTmhMYQ.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=DF5BvTmhMYQ",
        description: "Ft Edith Wairimu, Shasha Marley, Terry Linen"
    },
    {
        id: 11,
        title: "BEST OF EAST AFRICA GOSPEL MIX 2025 | Vol. 3",
        thumbnail: "/assets/thumbnails/8yyyFfP5wDs.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=8yyyFfP5wDs",
        description: "Ft Wapendwa Muziki, Guardian Angel, Deus Derick"
    },
    {
        id: 12,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 1",
        thumbnail: "/assets/thumbnails/wVfaWSukNlg.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=wVfaWSukNlg",
        description: "Ft Israel Mbonyi, Dr. Ipyana"
    },
    {
        id: 13,
        title: "Throwback Edition | Best Swahili Praise & Worship",
        thumbnail: "/assets/thumbnails/ev7U4Ycvj2w.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ev7U4Ycvj2w",
        description: "Ft Solomon Mkubwa, Eunice Njeri, Chibalonza"
    },
    {
        id: 14,
        title: "BEST OF WAPENDWA MUZIKI MIX 2025",
        thumbnail: "/assets/thumbnails/YZFqDp-6UvY.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=YZFqDp-6UvY",
        description: "Ft Anasafisha, Moyo wa Kukuabudu, Yesu Njoo, Parapanda"
    },
    {
        id: 15,
        title: "SWAHILI WORSHIP GOSPEL MIX | SHUSHA NYAVU",
        thumbnail: "/assets/thumbnails/ohOaG8mxOGU.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ohOaG8mxOGU",
        description: "Ft Christina Shusho, Obby Alpha, Guardian Angel"
    },
    {
        id: 16,
        title: "GOSPEL ANTHEM MIX 2024 | BLEND 4",
        thumbnail: "/assets/thumbnails/qNAOrNogk2o.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=qNAOrNogk2o",
        description: "Ft Guardian Angel, Bahati, Size 8, Timeless, Jabidii, Willy Paul"
    },
    {
        id: 17,
        title: "BEST OF DEUS DERRICK MIX 2024 | BLEND 3",
        thumbnail: "/assets/thumbnails/L4MqHAW7GFA.jpg",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=L4MqHAW7GFA",
        description: "Ft Deus Derrick, Guardian Angel - Neema, Nimependa, Hajamaliza"
    }
];
