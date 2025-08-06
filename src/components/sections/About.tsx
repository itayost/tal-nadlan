'use client';

import React from 'react';
import { CheckCircle, Target, Trophy } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header - Mobile Optimized */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-gray-800">
          {agentInfo.aboutMe.title}
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          מהמגרש לעולם הנדל״ן 🏀🏡
        </p>
        
        {/* Mobile: Stack vertically | Desktop: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Image - Full width on mobile */}
          <div className="relative order-1 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img 
                src={agentInfo.image}
                alt={agentInfo.name}
                className="rounded-2xl shadow-xl w-full"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600';
                }}
              />
              {/* Badge - Adjusted for mobile */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-orange-500 to-blue-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
                <p className="font-semibold text-sm md:text-base">מתווך מוסמך</p>
              </div>
            </div>
          </div>
          
          {/* Content - Mobile Optimized */}
          <div className="order-2 lg:order-2 mt-8 lg:mt-0">
            {/* Name and Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-600 text-center lg:text-right">
              {agentInfo.name}
            </h3>
            <h4 className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 text-center lg:text-right">
              {agentInfo.title}
            </h4>
            
            {/* Bio Text - Responsive size */}
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-center lg:text-right">
              {agentInfo.aboutMe.content}
            </p>
            
            {/* Values from Sports - Mobile Optimized */}
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 md:p-6 rounded-xl mb-6">
              <h5 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center">
                הערכים שהבאתי מהספורט:
              </h5>
              {/* Mobile: Single column | Tablet/Desktop: 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {agentInfo.values.map((value, index) => (
                  <div key={index} className="text-center p-2">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
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
            
            {/* Qualifications - Mobile Friendly */}
            <div className="space-y-2 md:space-y-3 mb-6">
              {agentInfo.qualifications.slice(0, 4).map((qualification, index) => (
                <div key={index} className="flex items-start md:items-center">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-2 md:ml-3 flex-shrink-0 mt-0.5 md:mt-0" />
                  <span className="text-sm md:text-base text-gray-700">
                    {qualification}
                  </span>
                </div>
              ))}
            </div>

            {/* Service Areas - Mobile Optimized */}
            <div className="bg-blue-50 p-4 rounded-xl mb-6">
              <p className="text-xs md:text-sm font-semibold text-blue-800 mb-2 text-center">
                אזורי פעילות:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {agentInfo.serviceAreas.map((area, index) => (
                  <span 
                    key={index} 
                    className="bg-white px-3 py-1 rounded-full text-xs md:text-sm text-gray-700 shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote - Mobile Friendly */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 md:p-6 rounded-xl text-white">
              <p className="font-semibold text-base md:text-lg text-center">
                ״{agentInfo.quote}״
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;