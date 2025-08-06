import React from 'react';
import { MessageCircle } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${agentInfo.whatsapp}?text=${encodeURIComponent('היי טל, אשמח לקבל ייעוץ לגבי נדל״ן')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ייעוץ חינם בוואטסאפ
      </div>
    </a>
  );
};

export default WhatsAppButton;