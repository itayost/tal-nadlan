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

  // State for current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-switch images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Images Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Company Logo - Bigger and Brighter */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={agentInfo.logo}
                alt={agentInfo.name}
                className="h-48 md:h-56 lg:h-64 w-auto brightness-125 contrast-125"
                style={{ 
                  filter: 'brightness(1.3) contrast(1.1) drop-shadow(0 0 40px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.5))'
                }}
              />
              {/* Optional: Add a subtle white glow background */}
              <div className="absolute inset-0 bg-white/10 blur-3xl -z-10"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
            {agentInfo.title}
          </h1>
          
          {/* Simple tagline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-xl mx-auto">
            מעל 10 שנות ניסיון | רמת גן, גבעתיים, תל אביב
          </p>
          
          {/* Simplified CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${agentInfo.phone}`}
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5 ml-2" />
              {agentInfo.phoneDisplay}
            </a>
            <a
              href={agentInfo.social.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all font-bold text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              קטלוג נכסים
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;