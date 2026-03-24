import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ENGINES, EngineType } from './types';
import { EngineCard } from './components/EngineCard';
import { EngineDetail } from './components/EngineDetail';
import { FourStrokeDiagram } from './components/FourStrokeDiagram';
import { AIAssistant } from './components/AIAssistant';
import { Gauge, BookOpen, Cpu, History, ChevronRight } from 'lucide-react';

export default function App() {
  const [selectedEngine, setSelectedEngine] = useState<EngineType | null>(null);

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <Gauge size={18} className="text-orange-500" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">Engine Academy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-gray-500">
            <a href="#explore" className="hover:text-orange-500 transition-colors">Explore</a>
            <a href="#how-it-works" className="hover:text-orange-500 transition-colors">Mechanics</a>
            <a href="#ai-assistant" className="hover:text-orange-500 transition-colors">AI Expert</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-mono uppercase tracking-wider mb-6">
              <Cpu size={12} />
              The Future of Propulsion
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-[0.9] mb-8 tracking-tight">
              Master the <br />
              <span className="text-orange-500">Mechanics</span> of Power.
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed mb-8">
              From the steam-powered giants of the past to the electric silent motors of tomorrow. Explore the engineering that moves the world.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20">
                Start Learning
              </button>
              <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-[#1a1a1a] transition-colors">
                View Gallery <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <FourStrokeDiagram />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-black/5 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <History size={16} className="text-orange-500" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Did you know?</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                The first internal combustion engine was patented in 1807, using hydrogen as fuel.
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Engine Grid */}
      <section id="explore" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif italic mb-4">Core Technologies</h2>
              <p className="text-gray-500 max-w-md">Select an engine type to dive deep into its components and operational cycles.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-400">
                <BookOpen size={18} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINES.map((engine, i) => (
              <motion.div
                key={engine.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <EngineCard 
                  engine={engine} 
                  onClick={() => setSelectedEngine(engine)} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-assistant" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif italic mb-6">Ask the Expert</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Have a specific question about compression ratios, regenerative braking, or jet propulsion? Our AI assistant is trained on decades of mechanical engineering data.
            </p>
            <ul className="space-y-4">
              {['Turbochargers vs Superchargers', 'Efficiency of Electric Motors', 'The Future of Hydrogen'].map(topic => (
                <li key={topic} className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <AIAssistant />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Gauge size={16} className="text-orange-500" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">Engine Academy © 2026</span>
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-[#1a1a1a]">Privacy</a>
            <a href="#" className="hover:text-[#1a1a1a]">Terms</a>
            <a href="#" className="hover:text-[#1a1a1a]">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <EngineDetail 
        engine={selectedEngine} 
        onClose={() => setSelectedEngine(null)} 
      />
    </div>
  );
}
