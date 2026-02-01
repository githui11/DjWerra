"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        title: "Church Events",
        description: "Worship nights, anniversaries, conferences, and youth events",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Weddings",
        description: "Ceremonies, receptions, and after-parties with the perfect soundtrack",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: "Corporate Events",
        description: "Team building, launches, and company celebrations",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Private Parties",
        description: "Birthdays, graduations, and family celebrations",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
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
            {/* Services Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                            Events I Serve
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From intimate gatherings to large celebrations, I bring the perfect blend of Gospel music to elevate your event.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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

            {/* CTA Section */}
            <section className="py-20 bg-black w-full">
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/bookings"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 text-lg"
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full font-medium transition-all text-lg"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};
