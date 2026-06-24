import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const categories = [
  { id: 'paper', name: 'المطبوعات الورقية', icon: '📄', desc: 'كروت، منيو، فواتير، بروشورات', color: 'from-blue-600 to-blue-400' },
  { id: 'trophies', name: 'الجوائز والتكريمات', icon: '🏆', desc: 'دروع كريستال، خشب، قطيفة', color: 'from-yellow-600 to-yellow-400' },
  { id: 'laser', name: 'الحفر بالليزر', icon: '⚡', desc: 'ميداليات، بوكسات، هدايا ليزر', color: 'from-red-600 to-red-400' },
  { id: 'thermal', name: 'الطباعة الحرارية', icon: '👕', desc: 'تيشرتات، مجات، أعلام، قماش', color: 'from-green-600 to-green-400' },
  { id: 'signage', name: 'اللوحات واليفط', icon: '🏢', desc: 'نيون، مضيئة، حروف بارزة', color: 'from-purple-600 to-purple-400' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] font-sans selection:bg-yellow-200 overflow-x-hidden">
      <Header />
      
      <main>
        {/* CINEMATIC HERO SECTION */}
        <section className="relative py-32 px-6 overflow-hidden bg-white">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-200 rounded-full blur-[120px] opacity-40 animate-pulse -z-10"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-200 rounded-full blur-[100px] opacity-60 -z-10"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-3/5 text-right space-y-8">
              <div className="inline-flex items-center gap-2 bg-black text-yellow-500 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl ring-4 ring-yellow-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Next Generation Printing
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-black leading-[1.1] tracking-tighter">
                مطبعه <span className="text-yellow-600 relative inline-block">القائد <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-200 -z-10 opacity-60 rounded-full"></span></span> <br />
                <span className="text-3xl md:text-5xl text-gray-600 font-bold block mt-4">للدعاية والاعلان والحلول الرقميه</span>
              </h1>
              
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
                نحن لا نصمم مجرد مطبوعات، بل نبني <span className="text-black font-bold border-b-4 border-yellow-500">هوية بصرية</span> تعكس قوة علامتك التجارية، ونبتكر حلولاً رقمية ذكية تنقلك إلى المستقبل.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-start">
                <button className="bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-yellow-600 transition-all duration-500 shadow-2xl hover:shadow-yellow-200 active:scale-95 group flex items-center gap-3">
                  ابدأ رحلتك الآن 
                  <span className="group-hover:translate-x-[-8px] transition-transform">←</span>
                </button>
                <button className="bg-white text-black border-2 border-black px-12 py-5 rounded-full font-black text-lg hover:bg-black hover:text-white transition-all duration-500 active:scale-95">
                  استكشف أعمالنا
                </button>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative group">
              <div className="relative z-10 w-full aspect-square bg-black rounded-[60px] rotate-3 group-hover:rotate-0 transition-all duration-700 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden border-[12px] border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/40 via-transparent to-transparent"></div>
                <div className="text-center relative z-10">
                   <span className="text-white text-9xl font-black opacity-10 block select-none">ALQAID</span>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-yellow-500 text-5xl font-black italic tracking-tighter">Premium Quality</span>
                   </div>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-yellow-400 rounded-full blur-[120px] opacity-30 -z-10"></div>
            </div>
          </div>
        </section>

        {/* BENTO GRID - SERVICES SECTION */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
              <div className="text-right">
                <h3 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">أقسامنا المتخصصة</h3>
                <div className="w-24 h-2 bg-yellow-600 rounded-full"></div>
              </div>
              <Link href="/services" className="text-sm font-black text-gray-400 hover:text-black transition-all flex items-center gap-2 group">
                تصفح جميع الخدمات <span className="text-yellow-600 group-hover:translate-x-[-5px] transition-transform">←</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {categories.map((cat) => (
                <div key={cat.id} className="group bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-black text-black mb-3 group-hover:text-yellow-600 transition-colors">{cat.name}</h4>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed h-12">{cat.desc}</p>
                  <div className="text-black font-black text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    استكشف الآن <span className="text-yellow-600">←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE "05" DIGITAL HUB - HIGH CONTRAST LUXURY */}
        <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20 relative z-10">
            <div className="lg:w-1/2 text-right space-y-10">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                Innovation Center
              </div>
              <h3 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                حلول <span className="text-yellow-500 relative">05</span> الرقميه <br /> 
                <span className="text-2xl md:text-4xl text-gray-400 font-medium block mt-4">نصمم المستقبل بذكاء اصطناعي</span>
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-xl">
                نقلنا خبرة "القائد" من الورق إلى السحاب. نبني لك أنظمة ذكية، تطبيقات موبايل، ومواقع إلكترونية تحول عملك من التقليد إلى الريادة الرقمية.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  'تطوير مواقع الويب الفاخرة',
                  'بناء تطبيقات الموبايل',
                  'أتمتة الشركات بالـ AI',
                  'هوية بصرية رقمية متكاملة'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-yellow-500/50 transition-all group backdrop-blur-md">
                    <span className="text-yellow-500 font-bold group-hover:scale-125 transition-transform text-xl">✦</span>
                    <span className="text-white font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-yellow-500 text-black px-12 py-5 rounded-full font-black text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(234,179,8,0.3)] active:scale-95">
                انضم إلى عصر 05 الرقمي
              </button>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="w-full aspect-square bg-gradient-to-br from-gray-900 to-black rounded-[60px] border border-white/10 shadow-3xl rotate-3 group-hover:rotate-0 transition-all duration-700 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-yellow-600/10 animate-pulse"></div>
                <div className="text-center relative z-10">
                  <span className="text-white text-9xl font-black opacity-10 block mb-2">05</span>
                  <h4 className="text-3xl font-black text-yellow-500 tracking-tighter italic">THE AI ENGINE</h4>
                </div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-600 rounded-full blur-[120px] opacity-20 -z-10"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* FLOATING CONTACTS - ULTRA MODERN */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-50">
        <div className="flex flex-col items-end gap-2 group">
           <span className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">أحمد عبدين</span>
           <a href="https://wa.me/201279431358" target="_blank" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative overflow-hidden">
             <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
             💬
           </a>
        </div>
        <div className="flex flex-col items-end gap-2 group">
           <span className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">صلاح سامح</span>
           <a href="https://wa.me/201229102164" target="_blank" className="w-14 h-14 bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative overflow-hidden">
             <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
             💬
           </a>
        </div>
        <a href="https://www.facebook.com/profile.php?id=61587534513034" target="_blank" className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-2xl group relative overflow-hidden">
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
          f
        </a>
      </div>
    </div>
  );
}
