import React from 'react';
import { Order } from '../../types/admin';

interface OrdersListProps {
  orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="border-b pb-2">
            <p className="font-medium">Order #{order.id}</p>
            <p className="text-sm text-gray-600">Total: ₵{order.total}</p>
            <p className="text-sm text-gray-600">Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;