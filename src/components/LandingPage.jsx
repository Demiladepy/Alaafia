import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, MessageCircle, Heart } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            {/* Landing Header */}
            <header className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-black transform rotate-45"></div>
                    <span className="text-xl font-bold tracking-tight">Alaafia AI</span>
                </div>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Get Started
                </button>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto py-12">

                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-800 text-xs font-bold uppercase tracking-wide">
                    <Heart className="w-3 h-3 fill-current" />
                    Trusted by 10,000+ Nigerians
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                    Managing Kidney Health, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
                        Simplified for You.
                    </span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                    Your personal culturally-aware health companion. Monitor your vitals, chat in your local language, and get personalized diet advice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full h-full justify-center">
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-accent hover:bg-accent-hover text-black px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        Start Your Journey <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                        Learn More
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <Activity className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Real-time Vitals</h3>
                        <p className="text-gray-500 text-sm">Track glucose, BP, and eGFR with intuitive charts and alerts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Speak Your Language</h3>
                        <p className="text-gray-500 text-sm">Chat with Alaafia in English, Pidgin, Yoruba, Hausa, or Igbo.</p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Local Diet Plans</h3>
                        <p className="text-gray-500 text-sm">Get food recommendations that fit your Nigerian lifestyle.</p>
                    </div>
                </div>

            </main>

            <footer className="py-8 text-center text-gray-400 text-sm">
                &copy; 2025 Alaafia AI. Built for Good Health & Well-being.
            </footer>
        </div>
    );
};

export default LandingPage;
