'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { MessageCircle } from 'lucide-react';
import { agentInfo } from '@/data/agent';

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoShowcase = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const playerRef = useRef<any>(null);
  const playerReadyRef = useRef(false);

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Load the API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // API ready callback
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      // Cleanup
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Initialize YouTube player
  const initializePlayer = () => {
    if (playerRef.current) return; // Already initialized

    playerRef.current = new window.YT.Player('youtube-player', {
      events: {
        onReady: (event: any) => {
          playerReadyRef.current = true;
          // Mute the player
          event.target.mute();
        },
      },
    });
  };

  // Control playback based on visibility
  useEffect(() => {
    if (!playerReadyRef.current || !playerRef.current) return;

    try {
      if (isInView) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (error) {
      // Silently handle errors
      console.log('Video control error:', error);
    }
  }, [isInView]);

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
                id="youtube-player"
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/WG2o_WcKZ6g?enablejsapi=1&mute=1&loop=1&playlist=WG2o_WcKZ6g"
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
        </div>

        {/* CTA below video */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-6">
            רוצים לדעת עוד? צרו איתי קשר לייעוץ אישי וחינם
          </p>
          <a
            href={`https://wa.me/${agentInfo.whatsapp}?text=היי טל, ראיתי את הסרטון ואשמח לקבל פרטים נוספים`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            שלח הודעה בווטסאפ
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
