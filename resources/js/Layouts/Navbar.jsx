import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-gray-900/95 backdrop-blur-lg py-3 shadow-lg"
                        : "bg-transparent py-4"
                }`}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
                    {/* Logo - Smaller on mobile */}
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 sm:gap-2 group"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-600 group-hover:border-primary-green transition-all duration-300">
                            <svg
                                width="18"
                                height="18"
                                className="sm:w-6 sm:h-6 text-white group-hover:text-primary-green transition-colors"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-primary-green transition-colors">
                            yesMMwave
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link
                            href="/services"
                            className="text-sm lg:text-base text-gray-300 hover:text-white font-medium transition relative group"
                        >
                            Services
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm lg:text-base text-gray-300 hover:text-white font-medium transition relative group"
                        >
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/api"
                            className="text-sm lg:text-base text-gray-300 hover:text-white font-medium transition relative group"
                        >
                            API
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex flex-row gap-2 lg:gap-3">
                        <Link
                            href={route("register")}
                            className="btn-primary flex items-center gap-1 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                        >
                            <span className="text-sm lg:text-base">+</span>
                            Sign Up
                        </Link>

                        <Link
                            href={route("login")}
                            className="btn-ghost flex items-center gap-1 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
                        >
                            <svg
                                width="14"
                                height="14"
                                className="lg:w-4 lg:h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                            </svg>
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                                isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                                isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        ></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                        <span className="text-lg font-bold text-white">
                            Menu
                        </span>
                        <button
                            onClick={closeMenu}
                            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                        <div className="flex flex-col space-y-1 px-3">
                            <Link
                                href="/services"
                                onClick={closeMenu}
                                className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                <span className="text-base font-medium">
                                    Services
                                </span>
                            </Link>
                            <Link
                                href="/blog"
                                onClick={closeMenu}
                                className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                <span className="text-base font-medium">
                                    Blog
                                </span>
                            </Link>
                            <Link
                                href="/api"
                                onClick={closeMenu}
                                className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                <span className="text-base font-medium">
                                    API
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Buttons */}
                        <div className="mt-6 px-3 space-y-2">
                            <Link
                                href={route("register")}
                                onClick={closeMenu}
                                className="btn-primary flex items-center justify-center gap-1.5 w-full py-2 text-sm"
                            >
                                <span className="text-base">+</span>
                                Sign Up
                            </Link>

                            <Link
                                href={route("login")}
                                onClick={closeMenu}
                                className="btn-ghost flex items-center justify-center gap-1.5 w-full py-2 text-sm"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                                </svg>
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="p-4 border-t border-gray-800">
                        <p className="text-xs text-gray-500 text-center">
                            © 2024 yesMMwave
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-16 sm:h-[72px]"></div>
        </>
    );
};

export default Navbar;
