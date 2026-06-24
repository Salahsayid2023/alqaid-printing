import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-yellow-500 font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform">
            ق
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-black leading-none tracking-tighter">
              مطبعه <span className="text-yellow-600">القائد</span>
            </h1>
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Advertising & Digital Solutions</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['الرئيسية', 'خدماتنا', 'طلب خدمة', 'تواصل معنا'].map((item) => (
            <Link 
              key={item} 
              href={item === 'الرئيسية' ? '/' : item === 'خدماتنا' ? '/services' : item === 'طلب خدمة' ? '/order' : '/contact'} 
              className="text-sm font-bold text-gray-600 hover:text-yellow-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Link href="/order" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-600 transition-all hover:text-black shadow-md hover:shadow-yellow-200 active:scale-95">
          اطلب الآن
        </Link>
      </div>
    </header>
  );
}
