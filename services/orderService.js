// projects/printing-agency/web/services/orderService.js
import { db } from "../lib/firebase";
import { collection, addDoc, updateDoc, doc, getDocs, query, orderBy, where } from "firebase/firestore";

/**
 * خدمة إدارة الطلبات
 * تضمن معالجة الطلبات بسرعة فائقة وتحديث حالاتها لحظياً
 */
export const orderService = {
  // استقبال طلب جديد من العميل
  async createOrder(orderData) {
    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, {
        ...orderData,
        status: 'pending', // الحالة الافتراضية: قيد الانتظار
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return { id: docRef.id, ...orderData };
    } catch (error) {
      console.error("Error creating order: ", error);
      throw error;
    }
  },

  // جلب جميع الطلبات (للأدمن) مرتبة من الأحدث للأقدم
  async getAllOrders() {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // جلب طلب محدد بناءً على ID (للعميل لمتابعة طلبه)
  async getOrderById(id) {
    const orderRef = doc(db, "orders", id);
    // تنفيذ جلب البيانات هنا
    return orderRef;
  },

  // تحديث حالة الطلب (مثلاً من قيد التنفيذ إلى جاهز)
  async updateOrderStatus(orderId, newStatus) {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, {
        status: newStatus,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error("Error updating order status: ", error);
      throw error;
    }
  },

  // جلب الطلبات بناءً على حالة معينة (مثلاً: عرض الطلبات الجديدة فقط)
  async getOrdersByStatus(status) {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, where("status", "==", status), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
