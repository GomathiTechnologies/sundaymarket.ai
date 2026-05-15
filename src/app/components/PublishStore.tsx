import { useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, AlertCircle, Store, Clock } from "lucide-react";

export function PublishStore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Publish Store</h1>
          <p className="text-sm text-gray-600">Ready to go live</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#44C062' }}>
              <Store className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl text-gray-900">Blue Shoes Honey</h2>
              <p className="text-sm text-gray-600">Booth #12 • Ottawa Sunday Market</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Approved products</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-2xl text-green-600">34</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Needs review</span>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" style={{ color: '#44C062' }} />
                <span className="text-2xl" style={{ color: '#44C062' }}>4</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Store Hours</p>
                <p className="text-sm text-gray-600">9:00 AM - 2:00 PM</p>
                <p className="text-sm text-gray-600">Orders close at 12:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center mt-0.5">
                <span className="text-xs text-purple-600">$</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Payment Method</p>
                <p className="text-sm text-gray-600">Pay at pickup</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> Your store will automatically close at 2:00 PM. You can view orders and mark them as ready from the Orders screen.
          </p>
        </div>

        <button
          onClick={() => navigate('/vendor/orders')}
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all mb-3"
          style={{ backgroundColor: '#44C062' }}
        >
          Publish Store
        </button>

        <button
          onClick={() => navigate('/vendor/catalog-review')}
          className="w-full bg-white text-gray-700 py-4 rounded-2xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Back to Catalog
        </button>
      </div>
    </div>
  );
}
