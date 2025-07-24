import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full max-w-4xl mx-auto py-12 px-4 mt-16 border-t border-white/10">
      <div className="flex flex-col items-center gap-8">
        <nav className="flex items-center gap-6 text-gray-300">
          <button onClick={() => scrollToSection('about')} className="hover:text-pink-300 transition-colors duration-300">About</button>
          <span className="text-gray-600">|</span>
          <button onClick={() => scrollToSection('faq')} className="hover:text-pink-300 transition-colors duration-300">FAQ</button>
          <span className="text-gray-600">|</span>
           <a href="#" className="hover:text-pink-300 transition-colors duration-300">Privacy Policy</a>
        </nav>
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SoulSeer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
