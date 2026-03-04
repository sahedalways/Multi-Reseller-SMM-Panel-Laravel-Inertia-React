import React from "react";
import { Link } from "@inertiajs/react";
import { socialLogos } from "@/utils/socialLogos";

const Hero = () => {
    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-green/20">
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ zIndex: 1 }}
            >
                {socialLogos.map((logo) => {
                    const IconComponent = logo.icon;
                    return (
                        <div
                            key={logo.id}
                            className={`absolute animate-${logo.anim} hover:scale-110 transition-transform duration-300`}
                            style={{
                                top: logo.top,
                                left: logo.left,
                                right: logo.right,
                                bottom: logo.bottom,
                                animationDelay: logo.delay,
                                zIndex:
                                    logo.size === "large"
                                        ? 10
                                        : logo.size === "medium"
                                          ? 20
                                          : 30,
                            }}
                        >
                            <div
                                className={`
                        bg-gradient-to-br ${logo.color}
                        rounded-xl shadow-xl backdrop-blur-sm bg-opacity-80
                        ${logo.size === "large" ? "p-4" : logo.size === "medium" ? "p-3" : "p-2"}
                        border border-white/10
                        flex items-center justify-center
                    `}
                            >
                                <IconComponent
                                    className={`
                            ${logo.size === "large" ? "text-3xl" : logo.size === "medium" ? "text-2xl" : "text-xl"}
                        `}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Additional floating elements */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ zIndex: 1 }}
            >
                {/* Dots */}
                {[...Array(20)].map((_, i) => {
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    const size = Math.random() * 2 + 1;
                    const duration = 5 + Math.random() * 5;
                    const delay = Math.random() * 5;

                    return (
                        <div
                            key={`dot-${i}`}
                            className="absolute rounded-full bg-primary-green/30 animate-float-slow"
                            style={{
                                top: `${top}%`,
                                left: `${left}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`,
                                opacity: 0.6 + Math.random() * 0.4,
                            }}
                        />
                    );
                })}

                {/* Small circles */}
                {[...Array(10)].map((_, i) => {
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    const size = Math.random() * 4 + 2;
                    const duration = 6 + Math.random() * 6;
                    const delay = Math.random() * 4;

                    return (
                        <div
                            key={`circle-${i}`}
                            className="absolute rounded-full border border-primary-green/20 animate-float-fast"
                            style={{
                                top: `${top}%`,
                                left: `${left}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`,
                                opacity: 0.3 + Math.random() * 0.5,
                            }}
                        />
                    );
                })}
            </div>

            <div
                className="relative w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
                style={{ zIndex: 10 }}
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-md mb-4 sm:mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
                            <span className="text-xs sm:text-sm text-gray-300">
                                Social Media Marketing Platform
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                            <span className="text-white">Grow Your Social</span>
                            <br />
                            <span className="text-primary-green">
                                Media Presence
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                            The most reliable SMM panel for likes, followers,
                            and views. Fast delivery, competitive prices, 24/7
                            support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href={route("register")}
                                className="btn-primary text-sm sm:text-base"
                            >
                                Start Growing Now
                            </Link>
                            <Link
                                href={route("login")}
                                className="btn-outline text-sm sm:text-base"
                            >
                                Sign In
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 flex justify-center lg:justify-start gap-6 sm:gap-8">
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">
                                    10k+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">
                                    Clients
                                </div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">
                                    500+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">
                                    Services
                                </div>
                            </div>
                            <div>
                                <div className="text-xl sm:text-2xl font-bold text-white">
                                    24/7
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">
                                    Support
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="relative">
                            {/* Main card */}
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-gray-400 ml-2">
                                        Dashboard Preview
                                    </span>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-3 mb-3">
                                    <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                                        <div className="text-primary-green text-sm font-bold">
                                            +2.5k
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Instagram
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                                        <div className="text-primary-green text-sm font-bold">
                                            +1.8k
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            TikTok
                                        </div>
                                    </div>
                                </div>

                                {/* Progress bar */}
                                <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-gray-400">
                                            Daily Orders
                                        </span>
                                        <span className="text-primary-green">
                                            78%
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-primary-green rounded-full"></div>
                                    </div>
                                </div>

                                {/* Activity list */}
                                <div className="mt-3 space-y-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 text-xs"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                                            <span className="text-gray-400">
                                                Order #{i}234 - Completed
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-2 -right-2 bg-gray-900 border border-gray-700 rounded-md p-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-primary-green/20 rounded flex items-center justify-center">
                                        <svg
                                            className="w-3 h-3 text-primary-green"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white">
                                            Instant
                                        </div>
                                        <div className="text-[10px] text-gray-500">
                                            Delivery
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
