import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-yellow-500 font-black text-xl">ق</div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-black leading-none">مطبعه <span className="text-yellow-600">القائد</span></span>
            <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Advertising & Digital</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-gray-600 hover:text-black transition-colors">الرئيسية</Link>
          <Link href="/services" className="text-sm font-bold text-gray-600 hover:text-black transition-colors">خدماتنا</Link>
          <Link href="/order" className="text-sm font-bold text-gray-600 hover:text-black transition-colors">طلب خدمة</Link>
        </nav>

        <Link href="/order" className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-yellow-600 transition-all">
          اطلب الآن
        </Link>
      </div>
    </header>
  );
}
