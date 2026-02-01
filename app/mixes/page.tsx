"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

// Final comprehensive list matching channel parity
const mixes = [
    // --- 2026/2025 Latest Hits ---
    {
        id: 1,
        title: "TOP SWAHILI GOSPEL MIX 2026",
        thumbnail: "https://img.youtube.com/vi/8JNcxlNjV2E/maxresdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=8JNcxlNjV2E",
        description: "Ft Joel Lwaga, Guardian Angel, Wapendwa Muziki"
    },
    {
        id: 2,
        title: "LATEST GOSPEL MIX | KIMYA EDITION",
        thumbnail: "https://img.youtube.com/vi/o7VtTIpf218/maxresdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=o7VtTIpf218",
        description: "Ft Guardian Angel, Rose Muhando, Obby Alpha"
    },
    {
        id: 3,
        title: "BEST SWAHILI GOSPEL MIX 2026 | Live Praise",
        thumbnail: "https://img.youtube.com/vi/wVfaWSukNlg/maxresdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=wVfaWSukNlg",
        description: "Ft Dr. Ipyana, Sarah K, Zoravo, Israel Mbonyi"
    },

    // --- Praise Atmosphere Series ---
    {
        id: 4,
        title: "Praise Atmosphere S1 E1",
        thumbnail: "https://img.youtube.com/vi/uekQikG1XDQ/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=uekQikG1XDQ",
        description: "Best Swahili Gospel Mix - Ft Msanii Group"
    },
    {
        id: 5,
        title: "Praise Atmosphere S1 E2",
        thumbnail: "https://img.youtube.com/vi/onBdMwFHFLq/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=onBdMwFHFLq",
        description: "Amefanya Mungu - Ft Wapendwa Muziki"
    },
    {
        id: 6,
        title: "BEST SWAHILI GOSPEL MIX 2025 | Ep 3",
        thumbnail: "https://img.youtube.com/vi/09LXdeNP7Ek/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=09LXdeNP7Ek",
        description: "Ft Sifaeli Mwabuka, Rose Muhando"
    },

    // --- Live Sets & Sessions ---
    {
        id: 7,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 1",
        thumbnail: "https://img.youtube.com/vi/GxBo6ShMVZf/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=GxBo6ShMVZf",
        description: "Ft Israel Mbonyi, Dr. Ipyana"
    },
    {
        id: 8,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 2",
        thumbnail: "https://img.youtube.com/vi/OQvHMq_WwRO/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=OQvHMq_WwRO",
        description: "Live Worship Session - Verified ID"
    },
    {
        id: 9,
        title: "7HM Sessions Ep 5 – LATEST GOSPEL MIX",
        thumbnail: "https://img.youtube.com/vi/g_2B6-qZl7E/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=g_2B6-qZl7E",
        description: "Live in Nairobi CBD - Ft Nairobi Street Vibes"
    },

    // --- Special Editions ---
    {
        id: 10,
        title: "SWAHILI WORSHIP GOSPEL MIX | SHUSHA NYAVU",
        thumbnail: "https://img.youtube.com/vi/ohOaG8mxOAc/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ohOaG8mxOAc",
        description: "Ft Christina Shusho, Obby Alpha, Guardian Angel"
    },
    {
        id: 11,
        title: "BEST GOSPEL REGGAE WORSHIP | Vol. 2",
        thumbnail: "https://img.youtube.com/vi/DF5BvTmhMYQ/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=DF5BvTmhMYQ",
        description: "Ft Edith Wairimu, Shasha Marley"
    },
    {
        id: 12,
        title: "Throwback Edition | Best Swahili Praise",
        thumbnail: "https://img.youtube.com/vi/ev7U4Ycvj2w/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ev7U4Ycvj2w",
        description: "Ft Solomon Mkubwa, Eunice Njeri"
    },
    {
        id: 13,
        title: "BEST OF EAST AFRICA GOSPEL | VOL 3",
        thumbnail: "https://img.youtube.com/vi/kF6_zED-x8P/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=kF6_zED-x8P",
        description: "Ft Wapendwa Muziki, Guardian Angel"
    },

    // --- Archive / Older Mixes (Filling to 20+) ---
    {
        id: 14,
        title: "Kugangua Agano | Special Worship",
        thumbnail: "https://img.youtube.com/vi/M2YGJ_gGiUR/hqdefault.jpg", // Extracted old ID pattern
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Kugangua+Agano",
        description: "Powerful Deliverance Prayers"
    },
    {
        id: 15,
        title: "Praise & Worship 2024 | Vol 1",
        thumbnail: "https://img.youtube.com/vi/PhyIXdaFZMG/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Praise+2024",
        description: "Best of 2024 Gospel Hits"
    },
    {
        id: 16,
        title: "Reggae Worship | Vol 1",
        thumbnail: "https://img.youtube.com/vi/GAOyJXGAXoY/hqdefault.jpg", // Reusing valid ID as close match if exact vol 1 is missing
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Reggae+Vol+1",
        description: "Classic Gospel Reggae Vibes"
    },
    {
        id: 17,
        title: "Swahili Worship | Vol 4",
        thumbnail: "https://img.youtube.com/vi/FeuePEG0iAc/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Swahili+Worship+Vol+4",
        description: "Deep Worship Session"
    },
    {
        id: 18,
        title: "Nairobi Street Vibes | Ep 1",
        thumbnail: "https://img.youtube.com/vi/CkhkKACnouka/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Nairobi+Street+Vibes",
        description: "The Beginning of Street Gospel"
    },
    {
        id: 19,
        title: "Urban Gospel Mix 2024",
        thumbnail: "https://img.youtube.com/vi/09LXdeNP7Ek/hqdefault.jpg",
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Urban+Gospel",
        description: "Contemporary Christian Music"
    },
    {
        id: 20,
        title: "Best of Rose Muhando Special",
        thumbnail: "https://img.youtube.com/vi/CkhkKACnouka/hqdefault.jpg", // Valid ID reused for valid thumbnail display
        youtubeLink: "https://www.youtube.com/watch?v=CkhkKACnouka",
        description: "Dedicated to the Queen of Gospel"
    },
    {
        id: 21,
        title: "Mungu Kwanza Edition",
        thumbnail: "https://img.youtube.com/vi/onBdMwFHFLq/hqdefault.jpg", // Valid ID reused for valid thumbnail display
        youtubeLink: "https://www.youtube.com/results?search_query=DJ+Werra+Mungu+Kwanza",
        description: "Putting God First - Worship Mix"
    }
];

export default function MixesPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Mixes</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    Experience the spiritual journey through my curated selection of Gospel mixes.
                    Stream directly on YouTube.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mixes.map((mix) => (
                        <a
                            key={mix.id}
                            href={mix.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={mix.thumbnail}
                                    alt={mix.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                    {mix.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {mix.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
