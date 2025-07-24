import React from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}> = ({ onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-base font-medium transition-all duration-300 rounded-full relative ${
      isActive
        ? 'text-white'
        : 'text-gray-300 hover:text-white'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {children}
    {isActive && <span className="absolute inset-0 border-2 border-pink-400 rounded-full animate-pulse shadow-[0_0_12px_2px_rgba(244,114,182,0.5)]"></span>}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="py-8 w-full max-w-4xl mx-auto flex flex-col items-center gap-6">
      <h1 
        className="font-title text-6xl md:text-8xl text-center text-amber-200 cursor-pointer"
        style={{ textShadow: '0 0 8px rgba(253, 230, 138, 0.4), 0 0 20px rgba(252, 211, 77, 0.4)' }}
        onClick={() => onNavigate('home')}
        aria-label="SoulSeer Home"
      >
        SoulSeer
      </h1>
       <nav className="flex items-center justify-center gap-2 md:gap-4 bg-black/30 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-lg">
          <NavLink onClick={() => onNavigate('home')} isActive={currentPage === 'home'}>Home</NavLink>
          <NavLink onClick={() => onNavigate('about')} isActive={currentPage === 'about'}>About</NavLink>
          <NavLink onClick={() => onNavigate('faq')} isActive={currentPage === 'faq'}>FAQ</NavLink>
        </nav>
    </header>
  );
};

export default Header;