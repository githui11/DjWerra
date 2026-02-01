"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

// Placeholder data - User needs to update with real YouTube IDs
const mixes = [
    {
        id: 1,
        title: "TOP SWAHILI GOSPEL MIX 2026",
        thumbnail: "/assets/thumbnails/8JNcxlNjV2E.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=8JNcxlNjV2E",
        description: "Ft Joel Lwaga, Guardian Angel, Wapendwa Muziki"
    },
    {
        id: 2,
        title: "LATEST GOSPEL MIX | KIMYA EDITION",
        thumbnail: "/assets/thumbnails/o7VtTIpf218.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=o7VtTIpf218",
        description: "Ft Guardian Angel, Rose Muhando, Obby Alpha"
    },
    {
        id: 3,
        title: "BEST SWAHILI GOSPEL MIX 2026 | Live Praise",
        thumbnail: "/assets/thumbnails/wVfaWSukNlg.jpg", // Live 2025/2026 match
        youtubeLink: "https://www.youtube.com/watch?v=wVfaWSukNlg",
        description: "Ft Dr. Ipyana, Sarah K, Zoravo, Israel Mbonyi"
    },
    {
        id: 4,
        title: "Praise Atmosphere S1 E1",
        thumbnail: "/assets/4.jpeg", // Fallback since ID download failed
        youtubeLink: "https://www.youtube.com/search?q=Praise+Atmosphere+S1+E1+DJ+WERRA",
        description: "Best Swahili Gospel Mix - Ft Msanii Group"
    },
    {
        id: 5,
        title: "BEST GOSPEL REGGAE WORSHIP | Vol. 2",
        thumbnail: "/assets/thumbnails/DF5BvTmhMYQ.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=DF5BvTmhMYQ",
        description: "Ft Edith Wairimu, Shasha Marley"
    },
    {
        id: 6,
        title: "Throwback Edition | Best Swahili Praise",
        thumbnail: "/assets/thumbnails/ev7U4Ycvj2w.jpg",
        youtubeLink: "https://www.youtube.com/watch?v=ev7U4Ycvj2w",
        description: "Ft Solomon Mkubwa, Eunice Njeri"
    },
    {
        id: 7,
        title: "7HM Sessions Ep 5 – LATEST GOSPEL MIX",
        thumbnail: "/assets/2.jpeg", // Fallback to high quality asset
        youtubeLink: "https://www.youtube.com/results?search_query=7HM+Sessions+Ep+5+DJ+WERRA",
        description: "Live in Nairobi CBD - Ft Nairobi Street Vibes"
    },
    {
        id: 8,
        title: "Praise Atmosphere S1 E2",
        thumbnail: "/assets/3.jpeg", // Fallback to high quality asset
        youtubeLink: "https://www.youtube.com/results?search_query=Praise+Atmosphere+S1+E2+DJ+WERRA",
        description: "Amefanya Mungu - Ft Wapendwa Muziki"
    },
    {
        id: 9,
        title: "BEST SWAHILI GOSPEL MIX 2025 | Ep 3",
        thumbnail: "/assets/1.jpeg", // Fallback to high quality asset
        youtubeLink: "https://www.youtube.com/results?search_query=BEST+SWAHILI+GOSPEL+MIX+2025+Ep+3+DJ+WERRA",
        description: "Ft Sifaeli Mwabuka, Rose Muhando"
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
                                {/* Using simple img tag if Image component issues arise with external domains, but trying generic placeholder assets */}
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
