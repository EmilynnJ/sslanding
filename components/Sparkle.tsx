import React from 'react';

interface SparkleProps {
  top: string;
  left: string;
  delay: string;
  size: string;
  color: 'pink' | 'gold';
}

const Sparkle: React.FC<SparkleProps> = ({ top, left, delay, size, color }) => {
  const style = {
    top,
    left,
    animationDelay: delay,
  };

  const colorClasses = {
    pink: 'bg-pink-400 shadow-pink-400',
    gold: 'bg-amber-300 shadow-amber-300',
  };

  return (
    <div
      className={`absolute ${size} ${colorClasses[color]} rounded-full animate-sparkle`}
      style={style}
    ></div>
  );
};

export default Sparkle;