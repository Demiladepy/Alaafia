import React from 'react';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
            <div className="bg-gray-100 p-8 rounded-full mb-6">
                <Construction className="w-16 h-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-500 max-w-md">
                This feature is coming soon! check back later for detailed reports and educational resources tailored to your health.
            </p>
        </div>
    );
};

export default PlaceholderPage;
