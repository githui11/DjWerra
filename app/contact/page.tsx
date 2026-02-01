"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-400 mb-12 max-w-2xl text-lg">
                    Ready to book or have questions? Reach out directly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-600/20 rounded-full text-blue-500">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-400 mb-2">Call to book directly</p>
                                    <a href="tel:0757127598" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                                        0757 127598
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-600/20 rounded-full text-blue-500">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Socials</h3>
                                    <p className="text-gray-400 mb-2">Send a DM</p>
                                    <div className="flex flex-col space-y-2">
                                        <a href="https://instagram.com/dj.werra254" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                            Instagram (@dj.werra254)
                                        </a>
                                        <a href="https://tiktok.com/@dj_werra254" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                                            TikTok (@dj_werra254)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-8 bg-gradient-to-br from-blue-900/20 to-black rounded-2xl border border-white/5">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Nairobi, Kenya</h3>
                            <p className="text-gray-400">Available for travel nationwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
