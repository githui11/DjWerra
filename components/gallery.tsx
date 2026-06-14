"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const bookingSteps = [
    {
        step: "01",
        title: "Get in Touch",
        description: "Send me your event details - date, venue, and what you're looking for",
    },
    {
        step: "02",
        title: "Let's Talk",
        description: "We'll discuss your vision, music preferences, and event flow",
    },
    {
        step: "03",
        title: "Confirm & Book",
        description: "Secure your date with a deposit and let the countdown begin",
    },
    {
        step: "04",
        title: "Event Day",
        description: "I arrive early, set up, and deliver an unforgettable experience",
    },
];

export const Gallery = () => {
    return (
        <>
            {/* How It Works Section */}
            <section className="w-full bg-black pt-8 pb-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header row */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14"
                    >
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">Booking</span>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                How it works
                            </h2>
                        </div>
                        <Link
                            href="/contact"
                            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            Book now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Desktop: horizontal 4-column grid */}
                    <div className="hidden md:grid md:grid-cols-4 relative">

                        {/* Connector line */}
                        <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {bookingSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
                                className="pr-8 relative"
                            >
                                {/* Dot on connector line */}
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/15 mb-8 relative z-10" />

                                {/* Oversized muted step number — fills the column visually */}
                                <div className="relative mb-4">
                                    <span className="absolute -top-2 -left-1 text-8xl font-bold text-white/[0.04] select-none leading-none">
                                        {item.step}
                                    </span>
                                    <h3 className="relative text-base font-semibold text-white">{item.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile: vertical timeline */}
                    <div className="md:hidden space-y-0">
                        {bookingSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="flex gap-6 pb-8 border-l border-white/8 pl-6 relative"
                            >
                                <div className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-blue-500/70 ring-4 ring-blue-500/10" />
                                <div className="flex-1">
                                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
                                    <h3 className="mt-1 text-base font-semibold text-white">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="relative w-full overflow-hidden bg-black pt-8 pb-12">
                {/* soft radial glow */}
                <div className="pointer-events-none absolute left-1/2 top-4 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

                <div className="relative mx-auto max-w-3xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                            Bookings Open
                        </span>
                        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                            Let&apos;s make your event unforgettable
                        </h2>
                        <p className="mx-auto mb-9 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
                            Weddings, conferences, church gatherings. Secure the date and I&apos;ll handle the atmosphere.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
                                >
                                    Book Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <a
                                    href="tel:0757127598"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    0757 127598
                                </a>
                            </div>

                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span>Or DM</span>
                                <a
                                    href="https://instagram.com/dj.werra254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-300 transition-colors hover:text-blue-400"
                                >
                                    Instagram
                                </a>
                                <span className="text-gray-700">•</span>
                                <a
                                    href="https://tiktok.com/@dj_werra254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-300 transition-colors hover:text-blue-400"
                                >
                                    TikTok
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
