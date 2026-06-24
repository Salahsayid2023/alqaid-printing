import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-yellow-500 font-bold text-xl">ق</div>
          <h1 className="text-xl font-bold text-black tracking-tight">
            مطبعه <span className="text-yellow-600">القائد</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-yellow-600 transition-colors">الرئيسية</Link>
          <Link href="/services" className="hover:text-yellow-600 transition-colors">خدماتنا</Link>
          <Link href="/order" className="hover:text-yellow-600 transition-colors">طلب خدمة</Link>
          <Link href="/contact" className="hover:text-yellow-600 transition-colors">تواصل معنا</Link>
        </nav>

        <Link href="/order" className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-600 transition-all hover:text-black">
          اطلب الآن
        </Link>
      </div>
    </header>
  );
}
