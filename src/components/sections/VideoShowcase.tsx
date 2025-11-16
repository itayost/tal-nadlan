'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="video-showcase"
      className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Header with fade animation */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            הצצה לעבודה שלי
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            גלו איך אני מלווה את הלקוחות שלי להצלחה
          </p>
        </div>

        {/* Video Container with fade animation */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Video Wrapper - Responsive aspect ratio for vertical video (9:16) */}
            <div className="relative w-full" style={{ paddingBottom: '177.78%' /* 16:9 inverted for vertical */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/WG2o_WcKZ6g?autoplay=1&mute=1&loop=1&playlist=WG2o_WcKZ6g"
                title="סרטון הצגה"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{
                  border: 'none',
                }}
              />
            </div>

            {/* Decorative overlay - subtle gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Optional: Play icon hint (shows before video loads) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-blue-600/90 rounded-full p-6 backdrop-blur-sm">
              <Play className="w-12 h-12 text-white fill-current" />
            </div>
          </div>
        </div>

        {/* Optional: Additional context or CTA below video */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            רוצים לדעת עוד? צרו איתי קשר לייעוץ אישי וחינם
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
