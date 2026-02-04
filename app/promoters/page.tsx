"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft, Phone, MessageCircle, Calendar, Music, Users } from "lucide-react";

export default function PromotersPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">For Promoters</h1>
                <p className="text-gray-400 mb-12 max-w-2xl text-lg">
                    Partner with DJ Werra for your next event. Professional performance, reliable service, and unforgettable sets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10 text-center">
                        <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                        <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                        <p className="text-gray-400 text-sm">Available for weekday and weekend events</p>
                    </div>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10 text-center">
                        <Music className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                        <h3 className="font-semibold mb-2">Versatile Sets</h3>
                        <p className="text-gray-400 text-sm">Afrobeats, Amapiano, Hip-Hop, and more</p>
                    </div>
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-white/10 text-center">
                        <Users className="h-8 w-8 mx-auto mb-4 text-blue-500" />
                        <h3 className="font-semibold mb-2">Crowd Control</h3>
                        <p className="text-gray-400 text-sm">Experienced with events of all sizes</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-2xl border border-blue-500/20">
                    <h2 className="text-3xl font-bold mb-2 text-center">Book Now</h2>
                    <p className="text-gray-400 text-center mb-8">Get in touch to discuss your event</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a
                            href="tel:0757127598"
                            className="flex flex-col items-center p-6 bg-black/50 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
                        >
                            <div className="p-4 bg-green-600/20 rounded-full text-green-500 mb-4">
                                <Phone className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-1">Call</h3>
                            <p className="text-xl font-bold text-white">0757 127598</p>
                        </a>

                        <a
                            href="https://instagram.com/dj.werra254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-black/50 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all hover:scale-105"
                        >
                            <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full text-pink-500 mb-4">
                                <MessageCircle className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-1">Instagram DM</h3>
                            <p className="text-gray-400">@dj.werra254</p>
                        </a>

                        <a
                            href="https://tiktok.com/@dj_werra254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-black/50 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:scale-105"
                        >
                            <div className="p-4 bg-cyan-600/20 rounded-full text-cyan-500 mb-4">
                                <MessageCircle className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-1">TikTok DM</h3>
                            <p className="text-gray-400">@dj_werra254</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
