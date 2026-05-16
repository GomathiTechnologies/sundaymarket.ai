import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export function CreateMarketDay() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    marketHoursStart: "09:00",
    marketHoursEnd: "14:00",
    orderCutoff: "12:00",
    pickupStart: "10:00",
    pickupEnd: "14:00",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/vendor/upload-photos');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Create Market Day Store</h1>
          <p className="text-sm text-gray-600">Set up today's selling hours</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6 mobile-setup-form">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5" style={{ color: '#44C062' }} />
            <div>
              <p className="text-gray-900">Ottawa Sunday Market</p>
              <p className="text-sm text-gray-600">Sunday, May 14, 2026</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 mobile-setup-stack">
          <div>
            <label className="block text-gray-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Market Hours
            </label>
            <div className="flex items-center gap-3">
              <input
                type="time"
                value={formData.marketHoursStart}
                onChange={(e) => setFormData({ ...formData, marketHoursStart: e.target.value })}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 mobile-form-control focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
                required
              />
              <span className="text-gray-500">to</span>
              <input
                type="time"
                value={formData.marketHoursEnd}
                onChange={(e) => setFormData({ ...formData, marketHoursEnd: e.target.value })}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 mobile-form-control focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Order Cutoff Time</label>
            <input
              type="time"
              value={formData.orderCutoff}
              onChange={(e) => setFormData({ ...formData, orderCutoff: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 mobile-form-control focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <p className="text-sm text-gray-500 mt-1">Customers can't place orders after this time</p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Pickup Window</label>
            <div className="flex items-center gap-3">
              <input
                type="time"
                value={formData.pickupStart}
                onChange={(e) => setFormData({ ...formData, pickupStart: e.target.value })}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 mobile-form-control focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
                required
              />
              <span className="text-gray-500">to</span>
              <input
                type="time"
                value={formData.pickupEnd}
                onChange={(e) => setFormData({ ...formData, pickupEnd: e.target.value })}
                className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-3 mobile-form-control focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
                required
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">When customers can pick up their orders</p>
          </div>
        </div>

        <button
          type="submit"
          className="mobile-primary-action text-white hover:opacity-90 mobile-submit-spacing mt-8"
          style={{ backgroundColor: '#44C062' }}
        >
          Create Today's Store
        </button>
      </form>
    </div>
  );
}
