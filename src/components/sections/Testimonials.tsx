'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useInView } from '@/hooks/useInView';

const Testimonials = () => {
  const [displayTestimonials, setDisplayTestimonials] = useState(testimonials.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    // Get random testimonials on mount
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
    setDisplayTestimonials(shuffled.slice(0, 6));
  }, []);

  // Update dots based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      
      // Calculate progress through all testimonials
      const maxScroll = scrollWidth - containerWidth;
      const scrollProgress = scrollLeft / maxScroll;
      
      // Calculate which testimonial is most visible
      const newIndex = Math.round(scrollProgress * (displayTestimonials.length - 1));
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < displayTestimonials.length) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, displayTestimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12 will-animate ${
          sectionInView ? 'animate-fade-up' : 'opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            לקוחות ממליצים
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            מה אומרים הלקוחות שלי
          </p>
        </div>
        
        <div className="relative">
          {/* Mobile: Swipeable Carousel */}
          <div className="md:hidden">
            {/* Testimonials Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
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
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
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
            
            {/* Dots Indicator - Visual Only */}
            <div className="flex justify-center gap-2 mt-6">
              {displayTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 pointer-events-none ${
                    index === currentIndex 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Swipe Hint */}
            <p className="text-center text-xs text-gray-400 mt-2">
              החלק לצדדים לעוד המלצות
            </p>
          </div>

          {/* Desktop: Grid Layout */}
          <div ref={gridRef} className="hidden md:block max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`p-6 rounded-2xl shadow-lg will-animate ${
                    index < 3 
                      ? 'bg-gradient-to-br from-blue-50 to-white' 
                      : 'bg-gradient-to-br from-orange-50 to-white'
                  } ${
                    gridInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Rating Stars */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-4 italic text-base line-clamp-4">
                    ״{testimonial.text}״
                  </p>

                  {/* Client Info */}
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

      <style jsx>{`
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;