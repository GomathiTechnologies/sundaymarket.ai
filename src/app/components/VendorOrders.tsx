import { useNavigate } from "react-router";
import { Store, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export function VendorOrders() {
  const navigate = useNavigate();
  const [orders] = useState([
    {
      id: "MKT-1045-A",
      customerName: "Sarah Johnson",
      items: [
        { name: "Blue Shoes Honey 500g", quantity: 2, price: "$12" },
        { name: "Maple Candy Bag", quantity: 1, price: "$10" },
      ],
      total: "$34",
      pickupTime: "11:30 AM",
      status: "pending",
    },
    {
      id: "MKT-1046-A",
      customerName: "Michael Chen",
      items: [
        { name: "Pure Maple Syrup 500ml", quantity: 1, price: "$18" },
      ],
      total: "$18",
      pickupTime: "12:00 PM",
      status: "ready",
    },
    {
      id: "MKT-1047-A",
      customerName: "Emma Wilson",
      items: [
        { name: "Honeycomb Pack", quantity: 1, price: "$22" },
        { name: "Maple Butter 250g", quantity: 2, price: "$14" },
      ],
      total: "$50",
      pickupTime: "1:00 PM",
      status: "pending",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl text-gray-900">Orders</h1>
            <p className="text-sm text-gray-600">Blue Shoes Honey • Booth #12</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Store className="w-6 h-6" style={{ color: '#44C062' }} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            ● Store Open
          </div>
          <span className="text-gray-600">Closes at 2:00 PM</span>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-green-900">
            <strong>{orders.length} orders</strong> waiting. Mark orders as ready when prepared, then mark picked up when customers collect.
          </p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order {order.id}</p>
                  <p className="text-gray-900 mb-1">{order.customerName}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    Pickup: {order.pickupTime}
                  </div>
                </div>
                {order.status === "ready" ? (
                  <span className="px-3 py-1 bg-green-100 rounded-full text-xs" style={{ color: '#44C062' }}>
                    Ready
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    Pending
                  </span>
                )}
              </div>

              <div className="border-t border-gray-200 pt-3 mb-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-gray-900">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{order.total}</span>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-3">
                <p className="text-sm text-purple-900">
                  <strong>Payment:</strong> Pay at pickup
                </p>
              </div>

              {order.status === "pending" ? (
                <div className="flex gap-2">
                  <button className="flex-1 text-white py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2" style={{ backgroundColor: '#44C062' }}>
                    <CheckCircle className="w-4 h-4" />
                    Mark Ready
                  </button>
                  <button className="px-4 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button className="w-full text-white py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2" style={{ backgroundColor: '#44C062' }}>
                  <CheckCircle className="w-4 h-4" />
                  Mark Picked Up
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-action-bar">
        <button
          onClick={() => navigate('/')}
          className="mobile-secondary-action bg-white text-gray-700 hover:bg-gray-50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
