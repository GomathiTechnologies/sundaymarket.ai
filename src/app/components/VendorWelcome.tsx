import { useNavigate } from "react-router";
import { ShoppingBag, Store } from "lucide-react";

export function VendorWelcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: '#44C062' }}>
          <Store className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl text-center mb-3 text-gray-900">
          sundaymarket.ai
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-md text-lg">
          Turn your market booth into an online store in minutes
        </p>

        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={() => navigate('/vendor/detect-market')}
            className="mobile-primary-action text-white hover:opacity-90 flex items-center justify-center gap-3"
            style={{ backgroundColor: '#44C062' }}
          >
            <Store className="w-5 h-5" />
            Continue as Vendor
          </button>

          <button
            onClick={() => navigate('/market')}
            className="w-full bg-white text-gray-900 py-4 rounded-2xl shadow-md hover:bg-gray-50 transition-colors border border-gray-200 flex items-center justify-center gap-3"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse as Customer
          </button>
        </div>
      </div>

      <div className="pb-8 text-center text-sm text-gray-500">
        <p>Local markets, powered by AI</p>
      </div>
    </div>
  );
}
