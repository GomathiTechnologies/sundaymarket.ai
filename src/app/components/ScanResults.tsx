import { useNavigate } from "react-router";
import { CheckCircle, AlertCircle, XCircle, Copy, ArrowRight } from "lucide-react";

export function ScanResults() {
  const navigate = useNavigate();

  const stats = [
    { label: "Detected products", value: 42, icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "High confidence", value: 31, icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
    { label: "Needs review", value: 8, icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Price missing", value: 3, icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
    { label: "Duplicates found", value: 5, icon: Copy, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl text-gray-900">AI Scan Results</h1>
        <p className="text-gray-600 mt-1">Review what we found</p>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#44C062' }}>
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Scan Complete!</h2>
              <p className="text-sm text-gray-600">AI detected 42 products from your booth</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} rounded-2xl p-4 border border-gray-200`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <span className="text-gray-900">{stat.label}</span>
                </div>
                <span className={`text-2xl ${stat.color}`}>{stat.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-green-900">
            Review the detected products to verify accuracy. You can edit names, prices, and quantities before publishing.
          </p>
        </div>

        <button
          onClick={() => navigate('/vendor/catalog-review')}
          className="mobile-primary-action text-white hover:opacity-90 flex items-center justify-center gap-2"
          style={{ backgroundColor: '#44C062' }}
        >
          Review Catalog
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
