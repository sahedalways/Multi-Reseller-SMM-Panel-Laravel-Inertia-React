import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { statsData } from "@/utils/statsData";

const Stats = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    // Card animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            },
        },
    };

    // Icon animation variants
    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
            },
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        },
    };

    // Value counter animation
    const valueVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
                delay: 0.3,
            },
        },
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        >
            {/* Heading with animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SectionHeader
                    title="Trusted by Thousands"
                    subtitle="Join businesses and creators who grow their social presence using our platform. Fast delivery, reliable services, and 24/7 support."
                    align="center"
                />
            </motion.div>

            {/* Stats Cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 justify-center items-center"
            >
                {statsData?.map((stat) => {
                    const IconComponent = stat.icon;
                    return (
                        <motion.div
                            key={stat.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0, 200, 83, 0.2)",
                                transition: { type: "spring", stiffness: 300 },
                            }}
                            className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-md p-5 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 w-44 h-44"
                        >
                            {/* Icon with animation */}
                            <motion.div
                                variants={iconVariants}
                                whileHover="hover"
                                className="bg-gradient-to-r from-primary-green via-emerald-400 to-sky-400 p-3 rounded-full mb-3 text-white flex items-center justify-center cursor-pointer"
                            >
                                <IconComponent className="w-6 h-6" />
                            </motion.div>

                            {/* Value with animation */}
                            <motion.div
                                variants={valueVariants}
                                className="text-xl sm:text-2xl font-bold text-white"
                            >
                                {stat.value}
                            </motion.div>

                            {/* Label with animation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 mt-1 text-sm text-center"
                            >
                                {stat.label}
                            </motion.div>

                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-green/10 via-emerald-400/10 to-sky-400/10 opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Floating background animation */}
            <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: -1 }}
            >
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 bg-primary-green/5 rounded-full blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2,
                        }}
                        style={{
                            top: `${20 + i * 30}%`,
                            left: `${10 + i * 20}%`,
                        }}
                    />
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Stats;
