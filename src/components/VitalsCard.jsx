import React from 'react';
import { Heart, Activity, Scale } from 'lucide-react';

const VitalsCard = ({ vitals }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Patient Vitals
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Blood Pressure</p>
                    <p className="text-xl font-bold text-gray-900">{vitals.blood_pressure}</p>
                    <span className="text-xs text-green-700">mmHg</span>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Heart Rate</p>
                    <p className="text-xl font-bold text-gray-900">{vitals.heart_rate}</p>
                    <span className="text-xs text-red-700">bpm</span>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-1">Weight</p>
                    <p className="text-xl font-bold text-gray-900">{vitals.weight_kg}</p>
                    <span className="text-xs text-blue-700">kg</span>
                </div>
            </div>
        </div>
    );
};

export default VitalsCard;
