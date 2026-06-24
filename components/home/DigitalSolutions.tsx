// projects/printing-agency/web/components/home/DigitalSolutions.tsx
import React from 'react';
import { Cpu, Globe, BarChart, Layers, Zap } from 'lucide-react';

const solution = {
  title: "حلول القائد الرقمية",
  subtitle: "نحن لا نصمم يافطة فقط، نحن نبني كيانك الرقمي بالكامل",
  description: "نقدم خدمات الـ SaaS والأنظمة البرمجية المخصصة للمحلات والشركات الناشئة، لننقل عملك من مجرد محل تقليدي إلى إمبراطورية تدار بذكاء."
};

const features = [
  { icon: <Globe className="text-blue-600" />, title: "مواقع تعريفية", desc: "واجهة احترافية لعملائك على الإنترنت." },
  { icon: <Cpu className="text-blue-600" />, title: "أنظمة SaaS", desc: "برامج إدارة مبيعات ومخازن سحابية." },
  { icon: <BarChart className="text-blue-600" />, title: "تحليل البيانات", desc: "تقارير دقيقة لمتابعة نمو أعمالك." },
  { icon: <Layers className="text-blue-600" />, title: "هوية رقمية", desc: "تصميم شعارات وبصمة بصرية متكاملة." },
  { icon: <Zap className="text-blue-600" />, title: "أتمتة المهام", desc: "تقليل الجهد البشري وزيادة سرعة التنفيذ." },
];

export const DigitalSolutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-black text-gray-900">{solution.title}</h2>
          <p className="text-blue-600 font-bold text-lg">{solution.subtitle}</p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {solution.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-50 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="font-bold text-gray-800">{feat.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-xl">
            اطلب استشارة رقمية مجانية
          </button>
        </div>
      </div>
    </section>
  );
};
