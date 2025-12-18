import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Volume2, Mic } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_PROMPT = `
You are Alaafia, a compassionate Nigerian health assistant. 
**Simulate user's local persona:** Speak with a Nigerian touch but keep it professional if talking about serious issues.
**Logic:** If the user sends data (e.g., "sugar 150"), analyze it and give specific feedback.
**Disclaimer:** Always remind them you are not a doctor.

Do not return markdown, just plain text. Keep it concise
`;

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm here to help you manage your kidney health. What's on your mind today?", role: 'model' }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
	
	const [isRecording, setIsRecording] = useState(false);
	const recognitionRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
	
	useEffect(() => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		if (!SpeechRecognition) {
			console.warn("Speech recognition not supported");
			return;
		}

		const recognition = new SpeechRecognition();
		recognition.lang = "en-NG"; // Nigerian English
		recognition.interimResults = false;
		recognition.continuous = false;

		recognition.onresult = (event) => {
			const transcript = event.results[0][0].transcript;
			setInput(transcript);
			handleSendWithText(transcript);
		};

		recognition.onend = () => {
			setIsRecording(false);
		};

		recognition.onerror = (err) => {
			console.error("Speech error", err);
			setIsRecording(false);
		};

		recognitionRef.current = recognition;
		    return () => {
				messages.forEach(msg => {
					if (msg.audioUrl) URL.revokeObjectURL(msg.audioUrl);
				});
    };
	}, []);


    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

	const fetchTTSAudio = async (text) => {
		try {
			const response = await fetch("https://yarngpt.ai/api/v1/tts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${import.meta.env.VITE_YARN_API_KEY}`,
				},
				body: JSON.stringify({ text }),
			});

			if (!response.ok) throw new Error("TTS failed");

			const audioBlob = await response.blob();
			const audioUrl = URL.createObjectURL(audioBlob);

			return audioUrl;
		} catch (err) {
			console.error("TTS error:", err);
			return null;
		}
	};
	
	const toggleRecording = () => {
		if (!recognitionRef.current) return;

		if (isRecording) {
			recognitionRef.current.stop();
			setIsRecording(false);
		} else {
			recognitionRef.current.start();
			setIsRecording(true);
		}
	};

	const handleSendWithText = async (text) => {
		if (!text.trim()) return;

		const userMessage = { id: Date.now(), text, role: 'user' };
		setMessages(prev => [...prev, userMessage]);
		setLoading(true);
		setInput("");

		try {
			let responseText = "I see. Could you tell me more?";

			if (API_KEY) {
				const chat = genAI.chats.create({
					model: "gemini-2.5-flash",
					config: { systemInstruction: SYSTEM_PROMPT },
					history: messages.slice(1).map(m => ({
						role: m.role === 'user' ? 'user' : 'model',
						parts: [{ text: m.text }]
					})),
				});

				const result = await chat.sendMessage({ message: text });
				responseText = result.text
			}
			
			const messageId = Date.now() + 1

			const botMessage = {
				id: messageId,
				text: responseText,
				role: 'model'
			};

			setMessages(prev => [...prev, botMessage]);

			// 🔊 Auto speak response (nice hackathon touch)
			const audioUrl = await fetchTTSAudio(responseText);
			console.log("done fetching");

			if (audioUrl) {
				console.log(audioUrl, "here");
				setMessages(prev =>
					prev.map(m =>
						m.id === messageId ? { ...m, audioUrl } : m
					)
				);

				// Auto-play once
				const audio = new Audio(audioUrl);
				audio.play();
			}

		} catch (e) {
			console.error(e)
			setMessages(prev => [...prev, {
				id: Date.now(),
				text: "I'm having trouble connecting right now.",
				role: 'model'
			}]);
		} finally {
			setLoading(false);
		}
	};

	const handleSend = () => handleSendWithText(input);

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
                    <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] text-gray-300 font-bold uppercase mb-1 tracking-wider">
                            {msg.role === 'user' ? 'You' : 'Alaafia'}
                        </span>
                        <div
                            className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-accent text-black rounded-tr-sm' // Yellow bubble for user
                                    : 'bg-gray-50 text-gray-700 rounded-tl-sm' // Light gray for bot
                                }`}
                        >
                            <p>{msg.text}</p>
                        </div>
						{msg.role === 'model' && msg.audioUrl && (
							<button
								onClick={() => new Audio(msg.audioUrl).play()}
								className="mt-1 ml-2 text-gray-300 hover:text-gray-500"
							>
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
						disabled={isRecording}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && handleSend()}
						placeholder={isRecording ? "Listening..." : "Type your message..."}
						className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-gray-700 placeholder-gray-400"
					/>

					{/* Mic Button */}
					<button
						onClick={toggleRecording}
						className={`relative w-10 h-10 rounded-full flex items-center justify-center transition
							${isRecording
								? 'bg-red-500 text-white animate-pulse'
								: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
							}`}
					>
						<Mic className="w-4 h-4" />
						{isRecording && (
							<span className="absolute inset-0 rounded-full border-2 border-red-300 animate-ping" />
						)}
					</button>

					{/* Send Button */}
					<button
						onClick={handleSend}
						disabled={loading || isRecording}
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
