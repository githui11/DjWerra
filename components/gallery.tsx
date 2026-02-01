"use client";
import React from "react";
import { motion } from "framer-motion";

const assets = [
    { type: "video", src: "/assets/socials.mp4", title: "Socials", position: "object-top", poster: "/assets/4.jpeg" },
    { type: "video", src: "/assets/chill-blue.mp4", title: "Chill Blue", position: "object-center", poster: "/assets/2.jpeg" },
    { type: "video", src: "/assets/chill-white.mp4", title: "Chill White", position: "object-center", poster: "/assets/3.jpeg" },
    { type: "video", src: "/assets/xtreme.mp4", title: "Xtreme", position: "object-top", poster: "/assets/1.jpeg" },
    { type: "video", src: "/assets/youtube-channel-art.mp4", title: "Channel Art", position: "object-top", poster: "/assets/academy-bg.jpeg" },
];

export const Gallery = () => {
    return (
        <section className="py-20 bg-black w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-light text-white mb-12 text-center"
                >
                    Visual Experience
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/10 group"
                        >
                            {asset.type === "video" ? (
                                <video
                                    className={`w-full h-full object-cover ${asset.position} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    poster={asset.poster}
                                    onMouseOver={(e) => {
                                        const video = e.currentTarget;
                                        if (!video.src) video.src = asset.src;
                                        video.play();
                                    }}
                                    onMouseOut={(e) => e.currentTarget.pause()}
                                    data-src={asset.src}
                                />
                            ) : (
                                <img
                                    src={asset.src}
                                    alt={asset.title}
                                    className={`w-full h-full object-cover ${asset.position} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                                />
                            )}
                            {/* Removed text overlay as requested ("Event 1", etc.) */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
