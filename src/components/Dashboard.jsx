import React, { useState } from 'react';
import GlucoseChart from './GlucoseChart';
import Chatbot from './Chatbot';
import { Lightbulb, Pill, Plus } from 'lucide-react';
import { userData } from '../data/mockData';

const Dashboard = () => {
    const { user } = userData;
    const [activeTab, setActiveTab] = useState('chart');

    return (
        <div className="space-y-10">

            {/* Greeting Section */}
            <div>
                <h1 className="text-4xl font-bold mb-1">Hello, {user.name.split(' ')[0]}!</h1>
                <p className="text-gray-500 font-medium">CKD Stage 2 • Type 2 Diabetes</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Column: Visuals & Cards */}
                <div className="space-y-6">

                    {/* 1. Glucose Tracker Card - Interactive Graph style */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold mb-1">Glucose Tracker</h3>
                                <p className="text-sm text-gray-500">Latest Reading: <span className="text-green-600 font-bold">110 mg/dL</span></p>
                                <p className="text-xs text-gray-400">Trend: Stable</p>
                            </div>
                        </div>
                        <div className="h-64 w-full">
                            <GlucoseChart />
                        </div>
                    </div>

                    {/* 2. AI Insight Card - Green/Sage Theme */}
                    <div className="bg-[#E8F0E5] rounded-[2rem] p-8 relative overflow-hidden flex items-center gap-6">
                        <div className="bg-white/50 p-4 rounded-full min-w-[60px] flex items-center justify-center h-[60px]">
                            <Lightbulb className="w-8 h-8 text-yellow-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">AI Insight</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Consider increasing your water intake by 200ml daily to support kidney function.
                            </p>
                        </div>
                    </div>

                    {/* 3. Medication Alert Card - Peach Theme */}
                    <div className="bg-[#FCEBD8] rounded-[2rem] p-8 relative overflow-hidden flex items-center gap-6">
                        <div className="bg-white/50 p-4 rounded-full min-w-[60px] flex items-center justify-center h-[60px]">
                            <Pill className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Medication Alert</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Next Action: Take your <b>Metformin</b> at 8:00 PM.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right Column: Chat Interface */}
                <div className="h-[800px] sticky top-24">
                    <Chatbot />
                </div>

            </div>

            {/* Floating Action Button for Mobile / Quick Log */}
            <div className="fixed bottom-8 right-8 lg:hidden">
                <button className="bg-accent hover:bg-accent-hover text-black px-6 py-4 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Log Data
                </button>
            </div>

        </div>
    );
};

export default Dashboard;
