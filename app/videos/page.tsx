"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MoveLeft, Download, Loader2 } from "lucide-react";

interface Video {
    _id: string;
    title: string;
    description: string | null;
    videoType: 'youtube' | 'upload';
    youtubeUrl: string | null;
    videoUrl: string | null;
    thumbnailUrl: string | null;
}

// Helper to extract YouTube video ID
function getYouTubeId(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
}

// Helper to get YouTube thumbnail
function getYouTubeThumbnail(url: string): string {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '/assets/academy-bg.jpeg';
}

const VideoCard = ({ video }: { video: Video }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [hasError, setHasError] = useState(false);

    const title = video.title;
    const description = video.description || '';
    const videoType = video.videoType;

    // Get thumbnail and URL based on video type
    let thumbnail: string;
    let url: string;

    if (videoType === 'youtube' && video.youtubeUrl) {
        thumbnail = video.thumbnailUrl || getYouTubeThumbnail(video.youtubeUrl);
        url = video.youtubeUrl;
    } else if (videoType === 'upload' && video.videoUrl) {
        thumbnail = video.thumbnailUrl || '/assets/academy-bg.jpeg';
        url = video.videoUrl;
    } else {
        thumbnail = '/assets/academy-bg.jpeg';
        url = '';
    }

    useEffect(() => {
        setImgSrc(thumbnail);
    }, [thumbnail]);

    // YouTube rendering
    if (videoType === 'youtube') {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
                <div className="relative aspect-video bg-gray-800">
                    {!hasError ? (
                        <img
                            src={imgSrc}
                            alt={title}
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
                        {title}
                    </h3>
                    <p className="text-sm text-gray-400">
                        {description}
                    </p>
                    <div className="flex items-center text-xs text-red-400 font-medium bg-red-500/10 w-fit px-2 py-1 rounded mt-3">
                        YOUTUBE
                    </div>
                </div>
            </a>
        );
    }

    // Uploaded Video Rendering
    if (videoType === 'upload') {
        return (
            <div className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-video bg-gray-800 flex flex-col">
                    <video
                        controls
                        poster={thumbnail}
                        className="w-full h-full object-contain bg-black"
                    >
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-400 transition-colors flex-1 mr-2">
                            {title}
                        </h3>
                        <a
                            href={url}
                            download
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            title="Download Video"
                        >
                            <Download size={20} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                        {description}
                    </p>
                    <div className="flex items-center text-xs text-blue-400 font-medium bg-blue-500/10 w-fit px-2 py-1 rounded">
                        VIDEO
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default function VideosPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch('/api/videos');
                if (!res.ok) throw new Error('Failed to fetch videos');
                const data = await res.json();
                setVideos(data);
            } catch (err) {
                console.error('Error fetching videos:', err);
                setError('Failed to load videos');
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    Watch my latest mixes and performances. Stream YouTube videos or watch exclusive uploaded content.
                </p>

                {error ? (
                    <div className="text-center py-12 text-gray-400">
                        <p>{error}</p>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        <p>No videos available yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <VideoCard key={video._id} video={video} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
