// projects/printing-agency/web/components/home/Hero.tsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-white pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider animate-fade-in">
            <Sparkles size={14} />
            <span>مرحباً بك في عصر الدعاية الرقمية</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            مطبعة <span className="text-blue-600">القائد</span> <br />
            نصنع هويتك.. لتقود السوق
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed">
            من اليافطات العملاقة إلى أدق تفاصيل الحفر بالليزر، ومن المطبوعات الورقية إلى الحلول الرقمية المتكاملة. نحن شريكك في بناء إمبراطوريتك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              ابدأ طلبك الآن
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
              استكشف أعمالنا
            </button>
          </div>
        </div>
      </div>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-gradient-to-tr from-blue-50/30 to-transparent" />
    </section>
  );
};
