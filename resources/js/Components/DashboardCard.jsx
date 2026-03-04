import React from "react";

const DashboardCard = ({ stats, progress, activity }) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 w-full">
            {/* Top bar */}
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
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-900/50 p-3 rounded border border-gray-700"
                    >
                        <div className="text-primary-green text-sm font-bold">
                            {item.value}
                        </div>
                        <div className="text-xs text-gray-500">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress bar */}
            <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{progress.label}</span>
                    <span className="text-primary-green">{progress.value}</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary-green rounded-full"
                        style={{ width: progress.percent }}
                    ></div>
                </div>
            </div>

            {/* Activity list */}
            <div className="mt-3 space-y-2">
                {activity.map((act, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-green"></div>
                        <span className="text-gray-400">{act}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCard;
