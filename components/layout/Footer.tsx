// projects/printing-agency/web/components/layout/Footer.tsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">القائد <span className="text-blue-600">.</span></h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              وكالة متكاملة للدعاية والإعلان والحلول الرقمية. نقدم أجود خدمات الطباعة والابتكارات التقنية لمساعدة الشركات والمشاريع على النمو والتميز.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition">الرئيسية</a></li>
              <li><a href="/services" className="text-sm text-gray-500 hover:text-blue-600 transition">خدماتنا</a></li>
              <li><a href="/portfolio" className="text-sm text-gray-500 hover:text-blue-600 transition">معرض الأعمال</a></li>
              <li><a href="/track" className="text-sm text-gray-500 hover:text-blue-600 transition">متابعة طلبك</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone size={18} className="text-blue-600" />
                <span>+20 1XXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail size={18} className="text-blue-600" />
                <span>info@alqaid.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin size={18} className="text-blue-600" />
                <span>مصر، القاهرة، العنوان بالتفصيل</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} مطبعة القائد. جميع الحقوق محفوظة. تم التطوير بواسطة روبوت 05.
          </p>
        </div>
      </div>
    </footer>
  );
};
