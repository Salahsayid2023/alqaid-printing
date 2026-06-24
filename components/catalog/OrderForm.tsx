// projects/printing-agency/web/components/catalog/OrderForm.tsx
import React, { useState } from 'react';
import { orderService } from '../../services/orderService';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface OrderFormProps {
  product: any;
  onClose: () => void;
  onSuccess: () => void;
}

export const OrderForm = ({ product, onClose, onSuccess }: OrderFormProps) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: 1,
    specifications: '',
    files: [] as any[],
  });

  // تحديد الأسئلة بناءً على القسم (Smart Logic)
  const getDynamicPlaceholder = () => {
    switch (product.category) {
      case 'laser': return 'مثلاً: كتابة اسم معين، نوع الخشب المفضل، المقاس الدقيق...';
      case 'paper': return 'مثلاً: نوع الورق (كوشيه/مط)، الكمية، مقاس الكارت...';
      case 'outdoor': return 'مثلاً: مقاس اليافطة (طول x عرض)، مكان التركيب، الإضاءة...';
      case 'thermal': return 'مثلاً: المقاس، نوع القماش، لون التيشرت...';
      default: return 'يرجى كتابة كافة التفاصيل المطلوبة لتنفيذ طلبك بدقة...';
    }
  };

  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files: [...formData.files, ...files] });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await orderService.createOrder({
        productId: product.id,
        productName: product.name,
        ...formData,
      });
      onSuccess();
    } catch (error) {
      alert('حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">طلب خدمة: {product.name}</h2>
            <p className="text-gray-400 text-xs">أكمل البيانات بدقة لضمان جودة التنفيذ</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Step 1: Specifications */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">تفاصيل الطلب 📋</label>
            <textarea 
              className="w-full p-3 border border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              placeholder={getDynamicPlaceholder()}
              required
              value={formData.specifications}
              onChange={(e) => setFormData({...formData, specifications: e.target.value})}
            />
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-500 mb-1 block">الكمية</label>
                <input 
                  type="number" min="1" 
                  className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 mb-1 block">رفع التصميم (إن وجد)</label>
                <label className="flex items-center justify-center gap-2 p-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <Upload size={16} />
                  <span className="text-xs text-gray-500">اختر ملف</span>
                  <input type="file" multiple className="hidden" onChange={handleFileChange} />
                </label>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Step 2: Customer Details */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">بيانات التواصل 👤</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" placeholder="الاسم بالكامل" 
                className="p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" placeholder="رقم الواتساب" 
                className="p-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? 'جاري إرسال طلبك...' : 'تأكيد وإرسال الطلب ✅'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Helper icon for the X button (since it was missing in previous imports)
const X = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
