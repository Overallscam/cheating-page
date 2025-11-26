import React, { useState } from 'react';
import HeroText from './components/HeroText';
import ActionArea from './components/ActionArea';

const App: React.FC = () => {
  const [apologized, setApologized] = useState(false);
  const [bgClass, setBgClass] = useState('bg-slate-950');

  const handleSorryClick = () => {
    setApologized(true);
    // Trigger visual change
    setBgClass('bg-green-950');
  };

  const handleReset = () => {
    setApologized(false);
    setBgClass('bg-slate-950');
  };

  return (
    <main 
      className={`
        relative w-full min-h-screen flex flex-col items-center justify-center 
        overflow-hidden transition-colors duration-1000 ease-in-out
        ${bgClass}
      `}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px] transition-opacity duration-1000 ${apologized ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px] transition-opacity duration-1000 ${apologized ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* Success Background Elements */}
        <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80%] rounded-full bg-green-500/10 blur-[150px] transition-opacity duration-1000 ${apologized ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>

      {/* Content Container */}
      <div className="z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]">
        
        {!apologized ? (
          <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
            <HeroText text="Pakda gya to gaand maregi lala" />
            
            <p className="mt-8 text-slate-400 text-lg md:text-xl font-medium tracking-wide text-center max-w-2xl">
              Warning: Serious consequences detected. Immediate apology recommended.
            </p>

            <ActionArea 
              label="sorry yaar" 
              onClick={handleSorryClick} 
              href="https://drive.google.com/drive/folders/1fsM--O8nkNnyf2365BZsnELEPrqHTzbS?usp=sharing"
            />
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700 flex flex-col items-center text-center">
             <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-8">
               Maaf Kiya!
             </h2>
             <p className="text-2xl text-slate-300 mb-12">
               Okay bhai, next time dhyan rakhna.
             </p>
             <button 
                onClick={handleReset}
                className="text-slate-500 hover:text-white underline underline-offset-4 transition-colors"
             >
                Reset Scene
             </button>
          </div>
        )}

      </div>
      
      <footer className="absolute bottom-4 text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Meme Corp. All rights reserved.
      </footer>
    </main>
  );
};

export default App;