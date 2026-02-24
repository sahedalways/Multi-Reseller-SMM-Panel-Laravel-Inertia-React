import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600">
                    {/* SVG Logo Icon */}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                    yesMMwave
                </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                <Link
                    href="/services"
                    className="text-gray-300 hover:text-white font-medium transition"
                >
                    Services
                </Link>
                <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white font-medium transition"
                >
                    Blog
                </Link>
                <Link
                    href="/api"
                    className="text-gray-300 hover:text-white font-medium transition"
                >
                    API
                </Link>
            </div>

            <div className="flex flex-row gap-4">
                <button className="btn-primary flex items-center gap-2">
                    <span className="text-xl">+</span>
                    Sign Up
                </button>

                <button className="btn-ghost flex items-center gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                    </svg>
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
