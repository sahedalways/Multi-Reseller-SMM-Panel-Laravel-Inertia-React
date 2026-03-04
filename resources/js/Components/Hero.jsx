import React from "react";
import { Link } from "@inertiajs/react";
import { socialLogos } from "@/utils/socialLogos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardCard from "./DashboardCard";
import { homeCards } from "@/utils/homeCards";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                            <span className="text-white">Grow Your Social</span>
                            <br />
                            <span className="text-primary-green">
                                Media Presence
                            </span>
                        </h2>

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
                    </div>
                    <div className="relative hidden lg:block">
                        <Slider {...settings}>
                            {homeCards.map((card, idx) => (
                                <DashboardCard
                                    key={idx}
                                    stats={card.stats}
                                    progress={card.progress}
                                    activity={card.activity}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
