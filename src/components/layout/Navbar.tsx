'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#hero', label: 'בית' },
    { href: '#about', label: 'אודות' },
    { href: '#properties', label: 'נכסים' },
    { href: '#testimonials', label: 'המלצות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo and Name - Full Height */}
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
              <div className="text-xs md:text-sm text-gray-600">{agentInfo.title}</div>
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
            {/* Phone Button Desktop */}
            <a
              href={`tel:${agentInfo.phone}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 ml-2" />
              {agentInfo.phoneDisplay}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="תפריט"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            {/* Phone CTA in Mobile Menu */}
            <a
              href={`tel:${agentInfo.phone}`}
              className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              📞 {agentInfo.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;