'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, Trophy } from 'lucide-react';
import { agentInfo } from '@/data/agent';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Different thresholds for mobile vs desktop
  const { ref: sectionRef, isInView: sectionInView } = useInView({ 
    threshold: isMobile ? 0.1 : 0.3,
    rootMargin: isMobile ? '0px' : '-100px'
  });
  const { ref: imageRef, isInView: imageInView } = useInView({ 
    threshold: isMobile ? 0.15 : 0.5,
    rootMargin: isMobile ? '0px' : '-50px'
  });
  const { ref: contentRef, isInView: contentInView } = useInView({ 
    threshold: isMobile ? 0.1 : 0.4,
    rootMargin: isMobile ? '0px' : '-50px'
  });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ 
    threshold: isMobile ? 0.15 : 0.5,
    rootMargin: isMobile ? '0px' : '-30px'
  });

  return (
    <section id="about" className="py-12 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header - Using global fade animation */}
        <div className={`text-center mb-8 md:mb-12 will-animate ${
          sectionInView ? `animate-fade-up ${isMobile ? '' : 'animation-delay-100'}` : 'opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {agentInfo.aboutMe.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Image - Using global fade-right animation */}
          <div 
            ref={imageRef}
            className={`relative order-1 lg:order-1 will-animate ${
              imageInView ? `animate-fade-right ${isMobile ? '' : 'animation-delay-200'}` : 'opacity-0'
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img 
                src={agentInfo.image}
                alt={agentInfo.name}
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600';
                }}
              />
              {/* Badge - Using global zoom-in animation */}
              <div className={`absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-orange-500 to-blue-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl will-animate ${
                imageInView ? `animate-zoom-in ${isMobile ? 'animation-delay-200' : 'animation-delay-500'}` : 'opacity-0'
              }`}>
                <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
                <p className="font-semibold text-sm md:text-base">מתווך מוסמך</p>
              </div>
            </div>
          </div>
          
          {/* Content - Using global fade-left animation */}
          <div 
            ref={contentRef}
            className={`order-2 lg:order-2 mt-8 lg:mt-0 will-animate ${
              contentInView ? `animate-fade-left ${isMobile ? '' : 'animation-delay-200'}` : 'opacity-0'
            }`}
          >
            {/* Name and Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-600 text-center lg:text-right">
              {agentInfo.name}
            </h3>
            <h4 className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 text-center lg:text-right">
              {agentInfo.title}
            </h4>
            
            {/* Bio Text */}
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-center lg:text-right">
              {agentInfo.aboutMe.content}
            </p>
            
            {/* Values - Using stagger animation with global classes */}
            <div 
              ref={valuesRef}
              className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 md:p-6 rounded-xl mb-6"
            >
              <h5 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center">
                הערכים שהבאתי מהספורט:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-animate">
                {agentInfo.values.map((value, index) => (
                  <div 
                    key={index} 
                    className={`text-center p-2 will-animate ${
                      valuesInView ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: isMobile ? `${index * 100}ms` : `${300 + index * 150}ms` }}
                  >
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 animate-pulse-subtle" />
                    <p className="font-semibold text-sm md:text-base text-gray-800">
                      {value.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Qualifications - Using fade-up with stagger */}
            <div className="space-y-2 md:space-y-3 mb-6">
              {agentInfo.qualifications.slice(0, 4).map((qualification, index) => (
                <div 
                  key={index} 
                  className={`flex items-start md:items-center will-animate ${
                    contentInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: isMobile ? `${200 + index * 50}ms` : `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-2 md:ml-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    {qualification}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Areas - Using scale-in animation */}
            <div className={`bg-blue-50 p-4 rounded-xl mb-6 will-animate ${
              contentInView ? `animate-scale-in ${isMobile ? 'animation-delay-300' : 'animation-delay-900'}` : 'opacity-0'
            }`}>
              <p className="text-xs md:text-sm font-semibold text-blue-800 mb-2 text-center">
                אזורי פעילות:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {agentInfo.serviceAreas.map((area, index) => (
                  <span 
                    key={index} 
                    className={`bg-white px-3 py-1 rounded-full text-xs md:text-sm text-gray-700 shadow-sm will-animate ${
                      contentInView ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: isMobile ? `${400 + index * 50}ms` : `${1000 + index * 50}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;