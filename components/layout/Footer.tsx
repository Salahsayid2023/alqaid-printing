import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">مطبعه القائد</h3>
          <p className="text-gray-400 leading-relaxed">
            الرائدة في مجال الدعاية والاعلان والحلول الرقمية. نقدم أجود خدمات الطباعة والابتكار الرقمي لنساعد مشروعك على النمو والظهور بأفضل صورة.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-white border-r-4 border-yellow-500 pr-2">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="/" className="hover:text-yellow-500 transition-colors">الرئيسية</a></li>
            <li><a href="/services" className="hover:text-yellow-500 transition-colors">خدماتنا</a></li>
            <li><a href="/order" className="hover:text-yellow-500 transition-colors">طلب خدمة</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white border-r-4 border-yellow-500 pr-2">تواصل معنا</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <span className="text-yellow-500 font-bold">واتساب:</span>
              <span>01279431358 / 01229102164</span>
            </div>
            <a href="https://www.facebook.com/profile.php?id=61587534513034" target="_blank" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <span className="text-yellow-500 font-bold">فيسبوك:</span>
              <span>صفحة مطبعة القائد</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} مطبعة القائد للدعاية والاعلان والحلول الرقمية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
