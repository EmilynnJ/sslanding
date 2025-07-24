import React from 'react';
import Hero from './Hero';
import Features from './Features';
import VideoSection from './VideoSection';

const Home: React.FC = () => {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in">
      <Hero />
      <Features />
      <VideoSection />
    </main>
  );
};

export default Home;
