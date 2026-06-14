"use client";
import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-8">
            <PageHeader />
            <div className="max-w-4xl mx-auto px-6 pt-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Contact</h1>
                <p className="text-gray-500 mb-10 max-w-2xl">
                    Ready to book or have questions? Reach out directly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Get in Touch */}
                    <div className="relative rounded-2xl border border-white/8 bg-white/3 p-7 overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400 mb-7">Get in Touch</h2>

                        <div className="space-y-7">
                            {/* Phone */}
                            <div>
                                <p className="text-xs text-gray-500 mb-1.5 uppercase tracking-widest">Phone</p>
                                <a
                                    href="tel:0757127598"
                                    className="text-2xl font-semibold text-white tracking-tight hover:text-blue-400 transition-colors"
                                >
                                    0757 127598
                                </a>
                                <p className="text-xs text-gray-500 mt-1">Call or WhatsApp to book</p>
                            </div>

                            <div className="h-px bg-white/5" />

                            {/* Socials */}
                            <div>
                                <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">Socials</p>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="https://instagram.com/dj.werra254"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-blue-500/40 group-hover:bg-blue-600/10 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                        </span>
                                        <p className="text-sm font-medium">Instagram</p>
                                    </a>

                                    <a
                                        href="https://tiktok.com/@dj_werra254"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-blue-500/40 group-hover:bg-blue-600/10 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                                        </span>
                                        <p className="text-sm font-medium">TikTok</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="relative rounded-2xl border border-white/8 bg-white/3 p-7 overflow-hidden flex flex-col justify-between">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-blue-600/10 blur-[80px]" />

                        <div>
                            <p className="text-xs text-gray-500 mb-7 uppercase tracking-widest">Location</p>
                            <h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Nairobi, Kenya</h3>
                            <p className="text-gray-500 text-sm">Available for travel nationwide.</p>
                        </div>

                        <div className="mt-10">
                            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Response time</p>
                            <p className="text-sm text-gray-400">Usually within a few hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
