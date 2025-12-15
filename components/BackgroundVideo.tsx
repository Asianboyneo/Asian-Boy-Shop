import React, { useEffect, useState, useRef } from 'react';
import { HERO_VIDEO_URL } from '../constants';

const BackgroundVideo: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (requestRef.current) return;

      requestRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate blur: starts at 0, increases as you scroll down
        // Max blur of 20px reached when scrolling 1 window height
        const maxBlur = 20;
        const calculatedBlur = Math.min(maxBlur, (scrollY / windowHeight) * maxBlur);
        
        setBlurAmount(calculatedBlur);
        requestRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 bg-black">
      <video
        key={HERO_VIDEO_URL}
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        style={{ 
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.1s linear',
          willChange: 'filter'
        }}
      />
      {/* Light overlay to ensure text is readable but video is clearly visible */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
};

export default BackgroundVideo;