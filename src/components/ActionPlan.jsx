import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const ActionPlan = ({ tasks }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Action Plan</h3>
            <div className="space-y-3">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        {task.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        ) : (
                            <Circle className="w-5 h-5 text-gray-300 mt-0.5" />
                        )}
                        <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                            {task.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActionPlan;
