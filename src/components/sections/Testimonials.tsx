'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, Hand } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { useInView } from '@/hooks/useInView';

const Testimonials = () => {
  const [displayTestimonials, setDisplayTestimonials] = useState(testimonials.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    // Get random testimonials
    const getRandomTestimonials = () => {
      const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6);
    };

    setDisplayTestimonials(getRandomTestimonials());
  }, []);

  // Hide swipe hint after first interaction
  const handleScroll = () => {
    if (showSwipeHint) {
      setShowSwipeHint(false);
    }
    
    // Update current index based on scroll position
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = scrollWidth / displayTestimonials.length;
      
      // For RTL, calculate index properly
      // In RTL, scrollLeft might be negative or count from max
      const maxScroll = scrollWidth - clientWidth;
      const normalizedScroll = Math.abs(scrollLeft);
      const newIndex = Math.min(
        Math.round(normalizedScroll / cardWidth),
        displayTestimonials.length - 1
      );
      
      setCurrentIndex(newIndex);
    }
  };

  // Auto-hide swipe hint after a few seconds
  useEffect(() => {
    if (showSwipeHint && window.innerWidth < 768) {
      const timer = setTimeout(() => {
        setShowSwipeHint(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSwipeHint]);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header with fade animation */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            לקוחות ממליצים
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            מה אומרים הלקוחות שלי
          </p>
        </div>
        
        <div className="relative">
          {/* Mobile: Horizontal Carousel with Swipe */}
          <div className="md:hidden relative">
            {/* Swipe Hint */}
            {showSwipeHint && (
              <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                <div className="bg-black/70 text-white px-4 py-3 rounded-full flex items-center gap-2 animate-pulse">
                  <Hand className="w-5 h-5 rotate-90" />
                  <span className="text-sm font-medium">החליקו לצפייה בעוד המלצות</span>
                </div>
              </div>
            )}

            {/* Carousel Container */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              onTouchStart={() => setShowSwipeHint(false)}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' // Better iOS scrolling
              }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-none w-[85vw] snap-center transition-all duration-500 ${
                    Math.abs(index - currentIndex) <= 1 ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div className={`h-full p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-50 to-white' 
                      : 'bg-gradient-to-br from-orange-50 to-white'
                  }`}>
                    {/* Rating Stars with animation */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current animate-star-pop" 
                          style={{ animationDelay: `${i * 100}ms` }}
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
            
            {/* Simple Progress Indicator (optional - very subtle) */}
            <div className="flex justify-center gap-1 mt-4">
              <span className="text-xs text-gray-400">
                {currentIndex + 1} / {displayTestimonials.length}
              </span>
            </div>
          </div>

          {/* Desktop Grid with stagger animation */}
          <div ref={gridRef} className="hidden md:block max-w-7xl mx-auto">
            {/* First row - 3 testimonials */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {displayTestimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: gridInView ? `${index * 150}ms` : '0ms' }}
                >
                  {/* Rating Stars */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform" 
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 italic text-base line-clamp-4">
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
              {displayTestimonials.slice(3, 6).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: gridInView ? `${(index + 3) * 150}ms` : '0ms' }}
                >
                  {/* Rating Stars */}
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform" 
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4 italic text-base line-clamp-4">
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

      <style jsx>{`
        @keyframes star-pop {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        .animate-star-pop {
          animation: star-pop 0.6s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth scroll behavior */
        .scrollbar-hide {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;