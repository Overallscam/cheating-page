import React, { useState } from 'react';
import { ButtonProps } from '../types';

const ActionArea: React.FC<ButtonProps> = ({ label, onClick, disabled, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const commonClasses = `
    relative group
    px-12 py-6 md:px-20 md:py-10
    bg-white text-slate-900
    rounded-full
    font-bold text-2xl md:text-4xl
    transition-all duration-300 ease-out
    transform
    ${isHovered ? 'scale-110 shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)]' : 'scale-100 shadow-xl'}
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-flex justify-center items-center
  `;

  const content = (
    <>
        <span className="relative z-10 flex items-center gap-3">
            {label} 
            <span className="text-3xl md:text-5xl">🙏</span>
        </span>
        
        {/* Button Background Glow Effect */}
        <div className={`
          absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
          opacity-0 group-hover:opacity-20 transition-opacity duration-300
        `}></div>
    </>
  );

  return (
    <div className="mt-12 md:mt-20 flex justify-center items-center">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={commonClasses}
        >
          {content}
        </a>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={commonClasses}
        >
          {content}
        </button>
      )}
    </div>
  );
};

export default ActionArea;