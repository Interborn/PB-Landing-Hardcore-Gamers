'use client';

import React, { useState, useEffect, useRef } from 'react';

const LandingOfferings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(progress);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const offerings = [
    { 
      title: 'Buy, Sell, Earn', 
      description: 'Turn in-game achievements into real value—level up in-game and in real life.',
      bgImage: '',
    },
    { 
      title: 'Security & Trust', 
      description: 'Trade with confidence knowing your assets are secure from fraud, protected by our TradeSafe escrow system.',
      bgImage: '',
    },
    { 
      title: 'Gamer Community', 
      description: "Player Bay is a community, not just a platform. Share tips, discuss strategies, and shape the future of gaming with your feedback." 
    },
    { 
      title: 'Digital Ownership', 
      description: 'Take full control of your game assets. Manage, trade, and profit while keeping your hard-earned achievements safe.',
      bgImage: '',
    }
  ];

  const startProgressAnimation = () => {
    startTimeRef.current = null;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const animateProgress = (timestamp: DOMHighResTimeStamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsedTime = timestamp - (startTimeRef.current ?? timestamp);
      const newProgress = Math.min((elapsedTime / 7000) * 100, 100);

      setProgress(newProgress);
      progressRef.current = newProgress;

      if (newProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(animateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateProgress);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % offerings.length);
      setProgress(0);
      startProgressAnimation();
    }, 7000);
  };

  const handleDivClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startProgressAnimation();
  };

  useEffect(() => {
    startProgressAnimation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className="flex w-full h-full justify-center">
      <div className="max-w-[68rem] mt-16 mb-36">
        <div className="flex flex-col gap-8 items-center">
          <h2 className='text-[34px] font-bold'>Why Choose Player Bay?</h2>
          <p className='text-[20px] text-justify mt-6'>
            We wanted to create a platform for serious gamers who need a secure place to trade rare and valuable items. Player Bay is built for high-stakes trades and rewards those who play hard. Here is what you get with Player Bay:
          </p>

          <div className="flex w-full gap-8 mt-12">
            {offerings.map((offering, index) => (
              <div
                key={index}
                onClick={() => handleDivClick(index)} // Handle click
                className={`relative h-[22rem] rounded-md outline transition-all duration-300 ease-in-out overflow-hidden flex flex-col-reverse ${
                  activeIndex === index
                    ? 'w-[55%] outline-blue-500 p-4'
                    : 'w-[15%] outline-white items-center hover:cursor-pointer'
                }`}
              >
                <h3
                    className={`text-[26px] transition-all duration-300 ease-in-out w-full ${
                        activeIndex === index
                            ? ''
                            : '-rotate-90 -translate-y-14'
                }`}>
                    {offering.title}
                </h3>
                <div 
                  className={`transition-all duration-300 ease-in-out w-full h-[2px] bg-white mt-4 ${
                    activeIndex === index
                        ? 'duration-300 delay-200 opacity-100'
                        : 'duration-100 opacity-0'
                }`}></div>
                <p 
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === index
                        ? 'duration-300 delay-200 opacity-100'
                        : 'duration-100 opacity-0'
                }`}>
                    {offering.description}
                </p>

                {/* Progress bar at the bottom of the active card */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 rounded-b-md scale-x-[0.9995]">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingOfferings;