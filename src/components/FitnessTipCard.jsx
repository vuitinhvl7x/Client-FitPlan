import React, { useState, useEffect, useRef } from 'react';

const FitnessTipCard = ({ tips }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const animationStyles = ['rotate', 'fade', 'bounce'];
  const [animationStyle, setAnimationStyle] = useState(animationStyles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStyle(animationStyles[Math.floor(Math.random() * animationStyles.length)]);
      setIsFlipped(true);
      setTimeout(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        setIsFlipped(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [tips.length]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl shadow-lg p-6 text-center text-neutral-200 transition-transform duration-500 transform-style-3d hover:shadow-2xl cursor-pointer ${isFlipped ? 'rotate-y-180' : ''} ${animationStyle}`}
      onClick={handleFlip}
      style={{
        perspective: '800px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60 rounded-2xl"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden">
        <div className="front flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Fitness Tip</h3>
          <p className="text-lg text-neutral-200">{tips[currentTipIndex]}</p>
        </div>
        <div className="back flex flex-col items-center justify-center">
          <p className="text-lg text-neutral-200">{tips[(currentTipIndex + 1) % tips.length]}</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessTipCard;
