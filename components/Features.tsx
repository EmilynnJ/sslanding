import React from 'react';
import { HeartIcon, ShieldIcon, StarIcon } from '../constants';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
    <div className="bg-black/20 border border-white/20 rounded-2xl p-6 text-center flex flex-col items-center backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-pink-800/20 hover:shadow-pink-600/30">
        <div className="mb-5 text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.7)]">{icon}</div>
        <h3 className="text-xl font-serif font-semibold text-white mb-3">{title}</h3>
        <p className="text-rose-200/90 text-sm leading-relaxed">{children}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4">
            <h2 
                className="text-3xl md:text-4xl font-serif font-semibold text-center text-white mb-12"
                style={{ textShadow: '0 0 10px rgba(225, 173, 255, 0.3), 0 0 20px rgba(244, 114, 182, 0.3)' }}
            >
                A Platform with Integrity
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard icon={<HeartIcon className="w-12 h-12" />} title="Ethical & Vetted Readers">
                    Our readers are chosen for their authenticity and commitment to ethical practices. No scripts, no up-selling—just genuine connection.
                </FeatureCard>
                <FeatureCard icon={<ShieldIcon className="w-12 h-12" />} title="Private & Secure">
                    Your journey is your own. All sessions are confidential with end-to-end encryption, ensuring your data remains private.
                </FeatureCard>
                <FeatureCard icon={<StarIcon className="w-12 h-12" />} title="Empowering Your Intuition">
                    We believe in guidance, not dependency. Our tools and readers help you connect with your own inner wisdom for lasting growth.
                </FeatureCard>
            </div>
        </section>
    );
};

export default Features;