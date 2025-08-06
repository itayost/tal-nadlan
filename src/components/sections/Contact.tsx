'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, MessageCircle, Gift } from 'lucide-react';
import { agentInfo } from '@/data/agent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    // יצירת קישור mailto
    const subject = encodeURIComponent('פנייה חדשה מהאתר');
    const body = encodeURIComponent(
      `שם: ${formData.name}\n` +
      `טלפון: ${formData.phone}\n` +
      `אימייל: ${formData.email}\n` +
      `הודעה: ${formData.message}`
    );
    
    window.location.href = `mailto:${agentInfo.email}?subject=${subject}&body=${body}`;
    
    // איפוס הטופס
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">צור קשר</h2>
        
        {/* CTA Message */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 font-medium mb-2">{agentInfo.cta.title}</p>
          <p className="text-lg text-gray-600 mb-4">{agentInfo.cta.subtitle}</p>
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <Gift className="w-5 h-5 ml-2" />
            <span className="font-semibold">{agentInfo.cta.description}</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">צרו קשר עכשיו</h3>
            
            {/* Phone - Main CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-2xl mb-6">
              <p className="text-sm text-gray-600 mb-3">להתייעצות חינם התקשרו:</p>
              <a href={`tel:${agentInfo.phone}`} className="flex items-center justify-center group">
                <div className="bg-blue-600 p-4 rounded-full group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="mr-4">
                  <p className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">
                    {agentInfo.phoneDisplay}
                  </p>
                  <p className="text-sm text-gray-600">זמין גם בוואטסאפ</p>
                </div>
              </a>
            </div>
            
            {/* Other Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="mr-4">
                  <p className="font-semibold text-gray-800">אזורי פעילות</p>
                  <p className="text-gray-600">{agentInfo.serviceAreas.join(", ")}</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-gray-800">מוזמנים ליצור קשר בכל דרך</h4>
              <div className="flex gap-3">
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

            {/* Catalog Button */}
            <div className="mt-8">
              <a
                href={agentInfo.social.catalog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full hover:bg-green-200 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                קטלוג נכסים בוואטסאפ
              </a>
            </div>
          </div>

          {/* Contact Form - ENHANCED PLACEHOLDER VISIBILITY */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-800">השאירו פרטים</h3>
            <p className="text-gray-600 mb-6">נחזור אליכם לייעוץ חינם תוך 24 שעות</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">שם מלא *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-600"
                  placeholder="הכנס את שמך המלא"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">טלפון *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-600"
                  placeholder="050-1234567"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">אימייל</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">במה אוכל לעזור?</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none transition-colors text-gray-800 placeholder-gray-600"
                  placeholder="ספרו לי על הנכס שאתם מחפשים או רוצים למכור..."
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-[1.02] flex items-center justify-center font-semibold text-lg shadow-lg"
              >
                <Send className="w-5 h-5 ml-2" />
                שלח הודעה
              </button>
              
              <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">* שדות חובה</p>
                <p className="text-green-600 font-semibold mt-2">
                  📞 ייעוץ חינם ללא התחייבות
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;