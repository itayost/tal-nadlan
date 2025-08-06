'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const Hero = () => {
  // תמונות לרקע
  const backgroundImages = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg'
  ];

  // State for managing image transitions
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload all images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const promises = backgroundImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        await Promise.all(promises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setImagesPreloaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // Auto-switch images every 6 seconds with smooth crossfade
  useEffect(() => {
    if (!imagesPreloaded) return;
    
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [backgroundImages.length, imagesPreloaded]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Images Container with Smooth Crossfade */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={`bg-image-${index}`}
            className={`absolute inset-0 transition-opacity ${
              index === activeImageIndex 
                ? 'opacity-100 z-[2]' 
                : 'opacity-0 z-[1]'
            }`}
            style={{
              transitionDuration: '2500ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Image with continuous Ken Burns effect */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover gpu-accelerated animate-ken-burns-continuous"
                style={{
                  animationDelay: `${index * 2}s`
                }}
              />
            </div>
          </div>
        ))}
        
        {/* Dark overlay - constant layer above all images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10"></div>
      </div>

      {/* Additional gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Company Logo - Using global animation classes */}
          <div className={`mb-8 flex justify-center will-animate ${
            isLoaded ? 'animate-zoom-in' : 'opacity-0'
          }`}>
            <div className="relative">
              <img 
                src={agentInfo.logo}
                alt={agentInfo.name}
                className="h-48 md:h-56 lg:h-64 w-auto brightness-125 contrast-125 animate-float"
                style={{ 
                  filter: 'brightness(1.3) contrast(1.1) drop-shadow(0 0 40px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.5))'
                }}
              />
              <div className="absolute inset-0 bg-white/10 blur-3xl -z-10 animate-pulse-subtle"></div>
            </div>
          </div>
          
          {/* Title - Using global fade-up animation */}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-2xl will-animate ${
            isLoaded ? 'animate-fade-up animation-delay-200' : 'opacity-0'
          }`}>
            {agentInfo.title}
          </h1>
          
          {/* Tagline - Using global fade-up animation with delay */}
          <p className={`text-lg md:text-xl text-white/90 mb-12 max-w-xl mx-auto will-animate ${
            isLoaded ? 'animate-fade-up animation-delay-300' : 'opacity-0'
          }`}>
            מעל 10 שנות ניסיון | רמת גן, גבעתיים, תל אביב
          </p>
          
          {/* CTA Buttons - Using global scale-in animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center will-animate ${
            isLoaded ? 'animate-scale-in animation-delay-500' : 'opacity-0'
          }`}>
            <a
              href={`tel:${agentInfo.phone}`}
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1"
            >
              <Phone className="w-5 h-5 ml-2" />
              {agentInfo.phoneDisplay}
            </a>
            <a
              href={agentInfo.social.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all font-bold text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              קטלוג נכסים
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Fixed positioning at bottom of hero */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70 drop-shadow-lg" />
      </div>

      <style jsx>{`
        @keyframes ken-burns-continuous {
          0% { 
            transform: scale(1) translateZ(0);
          }
          50% {
            transform: scale(1.05) translateZ(0);
          }
          100% { 
            transform: scale(1) translateZ(0);
          }
        }
        
        .animate-ken-burns-continuous {
          animation: ken-burns-continuous 18s ease-in-out infinite;
          animation-fill-mode: both;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Hero;