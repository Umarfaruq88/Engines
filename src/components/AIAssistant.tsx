import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { Send, Bot, User, Loader2 } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const AIAssistant = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: "Hello! I'm your Engine Academy assistant. Ask me anything about how engines work, their history, or future technologies!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are an expert mechanical engineer and educator at Engine Academy. Explain engine concepts simply but accurately. Use markdown for formatting.",
        },
      });

      const botMessage = response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
      setMessages(prev => [...prev, { role: 'bot', content: botMessage }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden">
      <div className="p-4 bg-[#151619] text-white flex items-center gap-2">
        <Bot size={20} className="text-orange-500" />
        <span className="font-mono text-xs uppercase tracking-widest">Engine Expert AI</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fcfcfc]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-[#1a1a1a] text-white rounded-tr-none' 
                : 'bg-white border border-black/5 text-[#1a1a1a] rounded-tl-none shadow-sm'
            }`}>
              <div className="markdown-body">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-black/5 p-4 rounded-2xl rounded-tl-none shadow-sm">
              <Loader2 className="animate-spin text-orange-500" size={20} />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-black/5 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about turbochargers, torque, or EVs..."
          className="flex-1 bg-[#f5f5f0] border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-[#1a1a1a] text-white p-2 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
