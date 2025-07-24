import React from 'react';

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c-4.42 0-4.903.018-6.62.092C4.053 2.164 3.16 2.502 2.502 3.16c-.658.658-.997 1.55-.928 3.18C1.503 7.41 1.485 7.893 1.485 12.315c0 4.42.018 4.903.092 6.62.069 1.63.4 2.523 1.058 3.18.658.658 1.55.997 3.18.928 1.717.074 2.2.092 6.62.092 4.42 0 4.903-.018 6.62-.092 1.63-.069 2.523-.4 3.18-1.058.658-.658.997-1.55.928-3.18.074-1.717.092-2.2.092-6.62s-.018-4.903-.092-6.62c-.069-1.63-.4-2.523-1.058-3.18C20.84.502 19.95.164 18.32.092 16.602.018 16.12 0 11.695 0h.62zM12 1.843c4.325 0 4.775.016 6.445.093 1.48.065 2.195.34 2.658.803.463.463.738 1.178.803 2.658.077 1.67.093 2.12.093 6.445s-.016 4.775-.093 6.445c-.065 1.48-.34 2.195-.803 2.658-.463.463-1.178.738-2.658.803-1.67.077-2.12.093-6.445.093s-4.775-.016-6.445-.093c-1.48-.065-2.195-.34-2.658-.803-.463-.463-.738-1.178-.803-2.658C2.12 16.775 2.104 16.325 2.104 12s.016-4.775.093-6.445c.065-1.48.34-2.195.803-2.658.463-.463 1.178-.738 2.658-.803C7.225 2.12 7.675 2.104 12 2.104zm0 4.355A5.8 5.8 0 1012 17.8a5.8 5.8 0 000-11.445zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
  </svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.29 1.98-2.08z" />
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const CrystalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter id="crystalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#crystalGlow)">
      <path d="M50 2L60 30L90 35L70 55L75 85L50 70L25 85L30 55L10 35L40 30L50 2Z" fill="rgba(244, 114, 182, 0.7)" stroke="rgba(251, 191, 219, 0.6)" strokeWidth="1.5"/>
      <path d="M50 2V70" stroke="rgba(251, 191, 219, 0.5)" strokeWidth="1"/>
      <path d="M10 35L50 70L90 35" stroke="rgba(251, 191, 219, 0.5)" strokeWidth="1"/>
      <path d="M25 85L50 30L75 85" stroke="rgba(251, 191, 219, 0.5)" strokeWidth="1"/>
    </g>
  </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.32 1.011l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.32-1.011l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);