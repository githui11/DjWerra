"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MoveLeft, ImageOff } from "lucide-react";

// All videos from @dj_werra254 YouTube channel
// Fetched via: python execution/fetch_youtube_channel.py
// Thumbnails stored locally via: python execution/download_thumbnails.py
const mixes = [
    {
        id: 1,
        title: "TOP SWAHILI GOSPEL MIX 2026 | Surprise Edition",
        thumbnail: "/assets/thumbnails/8JNcxlNjV2E.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=8JNcxlNjV2E",
        description: "Ft Joel Lwaga, Guardian Angel, Wapendwa Muziki"
    },
    {
        id: 2,
        title: "7HM Sessions Ep 5 – LATEST GOSPEL MIX",
        thumbnail: "/assets/thumbnails/1quNbPJ8DQw.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=1quNbPJ8DQw",
        description: "Live in Nairobi CBD - Ft Nairobi Street Vibes"
    },
    {
        id: 3,
        title: "LATEST GOSPEL MIX | KIMYA EDITION",
        thumbnail: "/assets/thumbnails/o7VtTIpf218.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=o7VtTIpf218",
        description: "Ft Guardian Angel, Rose Muhando, Obby Alpha, Moji"
    },
    {
        id: 4,
        title: "BEST SWAHILI GOSPEL MIX 2026 | Live Praise & Worship",
        thumbnail: "/assets/thumbnails/MI8JAmnmbSI.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=MI8JAmnmbSI",
        description: "Ft Dr. Ipyana, Sarah K, Zoravo, Israel Mbonyi"
    },
    {
        id: 5,
        title: "BEST SWAHILI GOSPEL MIX 2025 | Ep 3",
        thumbnail: "/assets/thumbnails/x8UwVXcjE0A.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=x8UwVXcjE0A",
        description: "Ft Sifaeli Mwabuka, Rose Muhando, Bahati Bukuku, Martha Mwaipaja"
    },
    {
        id: 6,
        title: "Praise Atmosphere S1 E2 | AMEFANYA MUNGU",
        thumbnail: "/assets/thumbnails/iUBzKrWxW40.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=iUBzKrWxW40",
        description: "Ft Wapendwa Muziki, Olodumare, Calenda"
    },
    {
        id: 7,
        title: "Praise Atmosphere S1 E1",
        thumbnail: "/assets/thumbnails/uekQikG1XF4.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=uekQikG1XF4",
        description: "Best Swahili Gospel Mix - Ft Msanii Group, Sifaeli Mwabuka"
    },
    {
        id: 8,
        title: "SWAHILI WORSHIP GOSPEL MIX 2025 | SET 3",
        thumbnail: "/assets/thumbnails/W0o9YPrAK7A.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=W0o9YPrAK7A",
        description: "Ft Rose Muhando, Martha Mwaipaja, Sifaeli, Bony Mwaitage"
    },
    {
        id: 9,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 2",
        thumbnail: "/assets/thumbnails/WrDzaY4-yAI.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=WrDzaY4-yAI",
        description: "Live Worship Session - Ft Bella Kombo, Dr. Sarah K"
    },
    {
        id: 10,
        title: "BEST GOSPEL REGGAE WORSHIP | Vol. 2",
        thumbnail: "/assets/thumbnails/DF5BvTmhMYQ.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=DF5BvTmhMYQ",
        description: "Ft Edith Wairimu, Shasha Marley, Terry Linen"
    },
    {
        id: 11,
        title: "BEST OF EAST AFRICA GOSPEL MIX 2025 | Vol. 3",
        thumbnail: "/assets/thumbnails/8yyyFfP5wDs.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=8yyyFfP5wDs",
        description: "Ft Wapendwa Muziki, Guardian Angel, Deus Derick"
    },
    {
        id: 12,
        title: "BEST OF LIVE SWAHILI PRAISE | SET 1",
        thumbnail: "/assets/thumbnails/wVfaWSukNlg.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=wVfaWSukNlg",
        description: "Ft Israel Mbonyi, Dr. Ipyana"
    },
    {
        id: 13,
        title: "Throwback Edition | Best Swahili Praise & Worship",
        thumbnail: "/assets/thumbnails/ev7U4Ycvj2w.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ev7U4Ycvj2w",
        description: "Ft Solomon Mkubwa, Eunice Njeri, Chibalonza"
    },
    {
        id: 14,
        title: "BEST OF WAPENDWA MUZIKI MIX 2025",
        thumbnail: "/assets/thumbnails/YZFqDp-6UvY.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=YZFqDp-6UvY",
        description: "Ft Anasafisha, Moyo wa Kukuabudu, Yesu Njoo, Parapanda"
    },
    {
        id: 15,
        title: "SWAHILI WORSHIP GOSPEL MIX | SHUSHA NYAVU",
        thumbnail: "/assets/thumbnails/ohOaG8mxOGU.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ohOaG8mxOGU",
        description: "Ft Christina Shusho, Obby Alpha, Guardian Angel"
    },
    {
        id: 16,
        title: "GOSPEL ANTHEM MIX 2024 | BLEND 4",
        thumbnail: "/assets/thumbnails/qNAOrNogk2o.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=qNAOrNogk2o",
        description: "Ft Guardian Angel, Bahati, Size 8, Timeless, Jabidii, Willy Paul"
    },
    {
        id: 17,
        title: "BEST OF DEUS DERRICK MIX 2024 | BLEND 3",
        thumbnail: "/assets/thumbnails/L4MqHAW7GFA.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=L4MqHAW7GFA",
        description: "Ft Deus Derrick, Guardian Angel - Neema, Nimependa, Hajamaliza"
    }
];

const MixCard = ({ mix }: { mix: typeof mixes[0] }) => {
    const [imgSrc, setImgSrc] = useState(mix.thumbnail);
    const [hasError, setHasError] = useState(false);

    return (
        <a
            href={mix.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative aspect-video bg-gray-800">
                {!hasError ? (
                    <img
                        src={imgSrc}
                        alt={mix.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => {
                            // Try mqdefault if hqdefault fails for youtube links
                            if (imgSrc.includes('hqdefault.jpg')) {
                                setImgSrc(imgSrc.replace('hqdefault.jpg', 'mqdefault.jpg'));
                            } else if (imgSrc.includes('mqdefault.jpg')) {
                                setHasError(true);
                            } else {
                                setHasError(true);
                            }
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                        <img
                            src="/assets/academy-bg.jpeg"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                            alt="Fallback"
                        />
                        <div className="z-10 bg-black/50 p-3 rounded-full">
                            <span className="text-xs font-bold text-white">DJ WERRA</span>
                        </div>
                    </div>
                )}

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
    );
};

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
                        <MixCard key={mix.id} mix={mix} />
                    ))}
                </div>
            </div>
        </div>
    );
}
