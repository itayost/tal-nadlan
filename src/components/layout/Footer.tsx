import React from 'react';
import { Trophy, Phone } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <p className="text-xl font-bold">
              {agentInfo.name} | {agentInfo.officeName}
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 mb-4">
            {agentInfo.achievements[1]}
          </p>
          
          {/* Service Areas */}
          <p className="text-gray-400 mb-4">
            מתמחה באזור: {agentInfo.serviceAreas.join(" | ")}
          </p>
          
          {/* Phone */}
          <a 
            href={`tel:${agentInfo.phone}`} 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4"
          >
            <Phone className="w-4 h-4 ml-2" />
            {agentInfo.phoneDisplay}
          </a>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ItayOst. כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;