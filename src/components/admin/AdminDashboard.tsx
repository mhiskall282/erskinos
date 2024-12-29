import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { isAdminUser } from '../../utils/auth';
import UsersList from './UsersList';
import OrdersList from './OrdersList';
import { User, Order } from '../../types/admin';

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !isAdminUser(user.email)) {
      navigate('/signin');
      return;
    }

    const fetchData = async () => {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const ordersSnapshot = await getDocs(collection(db, 'orders'));
      
      setUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
      setOrders(ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order)));
    };

    fetchData();
  }, [user, navigate]);

  if (!user || !isAdminUser(user.email)) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UsersList users={users} />
        <OrdersList orders={orders} />
      </div>
    </div>
  );
};
export default AdminDashboard;