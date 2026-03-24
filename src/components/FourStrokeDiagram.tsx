import { motion } from 'motion/react';

export const FourStrokeDiagram = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-white rounded-3xl shadow-xl p-8 overflow-hidden border border-black/5">
      <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest opacity-40">
        4-Stroke Cycle Simulation
      </div>
      
      <svg viewBox="0 0 200 300" className="w-full h-full">
        {/* Cylinder Wall */}
        <rect x="50" y="50" width="100" height="200" fill="none" stroke="#1a1a1a" strokeWidth="2" rx="4" />
        
        {/* Piston */}
        <motion.g
          animate={{
            y: [0, 100, 0, 100, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <rect x="52" y="150" width="96" height="40" fill="#333" rx="2" />
          <rect x="95" y="190" width="10" height="60" fill="#666" />
        </motion.g>

        {/* Valves */}
        <motion.line
          x1="70" y1="50" x2="70" y2="60"
          stroke="#1a1a1a" strokeWidth="4"
          animate={{ y: [0, 10, 0, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1="130" y1="50" x2="130" y2="60"
          stroke="#1a1a1a" strokeWidth="4"
          animate={{ y: [0, 0, 0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Spark/Combustion */}
        <motion.circle
          cx="100" cy="55" r="5"
          fill="#ff4e00"
          animate={{
            scale: [0, 0, 4, 0, 0],
            opacity: [0, 0, 1, 0, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </svg>

      <div className="mt-4 grid grid-cols-4 gap-2 text-[8px] font-mono uppercase text-center">
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-blue-400 mb-1" />
          Intake
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400 mb-1" />
          Compression
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-red-500 mb-1" />
          Power
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-gray-400 mb-1" />
          Exhaust
        </div>
      </div>
    </div>
  );
};
