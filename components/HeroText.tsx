import React from 'react';

interface HeroTextProps {
  text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return (
    <div className="relative z-10 p-4">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-center tracking-tighter leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 drop-shadow-2xl filter">
          {text}
        </span>
      </h1>
      <div className="absolute -inset-1 blur-2xl bg-red-600/20 rounded-full z-[-1] animate-pulse-slow"></div>
    </div>
  );
};

export default HeroText;