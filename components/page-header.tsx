"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHeader() {
    return (
        <div className="sticky top-0 z-50 px-4 pt-4 pb-2">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl">
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/25 group-hover:bg-white/10 transition-all">
                        <ArrowLeft className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium">Home</span>
                </Link>

                <span className="text-sm font-semibold text-white tracking-tight">DJ WERRA</span>

                <Link
                    href="/contact"
                    className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm shadow-blue-600/30"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
}
