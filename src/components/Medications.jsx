import React, { useState, useEffect } from 'react';
import { Pill, Plus, Bell, Trash2, CheckCircle, Clock } from 'lucide-react';

const Medications = () => {
    const [medications, setMedications] = useState([
        { id: 1, name: 'Amlodipine', dosage: '5mg', time: '08:00' },
        { id: 2, name: 'Losartan', dosage: '50mg', time: '20:00' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newMed, setNewMed] = useState({ name: '', dosage: '', time: '' });
    const [permission, setPermission] = useState(Notification.permission);

    // Request Notification Permission on mount
    useEffect(() => {
        if (permission === 'default') {
            Notification.requestPermission().then(setPermission);
        }
    }, [permission]);

    // Check time every minute for notifications
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

            medications.forEach(med => {
                if (med.time === currentTime) {
                    new Notification("Time for your Medication!", {
                        body: `Please take ${med.name} (${med.dosage}).`,
                        icon: '/vite.svg'
                    });
                }
            });
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, [medications]);

    const handleAddMed = (e) => {
        e.preventDefault();
        setMedications([...medications, { id: Date.now(), ...newMed }]);
        setNewMed({ name: '', dosage: '', time: '' });
        setShowForm(false);
    };

    const handleDelete = (id) => {
        setMedications(medications.filter(m => m.id !== id));
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-1">Medications</h1>
                    <p className="text-gray-500">Manage your daily reminders</p>
                </div>
                {permission === 'denied' && (
                    <span className="text-xs text-red-500 bg-red-50 px-3 py-1 rounded-full">
                        Notifications Blocked
                    </span>
                )}
            </div>

            {/* List */}
            <div className="space-y-4">
                {medications.map((med) => (
                    <div key={med.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                                <Pill className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">{med.name}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-semibold">{med.dosage}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {med.time}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(med.id)}
                            className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Button */}
            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[2rem] text-gray-400 font-bold hover:border-green-500 hover:text-green-600 hover:bg-green-50/50 transition-all flex items-center justify-center gap-2"
                >
                    <Plus className="w-5 h-5" /> Add New Medication
                </button>
            )}

            {/* Add Form */}
            {showForm && (
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-xl font-bold mb-6">Add Medication</h3>
                    <form onSubmit={handleAddMed} className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Name</label>
                            <input
                                required
                                type="text"
                                value={newMed.name}
                                onChange={e => setNewMed({ ...newMed, name: e.target.value })}
                                placeholder="e.g. Metformin"
                                className="w-full mt-1 p-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Dosage</label>
                                <input
                                    required
                                    type="text"
                                    value={newMed.dosage}
                                    onChange={e => setNewMed({ ...newMed, dosage: e.target.value })}
                                    placeholder="e.g. 500mg"
                                    className="w-full mt-1 p-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Time</label>
                                <input
                                    required
                                    type="time"
                                    value={newMed.time}
                                    onChange={e => setNewMed({ ...newMed, time: e.target.value })}
                                    className="w-full mt-1 p-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex-1 py-3 rounded-xl font-bold bg-black text-white hover:bg-gray-800"
                            >
                                Save Reminder
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Medications;
