import React from 'react';

const PlayIcon = () => (
  <svg className="w-16 h-16 md:w-24 md:h-24 text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VideoSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 md:py-24 px-4">
      <h2 
        className="text-3xl md:text-4xl font-serif font-semibold text-center text-white mb-8"
        style={{ textShadow: '0 0 10px rgba(225, 173, 255, 0.3), 0 0 20px rgba(244, 114, 182, 0.3)' }}
      >
        Meet the Readers
      </h2>
      <div 
        className="group aspect-video w-full bg-cover bg-center rounded-xl overflow-hidden relative border-2 border-white/10 shadow-2xl shadow-pink-700/30 cursor-pointer"
        style={{ backgroundImage: "url('https://storage.googleapis.com/pr-newsroom-wp/1/2024/07/soulseer_bg_3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
            <PlayIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;