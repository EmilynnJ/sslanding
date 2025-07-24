import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sparkle from './components/Sparkle';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white relative isolate">
      {/* Sparkles in the background */}
      <Sparkle top="10%" left="5%" delay="0s" size="w-2 h-2" color="pink" />
      <Sparkle top="20%" left="90%" delay="1s" size="w-1.5 h-1.5" color="gold" />
      <Sparkle top="50%" left="15%" delay="2s" size="w-1 h-1" color="pink" />
      <Sparkle top="80%" left="80%" delay="0.5s" size="w-2.5 h-2.5" color="gold" />
      <Sparkle top="95%" left="10%" delay="1.5s" size="w-1 h-1" color="pink" />
      <Sparkle top="60%" left="70%" delay="2.5s" size="w-1.5 h-1.5" color="gold" />

      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
