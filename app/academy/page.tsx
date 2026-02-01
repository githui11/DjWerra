"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function AcademyPage() {
    return (
        <div className="min-h-screen relative bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/academy-bg.jpeg"
                    alt="DJ Academy Background"
                    className="w-full h-full object-cover opacity-60"
                    style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 h-screen flex flex-col justify-center">
                <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors self-start">
                    <MoveLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        MASTER THE <span className="text-blue-500">CRAFT</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                        Join the DJ Werra Academy and learn the art of professional DJing.
                        From beatmatching to crowd control, elevate your skills to the next level.
                    </p>

                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50">
                        Enroll Now
                    </button>

                    <p className="mt-6 text-sm text-gray-400">
                        * Limited slots available for the upcoming intake.
                    </p>
                </div>
            </div>
        </div>
    );
}
