// components/SectionHeader.jsx
import React from "react";

const SectionHeader = ({
    title,
    subtitle,
    align = "center",
    className = "",
}) => {
    const titleAlignClass = align === "center" ? "text-center" : "text-left";

    return (
        <div className={`mb-10 ${className}`}>
            <h2
                className={`text-2xl sm:text-3xl font-bold text-white mb-2 ${titleAlignClass}`}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto text-center">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
