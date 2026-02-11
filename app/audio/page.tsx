"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MoveLeft, Download, Loader2 } from "lucide-react";

interface Audio {
    _id: string;
    title: string;
    description: string | null;
    audioUrl: string | null;
    coverArtUrl: string | null;
}

const AudioCard = ({ audio }: { audio: Audio }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [hasError, setHasError] = useState(false);

    const title = audio.title;
    const description = audio.description || '';
    const coverArt = audio.coverArtUrl || '/assets/academy-bg.jpeg';
    const url = audio.audioUrl || '';

    useEffect(() => {
        setImgSrc(coverArt);
    }, [coverArt]);

    return (
        <div className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative aspect-video bg-gray-800">
                {!hasError ? (
                    <img
                        src={imgSrc}
                        alt={title}
                        className="w-full h-full object-cover opacity-60"
                        onError={() => setHasError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-gray-800">
                        <span className="text-xs font-bold text-white z-10">DJ WERRA AUDIO</span>
                    </div>
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <audio
                        controls
                        className="w-full h-10 mt-auto opacity-90 hover:opacity-100 transition-opacity"
                        preload="metadata"
                    >
                        <source src={url} type="audio/mpeg" />
                        <source src={url} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg line-clamp-2 group-hover:text-green-400 transition-colors flex-1 mr-2">
                        {title}
                    </h3>
                    <a
                        href={url}
                        download
                        className="text-gray-400 hover:text-white transition-colors p-1"
                        title="Download Audio"
                    >
                        <Download size={20} />
                    </a>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                    {description}
                </p>
                <div className="flex items-center text-xs text-green-400 font-medium bg-green-500/10 w-fit px-2 py-1 rounded">
                    AUDIO
                </div>
            </div>
        </div>
    );
};

export default function AudioPage() {
    const [audioTracks, setAudioTracks] = useState<Audio[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAudio() {
            try {
                const res = await fetch('/api/audio');
                if (!res.ok) throw new Error('Failed to fetch audio');
                const data = await res.json();
                setAudioTracks(data);
            } catch (err) {
                console.error('Error fetching audio:', err);
                setError('Failed to load audio tracks');
            } finally {
                setLoading(false);
            }
        }
        fetchAudio();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-green-500" />
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

                <h1 className="text-4xl md:text-5xl font-bold mb-4">Audio Mixes</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    Listen to my audio mixes and tracks. Stream directly or download for offline listening.
                </p>

                {error ? (
                    <div className="text-center py-12 text-gray-400">
                        <p>{error}</p>
                    </div>
                ) : audioTracks.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        <p>No audio tracks available yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {audioTracks.map((audio) => (
                            <AudioCard key={audio._id} audio={audio} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
