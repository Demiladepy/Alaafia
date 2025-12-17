import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Volume2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
You are Alaafia, a compassionate Nigerian health assistant. 
**Simulate user's local persona:** Speak with a Nigerian touch but keep it professional if talking about serious issues.
**Logic:** If the user sends data (e.g., "sugar 150"), analyze it and give specific feedback.
**Disclaimer:** Always remind them you are not a doctor.
`;

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm here to help you manage your kidney health. What's on your mind today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            // Simulate API delay if no key, or real call
            let responseText = "I see. Could you tell me more?";
            if (API_KEY) {
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: SYSTEM_PROMPT });
                const chat = model.startChat({
                    history: messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
                });
                const result = await chat.sendMessage(input);
                responseText = result.response.text();
            } else {
                // Mock response for aesthetics demo
                await new Promise(r => setTimeout(r, 1000));
                if (input.toLowerCase().includes('diet')) responseText = "Diet is crucial! For Nigerian diets, try reducing Pounded Yam portions and increasing vegetables like Ugu or Ewedu. Would you like a meal plan?";
                else responseText = "That sounds important. Remember to monitor your fluid intake as well. Shall we log your current status?";
            }

            const botMessage = { id: Date.now() + 1, text: responseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "I'm having trouble connecting right now.", sender: 'bot' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden relative">

            {/* Header */}
            <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        Chat with Alaafia
                    </h3>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] text-gray-300 font-bold uppercase mb-1 tracking-wider">
                            {msg.sender === 'user' ? 'You' : 'Alaafia'}
                        </span>
                        <div
                            className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-accent text-black rounded-tr-sm' // Yellow bubble for user
                                    : 'bg-gray-50 text-gray-700 rounded-tl-sm' // Light gray for bot
                                }`}
                        >
                            <p>{msg.text}</p>
                        </div>
                        {msg.sender === 'bot' && (
                            <button onClick={() => speak(msg.text)} className="mt-1 ml-2 text-gray-300 hover:text-gray-500">
                                <Volume2 className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="flex items-start">
                        <div className="bg-gray-50 p-4 rounded-3xl rounded-tl-sm">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white">
                <div className="bg-gray-50 p-2 rounded-3xl flex items-center gap-2 pr-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className="bg-black hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {/* Quick Actions / Chips */}
                    {["What are the symptoms of CKD?", "Diet plan?", "Manage BP"].map(chip => (
                        <button
                            key={chip}
                            onClick={() => setInput(chip)}
                            className="whitespace-nowrap px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-xs font-semibold text-gray-600 transition-colors"
                        >
                            {chip}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
