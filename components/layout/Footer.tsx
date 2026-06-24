import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-yellow-500">مطبعه القائد</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            نحن ندمج بين فنون الطباعة التقليدية وأحدث الحلول الرقمية لنصنع هوية بصرية لا تُنسى لعملائنا.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-white">روابط</h4>
            <ul className="text-gray-400 text-xs space-y-2">
              <li><a href="/" className="hover:text-yellow-500">الرئيسية</a></li>
              <li><a href="/services" className="hover:text-yellow-500">خدماتنا</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white">القانونية</h4>
            <ul className="text-gray-400 text-xs space-y-2">
              <li><a href="#" className="hover:text-yellow-500">الشروط</a></li>
              <li><a href="#" className="hover:text-yellow-500">الخصوصية</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-white border-r-4 border-yellow-500 pr-2">تواصل معنا</h4>
          <div className="text-gray-400 text-xs space-y-2">
            <p>أحمد عبدين: 01279431358</p>
            <p>صلاح سامح: 01229102164</p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-[10px] mt-16 pt-6 border-t border-gray-900">
        © {new Date().getFullYear()} مطبعة القائد للدعاية والاعلان والحلول الرقميه. صُنع بواسطة 05.
      </div>
    </footer>
  );
}
