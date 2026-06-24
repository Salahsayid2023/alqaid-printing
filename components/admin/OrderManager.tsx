// projects/printing-agency/web/components/admin/OrderManager.tsx
import React, { useEffect, useState } from 'react';
import { orderService } from '../../services/orderService';
import { CheckCircle, Clock, Package, Truck, FileText, Download } from 'lucide-react';

export const OrderManager = ({ refreshTrigger }: { refreshTrigger?: any }) => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await orderService.getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refreshTrigger]);

  const handleStatusChange = async (orderId: any, newStatus: any) => {
    try {
      await orderService.updateOrderStatus(orderId, newStatus);
      await fetchOrders(); // تحديث القائمة فوراً
    } catch (error) {
      alert('حدث خطأ أثناء تحديث الحالة');
    }
  };

  const statusMap = {
    pending: { label: 'قيد الانتظار', color: 'bg-yellow-100 text-yellow-700', icon: <Clock size={14} /> },
    designing: { label: 'جاري التصميم', color: 'bg-blue-100 text-blue-700', icon: <FileText size={14} /> },
    printing: { label: 'جاري التنفيذ', color: 'bg-purple-100 text-purple-700', icon: <Package size={14} /> },
    ready: { label: 'جاهز للاستلام', color: 'bg-green-100 text-green-700', icon: <CheckCircle size={14} /> },
    delivered: { label: 'تم التسليم', color: 'bg-gray-100 text-gray-700', icon: <Truck size={14} /> },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">مركز استقبال طلبات القائد 📦</h2>
        <button onClick={fetchOrders} className="p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">تحديث القائمة 🔄</button>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">جاري جلب الطلبات...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="py-3 px-6 text-right">العميل</th>
                <th className="py-3 px-6 text-right">الطلب</th>
                <th className="py-3 px-6 text-center">الحالة الحالية</th>
                <th className="py-3 px-6 text-center">تغيير الحالة</th>
                <th className="py-3 px-6 text-center">الملفات</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-3 px-6">
                    <div className="font-medium">{order.customerDetails.name}</div>
                    <div className="text-xs text-gray-400">{order.customerDetails.phone}</div>
                  </td>
                  <td className="py-3 px-6">
                    <div className="text-xs italic text-gray-500">الكمية: {order.orderDetails.quantity}</div>
                    <div className="text-xs">{order.orderDetails.specifications}</div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className={`flex items-center justify-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${(statusMap as any)[order.status]?.color || 'bg-gray-100'}`}>
                      {(statusMap as any)[order.status]?.icon}
                      {(statusMap as any)[order.status]?.label}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <select 
                      className="p-1 border rounded text-xs bg-white"
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="pending">قيد الانتظار</option>
                      <option value="designing">جاري التصميم</option>
                      <option value="printing">جاري التنفيذ</option>
                      <option value="ready">جاهز</option>
                      <option value="delivered">تم التسليم</option>
                    </select>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center gap-2">
                      {order.orderDetails.files?.map((file: any, idx: any) => (
                        <a key={idx} href={file} target="_blank" className="p-2 text-blue-600 hover:bg-blue-50 rounded" title="تحميل التصميم">
                          <Download size={18} />
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-gray-400">لا توجد طلبات حالياً. القائد في انتظار العملاء! 🚀</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
