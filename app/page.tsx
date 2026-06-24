import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const categories = [
  { id: 'paper', name: 'المطبوعات الورقية', icon: '📄', desc: 'كروت، منيو، فواتير، بروشورات', color: 'from-blue-500 to-blue-600' },
  { id: 'trophies', name: 'الجوائز والتكريمات', icon: '🏆', desc: 'دروع كريستال، خشب، قطيفة', color: 'from-yellow-500 to-yellow-600' },
  { id: 'laser', name: 'الحفر بالليزر', icon: '⚡', desc: 'ميداليات، بوكسات، هدايا ليزر', color: 'from-red-500 to-red-600' },
  { id: 'thermal', name: 'الطباعة الحرارية', icon: '👕', desc: 'تيشرتات، مجات، أعلام، قماش', color: 'from-green-500 to-green-600' },
  { id: 'signage', name: 'اللوحات واليفط', icon: '🏢', desc: 'نيون، مضيئة، حروف بارزة', color: 'from-purple-500 to-purple-600' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200">
      {/* Verification Bar - This MUST appear if Vercel is updating */}
      <div className="bg-red-600 text-white text-center py-3 font-black text-xl animate-pulse z-50 relative">
        النسخة الأسطورية وصلت يا فنان - 2026 🚀🤖
      </div>

      <Header />
      
      <main>
        {/* High-End Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-yellow-50 opacity-50 rounded-bl-[100px]"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-right">
              <div className="inline-block bg-black text-yellow-500 px-4 py-1 rounded-full text-xs font-black mb-6 tracking-widest uppercase">
                Premium Printing & Tech
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[1.1] tracking-tighter">
                مطبعه <span className="text-yellow-600 relative">القائد <span className="absolute bottom-2 left-0 w-full h-2 bg-yellow-200 -z-10 opacity-60"></span></span> <br />
                <span className="text-3xl md:text-5xl text-gray-700 font-bold">للدعاية والاعلان والحلول الرقميه</span>
              </h2>
              <p className="text-lg text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                نحن لا نطبع الورق فحسب، بل نصنع هويتك البصرية ونبني حضورك الرقمي. دقة في التنفيذ، فخامة في التصميم، وابتكار يتجاوز التوقعات.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all hover:text-black shadow-xl hover:shadow-yellow-200 active:scale-95 text-lg">
                  ابدأ مشروعك الآن
                </button>
                <button className="bg-white text-black border-2 border-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all text-lg">
                  استكشف أعمالنا
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 relative group">
              <div className="w-full aspect-square bg-black rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-transparent"></div>
                <span className="text-white text-8xl font-black opacity-20 select-none">ALQAID</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </section>

        {/* Amazon-Style Categories */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div className="text-right">
                <h3 className="text-3xl font-black text-black mb-2">أقسامنا المتخصصة</h3>
                <div className="w-20 h-1.5 bg-yellow-600 rounded-full"></div>
              </div>
              <Link href="/services" className="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-2">
                عرض كل الخدمات <span className="text-yellow-600">←</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                  <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-black text-black mb-3 group-hover:text-yellow-600 transition-colors">{cat.name}</h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed h-12">{cat.desc}</p>
                  <div className="text-black font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                    تصفح المنتجات <span className="text-yellow-600">←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions 05 Section */}
        <section className="py-24 px-4 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 text-right">
              <div className="inline-flex items-center gap-2 bg-black text-yellow-500 px-4 py-1 rounded-full text-xs font-black mb-6 uppercase tracking-widest shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Digital Transformation
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
                حلول <span className="text-yellow-600 relative">05</span> الرقمية <br /> 
                <span className="text-2xl md:text-3xl text-gray-500 font-medium">مستقبل أعمالك يبدأ بذكاء</span>
              </h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                لا نكتفي بالورق، بل نمنح مشروعك "عقلاً رقمياً". متخصصون في بناء الأنظمة الذكية التي ترفع مبيعاتك وتسهل إدارتك باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'تصميم وتطوير مواقع الويب',
                  'بناء تطبيقات الموبايل',
                  'أتمتة الأعمال بالـ AI',
                  'هوية بصرية رقمية متكاملة'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-yellow-500 transition-all group">
                    <span className="text-yellow-500 font-bold group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-black font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all hover:text-black shadow-xl active:scale-95 text-lg">
                اكتشف قوة 05 الرقمية
              </button>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="w-full aspect-square bg-black rounded-[40px] overflow-hidden relative shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                  <div className="text-white">
                    <span className="text-7xl md:text-9xl font-black block mb-4 opacity-10">05</span>
                    <h4 className="text-2xl font-bold relative z-10">الذكاء الاصطناعي <br /> في خدمة أعمالك</h4>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <div className="flex flex-col items-end gap-3">
           <div className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-md mb-1 opacity-0 group-hover:opacity-100 transition-opacity">أحمد عبدين</div>
           <a href="https://wa.me/201279431358" target="_blank" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative">
             💬
           </a>
        </div>
        <div className="flex flex-col items-end gap-3">
           <div className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-md mb-1 opacity-0 group-hover:opacity-100 transition-opacity">صلاح سامح</div>
           <a href="https://wa.me/201229102164" target="_blank" className="w-14 h-14 bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative">
             💬
           </a>
        </div>
        <a href="https://www.facebook.com/profile.php?id=61587534513034" target="_blank" className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative">
          f
        </a>
      </div>
    </div>
  );
}
