import React, { useState } from 'react';
import { CrystalIcon } from '../constants';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const submitWaitlist = (email: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve("A mystical energy acknowledges your presence! Thank you for joining the waitlist.");
        } else {
          reject(new Error("Submission failed"));
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }
    
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const responseMessage = await submitWaitlist(email);
      setMessage(responseMessage);
      setEmail('');
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setMessage('A whisper was lost in the cosmos. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center text-center w-full px-4 pt-4 pb-16 md:pb-24">
      <h2 
        className="text-4xl md:text-5xl font-serif font-semibold tracking-wide text-white mb-4"
        style={{ textShadow: '0 0 12px rgba(244, 114, 182, 0.7), 0 0 25px rgba(244, 114, 182, 0.5)' }}
      >
        Ethical. Intuitive. Empowering.
      </h2>
      <p className="text-lg md:text-xl text-rose-100 mb-6 max-w-2xl">
        The new spiritual platform built by readers, for seekers.
      </p>
      <p className="text-base md:text-lg text-rose-200/90 max-w-xl mb-10">
        SoulSeer is a reader-led spiritual guidance platform with real-time chat, call, and video sessions. No corporate greed. Just heart-centered connection.
      </p>
      
      <div className="w-full max-w-md bg-black/20 border border-white/20 rounded-xl p-6 shadow-2xl shadow-pink-500/20 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-pink-300 mb-4">Join the Waitlist</h3>
        <p className="text-gray-300 text-sm mb-6">Be the first to know when SoulSeer goes live.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-pink-600/30 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 whitespace-nowrap disabled:bg-pink-800 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {isLoading ? 'Entering the Stars...' : 'Notify Me'}
          </button>
        </form>
        {message && (
          <p className={`text-sm mt-4 transition-opacity duration-300 ${isError ? 'text-red-400' : 'text-green-300'}`}>
            {message}
          </p>
        )}
         <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>

      <div className="mt-20 animate-float">
        <CrystalIcon className="w-20 h-20" />
      </div>
    </section>
  );
};

export default Hero;
