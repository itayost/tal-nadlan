'use client';

import React from 'react';
import { CheckCircle, Target, Trophy } from 'lucide-react';
import { agentInfo } from '@/data/agent';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.3 });
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-12 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header - Fade in */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {agentInfo.aboutMe.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Image - Slide in from left */}
          <div 
            ref={imageRef}
            className={`relative order-1 lg:order-1 transition-all duration-1000 ${
              imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 lg:-translate-x-20'
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img 
                src={agentInfo.image}
                alt={agentInfo.name}
                className="rounded-2xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600';
                }}
              />
              {/* Badge - Pop in */}
              <div className={`absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-orange-500 to-blue-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl transition-all duration-700 delay-300 ${
                imageInView ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-12'
              }`}>
                <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
                <p className="font-semibold text-sm md:text-base">מתווך מוסמך</p>
              </div>
            </div>
          </div>
          
          {/* Content - Slide in from right */}
          <div 
            ref={contentRef}
            className={`order-2 lg:order-2 mt-8 lg:mt-0 transition-all duration-1000 ${
              contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 lg:translate-x-20'
            }`}
          >
            {/* Name and Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-600 text-center lg:text-right animate-text-gradient">
              {agentInfo.name}
            </h3>
            <h4 className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 text-center lg:text-right">
              {agentInfo.title}
            </h4>
            
            {/* Bio Text */}
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-center lg:text-right">
              {agentInfo.aboutMe.content}
            </p>
            
            {/* Qualifications - Fade in one by one */}
            <div className="space-y-2 md:space-y-3 mb-6">
              {agentInfo.qualifications.slice(0, 4).map((qualification, index) => (
                <div 
                  key={index} 
                  className={`flex items-start md:items-center transition-all duration-500 ${
                    contentInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: contentInView ? `${600 + index * 100}ms` : '0ms' }}
                >
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-2 md:ml-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    {qualification}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className={`bg-blue-50 p-4 rounded-xl mb-6 transition-all duration-700 delay-500 ${
              contentInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <p className="text-xs md:text-sm font-semibold text-blue-800 mb-2 text-center">
                אזורי פעילות:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {agentInfo.serviceAreas.map((area, index) => (
                  <span 
                    key={index} 
                    className={`bg-white px-3 py-1 rounded-full text-xs md:text-sm text-gray-700 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 ${
                      contentInView ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: contentInView ? `${800 + index * 50}ms` : '0ms' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 3s ease infinite;
        }
        
        .animate-pulse-icon {
          animation: pulse-icon 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;