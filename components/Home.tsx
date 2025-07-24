import React from 'react';
import Hero from './Hero';
import Features from './Features';
import VideoSection from './VideoSection';
import About from './About';
import FAQ from './FAQ';
import FadeInSection from './FadeInSection';

const Home: React.FC = () => {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
      <FadeInSection>
        <div id="hero">
          <Hero />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="features">
          <Features />
        </div>
      </FadeInSection>
      <FadeInSection>
        <VideoSection />
      </FadeInSection>
      <FadeInSection>
        <div id="about">
          <About />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="faq">
          <FAQ />
        </div>
      </FadeInSection>
    </main>
  );
};

export default Home;
