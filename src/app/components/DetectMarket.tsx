import { useNavigate } from "react-router";
import { MapPin, QrCode, Search, ChevronRight } from "lucide-react";

export function DetectMarket() {
  const navigate = useNavigate();

  const nearbyMarkets = [
    { name: "Ottawa Sunday Market", distance: "120m away", isActive: true },
    { name: "Byward Farmers Market", distance: "2.3km away", isActive: false },
    { name: "Parkdale Market", distance: "4.1km away", isActive: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl text-gray-900">Find Your Market</h1>
        <p className="text-gray-600 mt-1">Select the market you're selling at today</p>
      </div>

      <div className="px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#44C062' }} />
          <div className="flex-1">
            <p className="text-sm text-green-900">
              We'll use your location to find nearby markets. You can also scan a QR code or search manually.
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {nearbyMarkets.map((market, index) => (
            <button
              key={index}
              onClick={() => navigate('/vendor/profile')}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-200 hover:border-green-300 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  market.isActive ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  <MapPin className={`w-6 h-6 ${
                    market.isActive ? '' : 'text-gray-400'
                  }`} style={market.isActive ? { color: '#44C062' } : {}} />
                </div>
                <div className="text-left">
                  <p className="text-gray-900">{market.name}</p>
                  <p className="text-sm text-gray-500">{market.distance}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:opacity-70 transition-colors" style={{ color: market.isActive ? '#44C062' : '' }} />
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <button className="w-full bg-white text-gray-700 py-4 rounded-2xl shadow-sm border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-3">
            <QrCode className="w-5 h-5" />
            Scan Market QR Code
          </button>

          <button className="w-full bg-white text-gray-700 py-4 rounded-2xl shadow-sm border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-3">
            <Search className="w-5 h-5" />
            Search Market Manually
          </button>
        </div>
      </div>
    </div>
  );
}
