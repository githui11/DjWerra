"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
    {
        quote: "DJ Werra brought an incredible energy to our church anniversary. The music selection was perfect and kept everyone engaged throughout the celebration.",
        author: "Pastor James M.",
        role: "Senior Pastor, Grace Chapel",
    },
    {
        quote: "Professional, punctual, and knows exactly how to read the room. Our wedding reception was unforgettable thanks to DJ Werra's amazing set.",
        author: "Sarah & David K.",
        role: "Wedding Clients",
    },
    {
        quote: "The best Gospel DJ in Nairobi. He transformed our corporate event into a spiritual celebration that everyone is still talking about.",
        author: "Michael O.",
        role: "Event Coordinator, Faith Events",
    },
];

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
            <section className="py-20 bg-gray-900 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Booking is simple. Here's how we make your event happen.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bookingSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector line */}
                                {index < bookingSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
                                )}
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 mb-4">
                                        <span className="text-2xl font-bold text-blue-500">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-black w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                            What Clients Say
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Don't just take my word for it - hear from event organizers and clients who've experienced the vibe.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/5 relative"
                            >
                                {/* Quote mark */}
                                <div className="absolute top-4 right-6 text-6xl text-blue-500/20 font-serif">
                                    "
                                </div>
                                <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="border-t border-white/10 pt-4">
                                    <div className="font-semibold text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-blue-400">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-t from-black to-gray-900 w-full">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                            Ready to Elevate Your Event?
                        </h2>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                            Let's create an unforgettable experience together. Book now and secure your date.
                        </p>

                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                <Link
                                    href="/bookings"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 text-lg min-w-[200px]"
                                >
                                    Book Now
                                </Link>
                                <a
                                    href="tel:0757127598"
                                    className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all transform hover:scale-105 text-lg min-w-[200px] flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    0757 127598
                                </a>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400 text-sm mt-4">
                                <span>Or DM me on:</span>
                                <a
                                    href="https://instagram.com/dj.werra254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-400 font-medium transition-colors"
                                >
                                    Instagram
                                </a>
                                <span className="text-gray-600">•</span>
                                <a
                                    href="https://tiktok.com/@dj_werra254"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-400 font-medium transition-colors"
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
