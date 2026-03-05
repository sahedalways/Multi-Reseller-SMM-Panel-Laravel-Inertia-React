import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { benefitsData } from "@/utils/benefitsData";
import phoneImg from "../public/images/frontend/home/phone.png";

const Benefits = () => {
    // Strategic positioning for a "surrounding" effect
    const leftPositions = [
        { top: "10%", left: "15%" },
        { top: "45%", left: "5%" },
        { top: "80%", left: "20%" },
    ];

    const rightPositions = [
        { top: "15%", right: "15%" },
        { top: "50%", right: "5%" },
        { top: "85%", right: "20%" },
    ];

    return (
        <section className="relative py-32 bg-[#030712] overflow-hidden">
            {/* 1. ARCHITECTURAL BACKGROUND */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

                {/* Kinetic Glows */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <SectionHeader
                        title="Elite Advantage"
                        subtitle="Supercharge your social presence with industry-leading infrastructure."
                        align="center"
                    />
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[700px]">
                    {/* LEFT SIDE CARDS */}
                    <div className="hidden lg:block absolute inset-0">
                        {benefitsData.slice(0, 3).map((benefit, i) => (
                            <BenefitCard
                                key={benefit.id}
                                benefit={benefit}
                                style={leftPositions[i]}
                                delay={i * 0.2}
                            />
                        ))}
                    </div>

                    {/* CENTERPIECE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-20 group"
                    >
                        {/* Outer Ring Decoration */}
                        <div className="absolute inset-0 scale-110 border border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

                        <img
                            src={phoneImg}
                            alt="Interface"
                            className="w-[300px] lg:w-[360px] relative z-10 drop-shadow-[0_0_50px_rgba(16,185,129,0.3)] group-hover:drop-shadow-[0_0_80px_rgba(16,185,129,0.5)] transition-all duration-700"
                        />
                    </motion.div>

                    {/* RIGHT SIDE CARDS */}
                    <div className="hidden lg:block absolute inset-0">
                        {benefitsData.slice(3, 6).map((benefit, i) => (
                            <BenefitCard
                                key={benefit.id}
                                benefit={benefit}
                                style={rightPositions[i]}
                                delay={i * 0.2 + 0.3}
                            />
                        ))}
                    </div>

                    {/* MOBILE LIST */}
                    <div className="lg:hidden grid grid-cols-1 gap-4 mt-12 w-full">
                        {benefitsData.map((benefit) => (
                            <div
                                key={benefit.id}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                            >
                                <div className="text-emerald-400 mb-2">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-emerald-500 font-bold">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-component for the Floating Cards
const BenefitCard = ({ benefit, style, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
            initial: { duration: 0.5, delay },
            y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay * 2,
            },
        }}
        className="absolute w-[260px]"
        style={style}
    >
        <div className="group relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-emerald-500/50 transition-colors duration-500">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10">
                <div className="bg-emerald-500/10 w-10 h-10 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    {benefit.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                    {benefit.description}
                </p>
            </div>
        </div>
    </motion.div>
);

export default Benefits;
