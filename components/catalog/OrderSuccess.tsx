// projects/printing-agency/web/components/catalog/OrderSuccess.tsx
import React from 'react';
import { CheckCircle, Rocket, ArrowRight, Globe, Cpu } from 'lucide-react';

interface OrderSuccessProps {
  orderId: string;
  category: string;
  onRestart: () => void;
}

export const OrderSuccess = ({ orderId, category, onRestart }: OrderSuccessProps) => {
  
  // منطق الاقتراحات الذكية بناءً على نوع الخدمة
  const getUpsellOffer = () => {
    switch (category) {
      case 'outdoor': // يافطات
        return {
          title: "لا تكتفِ بالواجهة.. ابنِ كيانك الرقمي!",
          text: "بما أنك تطلب يافطة لمحلّك، ما رأيك في موقع تعريفي احترافي يجعل عملائك يجدونك في كل مكان عبر الإنترنت؟",
          icon: <Globe className="text-blue-600" />,
          cta: "استكشف حلول المواقع"
        };
      case 'paper': // مطبوعات ورقية
        return {
          title: "نظم أعمالك بذكاء مع أنظمة القائد",
          text: "إلى جانب الكروت والفواتير، يمكننا تزويدك بنظام إدارة مبيعات (SaaS) سحابي يغنيك عن الدفاتر الورقية تماماً.",
          icon: <Cpu className="text-blue-600" />,
          cta: "اكتشف أنظمة الإدارة"
        };
      default:
        return {
          title: "ارتقِ بعملك إلى المستوى التالي",
          text: "نحن في القائد لا نقدم مجرد طباعة، بل نوفر حلولاً تقنية متكاملة لتأسيس وإدارة الشركات الناشئة.",
          icon: <Rocket className="text-blue-600" />,
          cta: "تعرف على حلولنا الرقمية"
        };
    }
  };

  const offer = getUpsellOffer();

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-white p-4 animate-in fade-in zoom-in duration-300">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Success Animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-100"></div>
            <div className="relative p-4 bg-green-100 rounded-full text-green-600">
              <CheckCircle size={60} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-black text-gray-900">تم استقبال طلبك بنجاح! ✅</h2>
          <p className="text-gray-500">
            رقم طلبك هو: <span className="font-bold text-gray-900">{orderId}</span> <br />
            سيبدأ فريق القائد في تنفيذ طلبك فوراً.
          </p>
        </div>

        {/* Smart Upsell Card */}
        <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 text-right space-y-4 relative overflow-hidden group">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl group-hover:bg-blue-300/50 transition-all"></div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white rounded-lg shadow-sm">{offer.icon}</div>
            <h3 className="font-bold text-blue-900">{offer.title}</h3>
          </div>
          
          <p className="text-sm text-blue-700 leading-relaxed">
            {offer.text}
          </p>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-200">
            {offer.cta}
            <ArrowRight size={18} />
          </button>
        </div>

        <button 
          onClick={onRestart}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
};
