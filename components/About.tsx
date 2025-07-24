import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import process from "process";

const About: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setResponseMessage('Please fill out all fields to send your message.');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setResponseMessage('');
    setIsError(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const prompt = `A user has sent a message via the SoulSeer contact form. 
        Name: ${formState.name}
        Email: ${formState.email}
        Message: "${formState.message}"
        Generate a warm, mystical, and reassuring auto-reply confirming their message has been received and will be answered with care shortly. Address them by name.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setResponseMessage(response.text);
      setFormState({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("API Error:", error);
      setResponseMessage('There was a disturbance in the ether. Please try sending your message again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in py-10 px-4">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-12" style={{ textShadow: '0 0 12px rgba(244, 114, 182, 0.7), 0 0 25px rgba(244, 114, 182, 0.5)' }}>
        About the Founder
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-24 w-full">
        <div className="md:col-span-1 flex justify-center">
          <img 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2024/07/soulseer_bg_5.jpg" 
            alt="Founder of SoulSeer"
            className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-pink-400/30 shadow-2xl shadow-pink-500/40"
          />
        </div>
        <div className="md:col-span-2 text-left md:text-left">
          <p className="text-lg text-rose-100 mb-4 leading-relaxed">
            I created SoulSeer from a deep-seated belief that spiritual guidance should be accessible, ethical, and above all, empowering. My journey began not as a founder, but as a seeker, navigating a world of confusing and often exploitative spiritual services.
          </p>
          <p className="text-base text-rose-200/90 leading-relaxed">
            I envisioned a sanctuary—a platform led by trusted, heart-centered readers committed to helping you connect with your own intuition. SoulSeer is that vision brought to life. It's a space built on integrity, transparency, and the simple mission of helping you find your own light.
          </p>
        </div>
      </div>

      <h3 className="text-3xl font-serif font-semibold text-white mb-8">Get in Touch</h3>
      <div className="w-full max-w-lg mx-auto bg-black/20 border border-white/20 rounded-xl p-8 shadow-2xl shadow-pink-600/20 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-pink-300 text-sm font-semibold mb-2 text-left">Your Name</label>
            <input 
              type="text" 
              id="name"
              placeholder="Your name"
              value={formState.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-pink-300 text-sm font-semibold mb-2 text-left">Your Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Your email address"
              value={formState.email}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-pink-300 text-sm font-semibold mb-2 text-left">Message</label>
            <textarea 
              id="message"
              rows={5}
              placeholder="How can I help you?"
              value={formState.message}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 disabled:opacity-50"
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-pink-600/30 hover:bg-pink-500 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300 disabled:bg-pink-800 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {isLoading ? 'Sending to the cosmos...' : 'Send Message'}
          </button>
        </form>
        {responseMessage && (
          <p className={`text-sm mt-4 p-4 rounded-lg transition-opacity duration-300 ${isError ? 'bg-red-900/40 text-red-300' : 'bg-green-900/40 text-green-300'}`}>
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default About;