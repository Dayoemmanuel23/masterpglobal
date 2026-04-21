import { motion } from "motion/react";
import React from "react";
import { SiennaIcon } from "./SiennaIcon";

const NIGERIAN_WAYPOINTS = [
  { name: 'Lagos', position: 5 },
  { name: 'Benin', position: 25 },
  { name: 'Onitsha', position: 45 },
  { name: 'Enugu', position: 65 },
  { name: 'Calabar', position: 85 }
];

export default function DigitalTransitView() {
  return (
    <div className="w-full bg-brand-navy border-b border-brand-accent/20 relative overflow-hidden" style={{ height: '80px' }}>
      
      {/* Background styling - Digital map grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      
      {/* The Highway Line */}
      <div className="absolute inset-x-0 bottom-6 border-t-2 border-dashed border-white/20" />
      
      {/* Route Waypoints */}
      {NIGERIAN_WAYPOINTS.map((state) => (
        <div 
          key={state.name} 
          className="absolute bottom-2 flex flex-col items-center" 
          style={{ left: `${state.position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1 shadow-sm whitespace-nowrap bg-brand-navy px-1">
            {state.name}
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-accent border-2 border-brand-navy shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
        </div>
      ))}
      
      {/* The Animated Sienna Van */}
      <motion.div
        className="absolute bottom-1 z-10 w-28 h-12"
        initial={{ left: '-15%' }}
        animate={{ left: '115%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        key="sienna-animation"
      >
        <SiennaIcon className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
        
        {/* Speed / Motion lines trailing the vehicle */}
        <motion.div 
           className="absolute top-1/2 -left-8 h-[2px] bg-white/40 rounded-full"
           initial={{ width: 10, opacity: 1, x: 0 }}
           animate={{ width: 40, opacity: 0, x: -30 }}
           transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
           className="absolute top-1/3 -left-4 h-[1px] bg-brand-accent/60 rounded-full"
           initial={{ width: 5, opacity: 1, x: 0 }}
           animate={{ width: 25, opacity: 0, x: -20 }}
           transition={{ duration: 0.4, repeat: Infinity, delay: 0.2, ease: "easeOut" }}
        />

        {/* Small live popup above car */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded px-2 py-0.5 border border-white/20 whitespace-nowrap flex items-center shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse mr-1.5" />
          <span className="text-[9px] font-bold text-white tracking-wider uppercase">Live Transit</span>
        </div>
      </motion.div>
    </div>
  );
}
