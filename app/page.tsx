import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const categories = [
  { id: 'paper', name: 'المطبوعات الورقية', icon: '📄', desc: 'كروت، منيو، فواتير، بروشورات', color: 'bg-blue-50' },
  { id: 'trophies', name: 'الجوائز والتكريمات', icon: '🏆', desc: 'دروع كريستال، خشب، قطيفة', color: 'bg-yellow-50' },
  { id: 'laser', name: 'الحفر بالليزر', icon: '⚡', desc: 'ميداليات، بوكسات، هدايا ليزر', color: 'bg-red-50' },
  { id: 'thermal', name: 'الطباعة الحرارية', icon: '👕', desc: 'تيشرتات، مجات، أعلام، قماش', color: 'bg-green-50' },
  { id: 'signage', name: 'اللوحات واليفط', icon: '🏢', desc: 'نيون، مضيئة، حروف بارزة', color: 'bg-purple-50' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200">
      <Header />
      <main>
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-50 opacity-30 -z-10 rounded-full blur-3xl scale-150 translate-y-[-50%]"></div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
              مطبعه <span className="text-yellow-600">القائد</span> <br />
              <span className="text-2xl md:text-4xl text-gray-600 font-bold">للدعاية والاعلان والحلول الرقميه</span>
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
              نحن ندمج دقة الطباعة بذكاء الحلول الرقمية لنصنع حضوراً لا يُنسى لعملائنا.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg">اطلب الآن</button>
              <button className="bg-white text-black border-2 border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all">أعمالنا</button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-black mb-4">أقسامنا المتخصصة</h2>
              <div className="w-20 h-1.5 bg-yellow-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors">{cat.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-12">{cat.desc}</p>
                  <div className="text-black font-bold text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    تصفح المنتجات <span className="text-yellow-600">←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 text-right">
              <div className="inline-block bg-black text-yellow-500 px-4 py-1 rounded-full text-xs font-black mb-6">05 DIGITAL SOLUTIONS</div>
              <h3 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
                حلول <span className="text-yellow-600">05</span> الرقميه <br /> 
                <span className="text-2xl md:text-3xl text-gray-500 font-medium">مستقبل أعمالك يبدأ بذكاء</span>
              </h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                تطوير المواقع، تطبيقات الموبايل، وأنظمة الذكاء الاصطناعي. نحن نبني لك "العقل الرقمي" الذي يدير مشروعك بكفاءة.
              </p>
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-xl">اكتشف قوة 05</button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full aspect-square bg-black rounded-[40px] shadow-2xl rotate-3 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-transparent"></div>
                <span className="text-white text-8xl font-black opacity-20 group-hover:opacity-40 transition-opacity">05 AI</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
