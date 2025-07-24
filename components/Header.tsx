import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="py-8 w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
      <h1 
        className="font-title text-6xl md:text-8xl text-center text-amber-200 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(253, 230, 138, 0.4), 0 0 20px rgba(252, 211, 77, 0.4)' }}
        onClick={() => scrollToSection('hero')}
        aria-label="SoulSeer Home"
      >
        SoulSeer
      </h1>
      <nav className="hidden md:flex items-center justify-center gap-2 md:gap-4 bg-black/30 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-lg">
        <button onClick={() => scrollToSection('hero')} className="px-4 py-2 text-base font-medium transition-all duration-300 rounded-full text-gray-300 hover:text-white">Home</button>
        <button onClick={() => scrollToSection('features')} className="px-4 py-2 text-base font-medium transition-all duration-300 rounded-full text-gray-300 hover:text-white">Features</button>
        <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-base font-medium transition-all duration-300 rounded-full text-gray-300 hover:text-white">About</button>
        <button onClick={() => scrollToSection('faq')} className="px-4 py-2 text-base font-medium transition-all duration-300 rounded-full text-gray-300 hover:text-white">FAQ</button>
      </nav>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle navigation menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-4">
            <button onClick={() => scrollToSection('hero')} className="text-white py-2">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-white py-2">Features</button>
            <button onClick={() => scrollToSection('about')} className="text-white py-2">About</button>
            <button onClick={() => scrollToSection('faq')} className="text-white py-2">FAQ</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
