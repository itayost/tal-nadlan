'use client';

import React from 'react';
import { Building, CheckCircle, Briefcase, Home, Phone } from 'lucide-react';
import { properties } from '@/data/properties';
import { agentInfo } from '@/data/agent';

const Properties = () => {
  // הצגת 6 נכסים אחרונים
  const displayProperties = properties.slice(0, 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'נמכר':
        return 'bg-green-500';
      case 'הושכר':
        return 'bg-blue-500';
      case 'זמין':
        return 'bg-yellow-500';
      case 'בתהליך':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'נמכר' || status === 'הושכר') {
      return <CheckCircle className="w-4 h-4 ml-1" />;
    }
    return null;
  };

  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">עסקאות אחרונות</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">נכסים שליוויתי לאחרונה</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if the real image doesn't load
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400';
                  }}
                />
                <div className={`absolute top-4 right-4 ${getStatusColor(property.status)} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center`}>
                  {property.status}
                  {getStatusIcon(property.status)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{property.title}</h3>
                
                {/* Price or Status */}
                <div className="text-xl font-bold text-blue-600 mb-3">
                  {property.price.includes('₪') ? property.price : (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 ml-2" />
                      {property.price}
                    </span>
                  )}
                </div>
                
                {property.location && (
                  <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <Home className="w-4 h-4 ml-1 text-gray-400" />
                    {property.location}
                  </p>
                )}
                
                <div className="flex justify-between text-gray-600 text-sm">
                  <span className="flex items-center">
                    <Building className="w-4 h-4 ml-1" />
                    {property.rooms}
                  </span>
                  <span className="text-gray-500">
                    {property.size}
                  </span>
                </div>

                {/* Features */}
                {property.features && property.features.length > 0 && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex flex-wrap gap-1">
                      {property.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={agentInfo.social.catalog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
            >
              <Briefcase className="w-5 h-5 ml-2" />
              צפו בקטלוג הנכסים המלא
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 ml-2" />
              ייעוץ חינם לגבי הנכס שלכם
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;