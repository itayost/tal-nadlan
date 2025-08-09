// Enhanced Navbar with Mobile Animations
// src/components/layout/Navbar.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    // Reset animation state after animation completes
    setTimeout(() => setMenuAnimating(false), 300);
  };

  const closeMenu = () => {
    setMenuAnimating(true);
    setIsMenuOpen(false);
    setTimeout(() => setMenuAnimating(false), 300);
  };

  const menuItems = [
    { href: '#hero', label: 'בית', icon: '' },
    { href: '#about', label: 'אודות', icon: '' },
    { href: '#properties', label: 'נכסים', icon: '' },
    { href: '#testimonials', label: 'המלצות', icon: '' },
    { href: '#contact', label: 'צור קשר', icon: '' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <img 
                src={agentInfo.logo} 
                alt={agentInfo.name} 
                className="h-16 md:h-20 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-lg md:text-xl font-bold text-gray-800">
                  {agentInfo.name}
                </div>
                <div className="text-xs md:text-sm text-gray-600">{agentInfo.officeName}</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={`tel:${agentInfo.phone}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 ml-2" />
                {agentInfo.phoneDisplay}
              </a>
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 group"
              aria-label="תפריט"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger bars with animation */}
                <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-0'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-gray-800 top-2.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={agentInfo.logo} 
              alt={agentInfo.name} 
              className="h-12 w-auto"
            />
            <div>
              <div className="text-lg font-bold text-gray-800">{agentInfo.name}</div>
              <div className="text-xs text-gray-600">{agentInfo.officeName}</div>
            </div>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="סגור תפריט"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Menu Items with staggered animation */}
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`flex items-center gap-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium text-lg py-3 px-4 rounded-lg transform ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms'
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`px-4 mt-4 transform transition-all duration-500 ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}
        style={{
          transitionDelay: isMenuOpen ? '400ms' : '0ms'
        }}>
          <a
            href={`tel:${agentInfo.phone}`}
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg group"
          >
            <Phone className="w-5 h-5 ml-3 group-hover:animate-pulse" />
            <span className="text-lg">{agentInfo.phoneDisplay}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className={`px-4 mt-6 transform transition-all duration-500 ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}
        style={{
          transitionDelay: isMenuOpen ? '500ms' : '0ms'
        }}>
          <p className="text-sm text-gray-600 mb-3 text-center">עקבו אחרי ברשתות</p>
          <div className="flex justify-center gap-3">
            <a
              href={agentInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={agentInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full text-white hover:opacity-90 transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${agentInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition-all transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${agentInfo.email}`}
              className="bg-gray-700 p-3 rounded-full text-white hover:bg-gray-800 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Add these styles to your component or global CSS */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;