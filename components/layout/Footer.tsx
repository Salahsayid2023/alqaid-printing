import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-black text-xl">ق</div>
            <h3 className="text-2xl font-bold tracking-tight">مطبعه القائد</h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            الرائدة في مجال الدعاية والاعلان والحلول الرقميه. نبتكر الحلول التي تمنح عملائنا تفوقاً ملموساً في السوق من خلال دمج دقة الطباعة وذكاء البرمجيات.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61587534513034" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all text-white">fb</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-yellow-500 transition-colors">الرئيسية</a></li>
              <li><a href="/services" className="hover:text-yellow-500 transition-colors">خدماتنا</a></li>
              <li><a href="/order" className="hover:text-yellow-500 transition-colors">طلب خدمة</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">قانوني</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-white border-r-4 border-yellow-500 pr-3">تواصل معنا</h4>
          <div className="space-y-4">
            <a href="https://wa.me/201279431358" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group">
              <span className="p-2 bg-gray-800 rounded-lg text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">💬</span>
              <span className="text-sm">أحمد عبدين: 01279431358</span>
            </a>
            <a href="https://wa.me/201229102164" className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group">
              <span className="p-2 bg-gray-800 rounded-lg text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">💬</span>
              <span className="text-sm">صلاح سامح: 01229102164</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} مطبعة القائد للدعاية والاعلان والحلول الرقميه. صُنع بشغف بواسطة 05.
      </div>
    </footer>
  );
}
