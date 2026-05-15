import { useNavigate } from "react-router";
import { CheckCircle, MapPin, Clock, Navigation } from "lucide-react";

export function OrderConfirmation() {
  const navigate = useNavigate();

  const pickups = [
    {
      booth: "#12",
      vendor: "Blue Shoes Honey",
      amount: 34,
      items: 3,
    },
    {
      booth: "#18",
      vendor: "Maple Farm",
      amount: 18,
      items: 1,
    },
  ];

  const total = pickups.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-12 text-white text-center" style={{ background: 'linear-gradient(to bottom right, #44C062, #3BA854)' }}>
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12" style={{ color: '#44C062' }} />
        </div>
        <h1 className="text-3xl mb-2">Order Confirmed!</h1>
        <p className="text-green-100 mb-4">Your pickup reservation is ready</p>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block">
          <p className="text-sm text-green-100 mb-1">Order Number</p>
          <p className="text-2xl">MKT-1045</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5" style={{ color: '#44C062' }} />
            <div>
              <p className="text-gray-900">Pickup Today</p>
              <p className="text-sm text-gray-600">10:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" style={{ color: '#44C062' }} />
            <div>
              <p className="text-gray-900">Ottawa Sunday Market</p>
              <p className="text-sm text-gray-600">Lansdowne Park</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg text-gray-900 mb-3">Vendor Pickup Checklist</h2>
          <div className="space-y-3">
            {pickups.map((pickup, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <span style={{ color: '#44C062' }}>{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-900">{pickup.vendor}</p>
                      <p className="text-sm text-gray-600">Booth {pickup.booth}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-900">${pickup.amount}</p>
                    <p className="text-xs text-gray-500">{pickup.items} items</p>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl px-3 py-2">
                  <p className="text-sm text-purple-900">
                    💳 Pay ${pickup.amount} at booth
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
          <p className="text-sm text-green-900 mb-3">
            <strong>How it works:</strong>
          </p>
          <ol className="text-sm text-green-800 space-y-2">
            <li>1. Visit each vendor booth listed above</li>
            <li>2. Show your order number: <strong>MKT-1045</strong></li>
            <li>3. Pay the vendor directly (cash or card)</li>
            <li>4. Collect your items</li>
          </ol>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/pickup-route')}
            className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: '#44C062' }}
          >
            <Navigation className="w-5 h-5" />
            View Pickup Route
          </button>

          <button
            onClick={() => navigate('/market')}
            className="w-full bg-white text-gray-700 py-4 rounded-2xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Back to Market
          </button>
        </div>
      </div>
    </div>
  );
}
