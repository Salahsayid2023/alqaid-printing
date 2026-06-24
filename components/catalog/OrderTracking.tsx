// projects/printing-agency/web/components/catalog/OrderTracking.tsx
import React, { useState } from 'react';
import { orderService } from '../../services/orderService';
import { Package, CheckCircle, Clock, Truck, Search } from 'lucide-react';

export const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const trackOrder = async () => {
    if (!orderId) return;
    setLoading(true);
    setError('');
    try {
      const result = await orderService.getOrderById(orderId);
      // في البيئة الحقيقية سنقوم بجلب البيانات من Firestore
      if (!result) throw new Error('لم يتم العثور على طلب بهذا الرقم');
      setOrder(result);
    } catch (err) {
      setError('عذراً، لم نجد طلباً بهذا الرقم. يرجى التأكد من الرقم والمحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = [
    { id: 'pending', label: 'تم الاستلام', icon: <Clock size={20} /> },
    { id: 'designing', label: 'جاري التصميم', icon: <Search size={20} /> },
    { id: 'printing', label: 'جاري التنفيذ', icon: <Package size={20} /> },
    { id: 'ready', label: 'جاهز للاستلام', icon: <CheckCircle size={20} /> },
    { id: 'delivered', label: 'تم التسليم', icon: <Truck size={20} /> },
  ];

  const currentStepIndex = statusSteps.findIndex(s => s.id === order?.status);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto text-right space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black text-gray-900">متابعة طلبك 🔍</h1>
          <p className="text-gray-500">أدخل رقم الطلب لتعرف أين وصل عملك الآن</p>
        </div>

        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="مثلاً: ORD-12345" 
            className="flex-1 p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all text-center text-lg font-medium"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button 
            onClick={trackOrder}
            disabled={loading}
            className="px-6 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg disabled:bg-gray-400"
          >
            {loading ? 'بحث...' : 'تتبع'}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center font-medium animate-shake">
            {error}
          </div>
        )}

        {order && (
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <span className="text-xs text-gray-400 uppercase">رقم الطلب</span>
                <div className="text-lg font-bold text-gray-900">{order.id}</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 uppercase">الحالة الحالية</span>
                <div className="text-lg font-bold text-blue-600">{(statusMap as any)[order.status]?.label || order.status}</div>
              </div>
            </div>

            {/* Visual Progress Timeline */}
            <div className="relative flex justify-between items-center overflow-x-auto py-4 px-2 gap-4">
              {statusSteps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    idx <= currentStepIndex ? 'bg-blue-600 text-white scale-110 shadow-lg' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`text-[10px] mt-2 font-bold ${idx <= currentStepIndex ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                  {idx < statusSteps.length - 1 && (
                    <div className={`absolute top-5 left-5 w-full h-1 bg-gray-100 -z-10 ${
                      idx < currentStepIndex ? 'bg-blue-600' : ''
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const statusMap = {
  pending: { label: 'قيد الانتظار' },
  designing: { label: 'جاري التصميم' },
  printing: { label: 'جاري التنفيذ' },
  ready: { label: 'جاهز للاستلام' },
  delivered: { label: 'تم التسليم' },
};
