import React from 'react';
import { Droplet } from 'lucide-react';

const KidneyStatusCard = ({ eGFR, stage }) => {
    // Simple logic to determine color based on eGFR (placeholder logic)
    // > 90 Normal (Green), 60-89 Mild (Yellow-Green), 30-59 Moderate (Yellow), 15-29 Severe (Orange), < 15 Failure (Red)
    const getColor = (val) => {
        if (val >= 90) return 'text-green-600 bg-green-100';
        if (val >= 60) return 'text-lime-600 bg-lime-100';
        if (val >= 30) return 'text-yellow-600 bg-yellow-100';
        if (val >= 15) return 'text-orange-600 bg-orange-100';
        return 'text-red-600 bg-red-100';
    };

    const statusColor = getColor(eGFR);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-blue-600" />
                Kidney Function
            </h3>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">eGFR Level</p>
                    <p className="text-3xl font-bold text-gray-900">{eGFR}</p>
                    <p className="text-xs text-gray-400">mL/min/1.73m²</p>
                </div>
                <div className={`px-4 py-2 rounded-full ${statusColor} text-sm font-medium`}>
                    {/* Extract stage tracking from mock data or deduce it */}
                    {/* For now, using prop or localized text */}
                    Stage 2 (Mild)
                </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${Math.min(eGFR, 100)}%` }}
                ></div>
            </div>
        </div>
    );
};

export default KidneyStatusCard;
