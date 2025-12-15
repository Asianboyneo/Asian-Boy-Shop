import React, { useEffect, useState, useRef } from 'react';
import { HERO_VIDEO_URL } from '../constants';

const BackgroundVideo: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Blur logic: Starts blurring immediately as you scroll.
      // Max blur 40px when you scroll past 100% of the viewport.
      const maxBlur = 40;
      const blur = Math.min(maxBlur, (scrollY / (windowHeight * 0.8)) * maxBlur);
      
      setBlurAmount(blur);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 bg-black">
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-80"
        style={{
          filter: `blur(${blurAmount}px)`,
          transform: 'scale(1.05)', // Prevent white edges during blur
          transition: 'filter 0.1s ease-out'
        }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
    </div>
  );
};

export default BackgroundVideo;
