import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-body-bg border-t border-white/5 pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand Section */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-primary-green"
                            >
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white">
                            Crescitaly
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The world's most trusted SMM panel. Boost your social
                        presence with our high-quality services and 24/7
                        support.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">
                        Quick Links
                    </h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <Link
                                href="/services"
                                className="hover:text-primary-green transition"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/api"
                                className="hover:text-primary-green transition"
                            >
                                API Documentation
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-primary-green transition"
                            >
                                Latest Blog
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Support</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-primary-green transition"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="hover:text-primary-green transition"
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-primary-green transition"
                            >
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div>
                    <h4 className="text-white font-semibold mb-6">
                        Stay Updated
                    </h4>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary-green transition"
                        />
                        <button className="btn-primary w-full text-sm py-2">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4">
                <p className="text-gray-500 text-xs">
                    © 2024 Crescitaly. All rights reserved.
                </p>
                <div className="flex gap-6">
                    {/* Social Icons Placeholder */}
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white transition"
                    >
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white transition"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white transition"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
