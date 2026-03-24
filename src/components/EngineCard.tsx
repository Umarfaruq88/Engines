import React from 'react';
import { EngineType } from '../types';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  engine: EngineType;
  onClick: () => void;
}

export const EngineCard = ({ engine, onClick }: Props) => {
  const Icon = (Icons as any)[engine.icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={engine.image} 
          alt={engine.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Icon size={16} className="text-orange-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">Category</span>
          </div>
          <h3 className="text-xl font-serif italic">{engine.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{engine.description}</p>
        <div className="flex flex-wrap gap-2">
          {engine.details.slice(0, 3).map(detail => (
            <span key={detail} className="text-[9px] font-mono uppercase tracking-wider bg-[#f5f5f0] px-2 py-1 rounded-full text-gray-500">
              {detail}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
