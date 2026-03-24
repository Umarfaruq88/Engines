import React from 'react';
import { EngineType } from '../types';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  engine: EngineType | null;
  onClose: () => void;
}

export const EngineDetail = ({ engine, onClose }: Props) => {
  if (!engine) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          onClick={e => e.stopPropagation()}
        >
          {/* Left: Image & Visual */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img 
              src={engine.image} 
              alt={engine.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-4xl font-serif italic mb-2">{engine.name}</h2>
              <p className="text-sm opacity-80 font-light leading-relaxed">
                {engine.description}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-4">How it works</h3>
              <p className="text-lg text-gray-700 leading-relaxed italic font-serif">
                "{engine.howItWorks}"
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-500 mb-4">Key Components</h3>
              <div className="grid grid-cols-2 gap-4">
                {engine.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-[#f5f5f0] border border-black/5">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#151619] text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Educational Insight</span>
                <ArrowRight size={16} className="text-orange-500" />
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                The {engine.name.toLowerCase()} represents a pinnacle of engineering, balancing efficiency with power output. Understanding its mechanics is key to modern physics and chemistry.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
