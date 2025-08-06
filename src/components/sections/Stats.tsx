import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';
import { stats } from '@/data/stats';

const Stats = () => {
  const StatIcon = ({ icon }: { icon: any }) => {
    const Icon = icon;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all"
              >
                <div className="text-blue-600 mb-3 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <StatIcon icon={stat.icon} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;