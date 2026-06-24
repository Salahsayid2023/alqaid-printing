import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function HomePage() {
  const categories = [
    { id: 'paper', name: 'المطبوعات الورقية', icon: '📄', color: 'bg-blue-50' },
    { id: 'trophies', name: 'الجوائز والتكريمات', icon: '🏆', color: 'bg-yellow-50' },
    { id: 'laser', name: 'الحفر بالليزر', icon: '⚡', color: 'bg-red-50' },
    { id: 'thermal', name: 'الطباعة الحرارية', icon: '👕', color: 'bg-green-50' },
    { id: 'signage', name: 'اللوحات واليفط', icon: '🏢', color: 'bg-purple-50' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
              مطبعه القائد <br />
              <span className="text-yellow-600">للدعاية والاعلان والحلول الرقميه</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              نجمع بين دقة الطباعة وابتكار الحلول الرقمية لنمنح علامتك التجارية حضوراً لا يُنسى. من الكروت الشخصية وحتى بناء الأنظمة الذكية.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all hover:text-black text-lg">
                اطلب خدمتك الآن
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all text-lg">
                تصفح أعمالنا
              </button>
            </div>
          </div>
        </section>

        {/* Amazon-style Categories Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-12 text-center">أقسامنا الرئيسية</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">{cat.name}</h4>
                  <p className="text-gray-500 text-sm mb-4">تصفح أفضل المنتجات والخدمات في هذا القسم</p>
                  <div className="text-yellow-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    عرض الكل <span>←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions 05 Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                قوة الذكاء الاصطناعي 🤖
              </div>
              <h3 className="text-4xl font-extrabold text-black mb-6 leading-tight">
                حلول <span className="text-yellow-600">05</span> الرقمية <br /> 
                مستقبلك التكنولوجي يبدأ هنا
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                لا نقدم مجرد طباعة، بل نصنع لك حضوراً رقمياً ذكياً. متخصصون في بناء التطبيقات، المواقع الإلكترونية، وأتمتة الأعمال باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'تصميم وتطوير مواقع الويب المتطورة',
                  'بناء تطبيقات الموبايل (iOS & Android)',
                  'أنظمة أتمتة الأعمال والذكاء الاصطناعي',
                  'هوية بصرية رقمية متكاملة'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black font-medium">
                    <span className="text-yellow-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all hover:text-black">
                اكتشف حلول 05 الرقمية
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-9xl font-black text-gray-200 opacity-50 select-none">
                  05 AI
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://wa.me/201279431358" target="_blank" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl">
          💬
        </a>
        <a href="https://wa.me/201229102164" target="_blank" className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl">
          💬
        </a>
        <a href="https://www.facebook.com/profile.php?id=61587534513034" target="_blank" className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl">
          f
        </a>
      </div>
    </div>
  );
}
