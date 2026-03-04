import React from "react";
import { FaUsers, FaCogs, FaHeadset, FaChartLine } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Stats = () => {
    const stats = [
        { id: 1, value: "10k+", label: "Clients", icon: FaUsers },
        { id: 2, value: "500+", label: "Services", icon: FaCogs },
        { id: 3, value: "24/7", label: "Support", icon: FaHeadset },
        { id: 4, value: "50k+", label: "Active Users", icon: FaChartLine },
    ];

    return (
        <section
            className={`w-full max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12`}
        >
            {/* Heading */}
            <SectionHeader
                title="Trusted by Thousands"
                subtitle="Join businesses and creators who grow their social presence using our platform. Fast delivery, reliable services, and 24/7 support."
                align="center"
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 justify-center items-center">
                {stats.map((stat) => {
                    const IconComponent = stat.icon;
                    return (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-md p-5 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 w-44 h-44"
                        >
                            <div className="bg-gradient-to-r from-primary-green via-emerald-400 to-sky-400 p-3 rounded-full mb-3 text-white flex items-center justify-center">
                                <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="text-xl sm:text-2xl font-bold text-white">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 mt-1 text-sm text-center">
                                {stat.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Stats;
