"use client";
import React from "react";
import Link from "next/link";

export function Footer() {
    const socialLinks = [
        {
            name: "Instagram", href: "https://instagram.com/dj.werra254", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            )
        },
        {
            name: "TikTok", href: "https://tiktok.com/@dj_werra254", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            )
        },
        {
            name: "Twitter / X", href: "https://x.com/djwerra254", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            )
        },
        {
            name: "YouTube", href: "https://www.youtube.com/@dj_werra254", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            )
        },
        {
            name: "Hearthis", href: "https://hearthis.at/dj-werra", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            )
        }
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Mixes", href: "/mixes" },
        { label: "Academy", href: "/academy" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <footer className="relative bg-black text-gray-400">
            {/* gradient hairline accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-white font-bold text-lg tracking-tight mb-3">DJ WERRA</h3>
                        <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                            Nairobi&apos;s Premium Gospel DJ. Elevating the atmosphere, one event at a time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-semibold uppercase tracking-[0.18em] mb-4">Navigation</h4>
                        <ul className="space-y-2.5 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-semibold uppercase tracking-[0.18em] mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-2.5">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-blue-500/50 hover:bg-blue-600 hover:text-white"
                                    title={link.name}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} DJ Werra. All rights reserved.</p>
                    <p className="tracking-wide">Made in Nairobi, Kenya</p>
                </div>
            </div>
        </footer>
    );
}
