"use client";
import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export default function AcademyPage() {
    return (
        <div className="min-h-screen relative bg-black text-white overflow-hidden">
            <PageHeader />
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/academy-bg.jpeg"
                    alt="DJ Academy Background"
                    className="w-full h-full object-contain object-bottom opacity-80"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-6 pb-24 md:py-24 flex flex-col md:h-screen md:justify-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        MASTER THE <span className="text-blue-500">CRAFT</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                        Join the DJ Werra Academy and learn the art of professional DJing.
                        From beatmatching to crowd control, elevate your skills to the next level.
                    </p>

                    <Link href="/contact">
                        <button className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/50">
                            Enroll Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </Link>

                    <p className="mt-6 text-sm text-gray-400">
                        * Limited slots available for the upcoming intake.
                    </p>
                </div>
            </div>
        </div>
    );
}
