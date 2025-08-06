'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const [displayTestimonials, setDisplayTestimonials] = useState(testimonials.slice(0, 6));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get random testimonials
    const getRandomTestimonials = () => {
      const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6);
    };

    setDisplayTestimonials(getRandomTestimonials());
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4 text-gray-800">
          לקוחות ממליצים
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          מה אומרים הלקוחות שלי
        </p>
        
        {/* Mobile: Horizontal Scroll / Desktop: Grid */}
        <div className="relative">
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-[85vw] snap-center"
                >
                  <div className={`h-full p-6 rounded-2xl shadow-lg ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-50 to-white' 
                      : 'bg-gradient-to-br from-orange-50 to-white'
                  }`}>
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 italic text-center leading-relaxed">
                      ״{testimonial.text}״
                    </p>

                    {/* Client Info */}
                    <div className="border-t pt-4 text-center">
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.location} | {testimonial.type}
                      </p>
                      {testimonial.propertyType && (
                        <p className="text-xs text-gray-400 mt-1">
                          {testimonial.propertyType}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <span>→</span>
                <span>החלק לצדדים לעוד המלצות</span>
                <span>←</span>
              </p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block max-w-7xl mx-auto">
            {/* First row - 3 testimonials */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {displayTestimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 italic text-base line-clamp-4 group-hover:line-clamp-none transition-all">
                    ״{testimonial.text}״
                  </p>

                  <div className="border-t pt-3">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location} | {testimonial.type}
                    </p>
                    {testimonial.propertyType && (
                      <p className="text-xs text-gray-400 mt-1">
                        {testimonial.propertyType}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 3 testimonials */}
            <div className="grid lg:grid-cols-3 gap-6">
              {displayTestimonials.slice(3, 6).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 italic text-base line-clamp-4 group-hover:line-clamp-none transition-all">
                    ״{testimonial.text}״
                  </p>

                  <div className="border-t pt-3">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location} | {testimonial.type}
                    </p>
                    {testimonial.propertyType && (
                      <p className="text-xs text-gray-400 mt-1">
                        {testimonial.propertyType}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;