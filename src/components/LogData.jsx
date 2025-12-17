import React, { useState } from 'react';
import { Save } from 'lucide-react';

const LogData = () => {
    const [saved, setSaved] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Log Your Health Data</h1>

            <form onSubmit={handleSave} className="space-y-8 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">

                {/* Glucose */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">Glucose (mg/dL)</h3>
                    <input
                        type="number"
                        placeholder="e.g. 110"
                        className="w-full bg-secondary/50 border-none rounded-2xl px-6 py-4 text-lg font-medium focus:ring-2 focus:ring-green-500 outline-none"
                    />
                    <div className="flex gap-2">
                        <button type="button" className="px-4 py-2 bg-secondary rounded-full text-xs font-bold text-green-800">Before Meal</button>
                        <button type="button" className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-200">After Meal</button>
                    </div>
                </div>

                {/* BP & Weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-gray-800">Blood Pressure</h3>
                        <div className="flex gap-2">
                            <input type="number" placeholder="Sys" className="w-full bg-secondary/50 border-none rounded-2xl px-4 py-4 font-medium focus:ring-2 focus:ring-green-500 outline-none" />
                            <input type="number" placeholder="Dia" className="w-full bg-secondary/50 border-none rounded-2xl px-4 py-4 font-medium focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-gray-800">Weight (kg)</h3>
                        <input type="number" placeholder="e.g. 82" className="w-full bg-secondary/50 border-none rounded-2xl px-6 py-4 font-medium focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                </div>

                {/* Diet */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-gray-800">Diet & Fluid Intake</h3>
                    <textarea
                        rows="3"
                        placeholder="What did you eat today?"
                        className="w-full bg-secondary/50 border-none rounded-2xl px-6 py-4 font-medium focus:ring-2 focus:ring-green-500 outline-none resize-none"
                    ></textarea>
                </div>

                <div className="pt-4 flex items-center justify-between">
                    {saved && <span className="text-green-600 font-bold animate-pulse">Data Saved Successfully!</span>}
                    <button type="submit" className="ml-auto bg-accent hover:bg-accent-hover text-black px-8 py-4 rounded-full font-bold shadow-md flex items-center gap-2 transition-all">
                        <Save className="w-5 h-5" /> Save Log
                    </button>
                </div>

            </form>
        </div>
    );
};

export default LogData;
