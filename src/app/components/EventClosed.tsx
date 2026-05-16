import { useNavigate } from "react-router";
import { Calendar, Archive, CheckCircle, Copy } from "lucide-react";

export function EventClosed() {
  const navigate = useNavigate();

  const stats = [
    { label: "Orders completed", value: 12 },
    { label: "Products sold", value: 48 },
    { label: "Total revenue", value: "$542" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl text-gray-900">Market Day Complete</h1>
        <p className="text-gray-600 mt-1">Ottawa Sunday Market</p>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border border-gray-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
              <Archive className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Store Closed</h2>
              <p className="text-sm text-gray-600">Sunday, May 14, 2026 • 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-gray-900">Great day at the market!</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl text-green-600 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <Archive className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-gray-900 mb-1">Products Archived</p>
              <p className="text-sm text-gray-600">
                Your 34 products have been saved and can be reused for your next market day.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="mobile-primary-action text-white hover:opacity-90 flex items-center justify-center gap-3" style={{ backgroundColor: '#44C062' }}>
            <Copy className="w-5 h-5" />
            Copy Catalog for Next Sunday
          </button>

          <button className="mobile-secondary-action bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-3">
            <Calendar className="w-5 h-5" />
            View Order History
          </button>

          <button
            onClick={() => navigate('/')}
            className="mobile-secondary-action bg-white text-gray-700 hover:bg-gray-50"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
