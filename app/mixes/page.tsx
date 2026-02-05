"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MoveLeft, ImageOff, Download, Play } from "lucide-react";
import { mixes, Mix } from "../data/mixes";

const MixCard = ({ mix }: { mix: Mix }) => {
    const [imgSrc, setImgSrc] = useState(mix.thumbnail);
    const [hasError, setHasError] = useState(false);

    // YouTube rendering (Classic behavior)
    if (mix.type === 'youtube') {
        return (
            <a
                href={mix.url}
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
    }

    // Local Video Rendering
    if (mix.type === 'video') {
        return (
            <div className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-video bg-gray-800 flex flex-col">
                    <video
                        controls
                        poster={mix.thumbnail}
                        className="w-full h-full object-contain bg-black"
                    >
                        <source src={mix.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors flex-1 mr-2">
                            {mix.title}
                        </h3>
                        <a
                            href={mix.url}
                            download
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            title="Download Video"
                        >
                            <Download size={20} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                        {mix.description}
                    </p>
                    <div className="flex items-center text-xs text-blue-400 font-medium bg-blue-500/10 w-fit px-2 py-1 rounded">
                        VIDEO
                    </div>
                </div>
            </div>
        );
    }

    // Local Audio Rendering
    if (mix.type === 'audio') {
        return (
            <div className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-video bg-gray-800">
                    {/* Use thumbnail as cover art */}
                    {!hasError ? (
                        <img
                            src={imgSrc}
                            alt={mix.title}
                            className="w-full h-full object-cover opacity-60"
                            onError={() => setHasError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-gray-800">
                            <span className="text-xs font-bold text-white z-10">DJ WERRA AUDIO</span>
                        </div>
                    )}

                    {/* Audio Player Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <audio controls className="w-full h-10 mt-auto opacity-90 hover:opacity-100 transition-opacity">
                            <source src={mix.url} type="audio/mpeg" />
                            <source src={mix.url} type="audio/wav" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors flex-1 mr-2">
                            {mix.title}
                        </h3>
                        <a
                            href={mix.url}
                            download
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            title="Download Audio"
                        >
                            <Download size={20} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                        {mix.description}
                    </p>
                    <div className="flex items-center text-xs text-green-400 font-medium bg-green-500/10 w-fit px-2 py-1 rounded">
                        AUDIO
                    </div>
                </div>
            </div>
        );
    }

    return null;
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
                    Stream directly on YouTube or listen to exclusive audio/video uploads.
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
