import React from 'react';

export const SiennaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shadow / Motion blur */}
    <ellipse cx="50" cy="40" rx="42" ry="3" fill="rgba(0,0,0,0.2)" />
    
    {/* Main Body */}
    <path d="M12,35 C10,30 10,20 12,15 C15,10 20,8 30,8 L60,8 C70,8 80,15 90,25 C92,30 92,35 90,38 C80,38 20,38 12,35 Z" fill="#0A1E3F" />
    <path d="M12,35 C10,30 10,20 12,15 C15,10 20,8 30,8 L60,8 C70,8 80,15 90,25 C92,30 92,35 90,38 C80,38 20,38 12,35 Z" fill="url(#car-gradient)" />
    
    {/* Bumper and Skirts */}
    <path d="M10,32 L92,32 C92,35 90,38 80,38 L15,38 C12,38 10,35 10,32 Z" fill="#1e293b" />
    
    {/* Interior Background */}
    <path d="M18,9 L78,22 L18,22 Z" fill="#0f172a" />
    
    {/* Actual Human Faces (Photos mapped to windows) */}
    {/* Driver & Front Passenger */}
    <g clipPath="url(#front-win)">
      <path d="M62,15 L66,15 L66,22 L62,22 Z" fill="#1e293b" /> {/* Seat back */}
      
      {/* Front Passenger (Sitting beside driver) */}
      <path d="M64,22 C64,15 67,14 70,14 C73,14 75,16 75,22 Z" fill="#9a3412" /> {/* Body */}
      <circle cx="70" cy="11.5" r="2.8" fill="#fdba74" /> {/* Head */}
      
      {/* Driver (Closest) */}
      <path d="M66,22 C66,16 68,16 71,16 C74,16 76,17 76,22 Z" fill="#f59e0b" /> {/* Driver Body */}
      <circle cx="71" cy="13" r="3" fill="#fed7aa" /> {/* Driver Head */}
      <path d="M68,12 C68,10 74,10 74,12 L76,12 L76,13 L68,13 Z" fill="#1d4ed8" /> {/* Driver Cap */}
      <path d="M74,19 L77,17 L78,20" fill="none" stroke="#fed7aa" strokeWidth="1" /> {/* Arm */}
      <line x1="77" y1="16" x2="77" y2="22" stroke="#0f172a" strokeWidth="2" /> {/* Steering Wheel */}
    </g>

    {/* Middle Passengers (Row 2) */}
    <g clipPath="url(#mid-win)">
      <path d="M43,15 L47,15 L47,22 L43,22 Z" fill="#1e293b" /> {/* Seat back */}
      {/* Passenger 2 (Further back) */}
      <path d="M47,22 C47,16 50,15 54,15 C57,15 58,17 58,22 Z" fill="#701a75" />
      <circle cx="54" cy="12.5" r="2.2" fill="#fcd34d" />
      
      {/* Passenger 1 (Closest) */}
      <path d="M46,22 C46,16 49,17 51,17 C54,17 56,19 56,22 Z" fill="#ec4899" /> {/* Passenger Body */}
      <circle cx="50" cy="14" r="2.8" fill="#fbcfe8" /> {/* Passenger Head */}
      <path d="M50,13.5 L53,13.5" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" /> {/* Sunglasses */}
      <circle cx="54" cy="19" r="1.5" fill="#38bdf8" opacity="0.6" /> {/* Phone glow */}
      <path d="M51,19 L54,19" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" /> {/* Arm holding phone */}
    </g>

    {/* Rear Passengers (Row 3) */}
    <g clipPath="url(#rear-win)">
      <path d="M22,15 L26,15 L26,22 L22,22 Z" fill="#1e293b" /> {/* Seat back */}
      {/* Passenger 4 (Further back) */}
      <path d="M28,22 C28,16 31,15 34,15 C37,15 38,17 38,22 Z" fill="#064e3b" />
      <circle cx="34" cy="12" r="2.2" fill="#6ee7b7" />
      
      {/* Passenger 3 (Closest) */}
      <path d="M26,22 C26,17 28,17 31,17 C34,17 35,18 35,22 Z" fill="#10b981" /> {/* Passenger Body */}
      <circle cx="31" cy="13.5" r="2.8" fill="#fcd34d" /> {/* Passenger Head */}
      <path d="M28,13.5 C28,10 34,10 34,13.5 Z" fill="#0f172a" /> {/* Stylish Hair / Beanie */}
      <path d="M31,19 C33,19 36,20 37,21" stroke="#fcd34d" strokeWidth="1" fill="none" /> {/* Resting arm */}
    </g>

    {/* Windows Tint & Glare */}
    {/* Windshield (Front) */}
    <path d="M62,9 L78,22 L62,22 Z" fill="#7dd3fc" opacity="0.15" stroke="#0A1E3F" strokeWidth="0.5" />
    <path d="M64,10 L72,18 L73,18 L65,10 Z" fill="#ffffff" opacity="0.5" />

    {/* Middle Window */}
    <path d="M42,9 L59,9 L59,22 L42,22 Z" fill="#7dd3fc" opacity="0.15" stroke="#0A1E3F" strokeWidth="0.5" />
    <path d="M44,10 L52,18 L53,18 L45,10 Z" fill="#ffffff" opacity="0.5" />

    {/* Rear window */}
    <path d="M20,11 L39,9 L39,22 L20,22 Z" fill="#7dd3fc" opacity="0.15" stroke="#0A1E3F" strokeWidth="0.5" />
    <path d="M23,12 L31,19 L32,19 L24,12 Z" fill="#ffffff" opacity="0.5" />

    {/* Roof Rack & Cargo Boxes */}
    <line x1="20" y1="6" x2="55" y2="6" stroke="#94a3b8" strokeWidth="1.5" />
    
    {/* Large Cargo Box */}
    <path d="M22,1 L45,1 L45,5 L22,5 Z" fill="#16a34a" rx="1.5" />
    <line x1="28" y1="1" x2="28" y2="5" stroke="#14532d" strokeWidth="1.5" />
    <line x1="39" y1="1" x2="39" y2="5" stroke="#14532d" strokeWidth="1.5" />
    
    {/* Small Additional Parcel */}
    <path d="M46,2 L52,2 L52,5 L46,5 Z" fill="#3b82f6" rx="1" />
    <line x1="49" y1="2" x2="49" y2="5" stroke="#1d4ed8" strokeWidth="1" />

    {/* Lights */}
    <path d="M10,20 L12,25 L10,28 L8,25 Z" fill="#ef4444" /> {/* Red Taillight */}
    <path d="M85,25 L92,25 L90,28 L85,28 Z" fill="#fbbf24" opacity="0.9"/> {/* Yellow/White Headlight */}
    <path d="M92,25 L110,32 L90,32 Z" fill="url(#light-beam)" opacity="0.4" /> {/* Headlight Beam */}
    
    {/* Wheels */}
    <circle cx="28" cy="36" r="5.5" fill="#0f172a" />
    <circle cx="28" cy="36" r="2.5" fill="#94a3b8" />
    <circle cx="72" cy="36" r="5.5" fill="#0f172a" />
    <circle cx="72" cy="36" r="2.5" fill="#94a3b8" />

    <defs>
      <clipPath id="rear-win">
         <path d="M20,11 L39,9 L39,22 L20,22 Z" />
      </clipPath>
      <clipPath id="mid-win">
         <path d="M42,9 L59,9 L59,22 L42,22 Z" />
      </clipPath>
      <clipPath id="front-win">
         <path d="M62,9 L78,22 L62,22 Z" />
      </clipPath>
      <linearGradient id="car-gradient" x1="12" y1="8" x2="90" y2="38">
        <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </linearGradient>
      <linearGradient id="light-beam" x1="92" y1="25" x2="110" y2="32">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="rgba(254,240,138,0)" />
      </linearGradient>
    </defs>
  </svg>
);
