import { useNavigate } from "react-router";
import { Search, MapPin, Clock, ChevronRight, User, Mic } from "lucide-react";
import { ProductImage, productImages } from "./ProductImage";

export function CustomerMarketHome() {
  const navigate = useNavigate();

  const categories = [
    { name: "Honey", icon: "🍯", count: 12 },
    { name: "Bakery", icon: "🥖", count: 8 },
    { name: "Maple", icon: "🍁", count: 15 },
    { name: "Vegetables", icon: "🥕", count: 20 },
    { name: "Snacks", icon: "🍪", count: 6 },
    { name: "Handmade", icon: "🧶", count: 9 },
  ];

  const vendors = [
    {
      id: 1,
      name: "Blue Shoes Honey",
      booth: "#12",
      category: "Honey & Maple",
      products: 34,
      image: productImages.honeyJar,
      featured: true,
    },
    {
      id: 2,
      name: "Maple Farm",
      booth: "#18",
      category: "Maple Products",
      products: 22,
      image: productImages.mapleSyrup,
      featured: true,
    },
    {
      id: 3,
      name: "Fresh Greens",
      booth: "#5",
      category: "Vegetables",
      products: 18,
      image: productImages.tomatoes,
      featured: false,
    },
    {
      id: 4,
      name: "Baker's Corner",
      booth: "#24",
      category: "Bakery",
      products: 15,
      image: productImages.bakery,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="px-6 py-6 text-white" style={{ background: 'linear-gradient(to bottom right, #44C062, #3BA854)' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl mb-1">Ottawa Sunday Market</h1>
            <div className="flex items-center gap-2 text-sm text-green-100">
              <MapPin className="w-4 h-4" />
              <span>Lansdowne Park</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm mb-4">
          <Clock className="w-4 h-4" />
          <span>Open today 9:00 AM - 2:00 PM</span>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search or say what you need..."
            className="w-full bg-white text-gray-900 rounded-2xl pl-12 pr-14 py-4 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
          />
          <button
            onClick={() => navigate('/voice-search')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
            style={{ color: '#44C062' }}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-green-100 mt-2 text-center">
          Try: "I need honey, tomatoes, onions and beef"
        </p>
      </div>

      <div className="px-6 py-6">
        <div className="mb-6">
          <h2 className="text-lg text-gray-900 mb-4">Shop by Category</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 hover:border-green-300 transition-all text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="text-sm text-gray-900 mb-1">{category.name}</p>
                <p className="text-xs text-gray-500">{category.count} items</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg text-gray-900 mb-4">Featured Vendors</h2>
          <div className="space-y-3">
            {vendors.map((vendor) => (
              <button
                key={vendor.id}
                onClick={() => navigate(`/market/vendor/${vendor.id}`)}
                className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-200 hover:border-green-300 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-50 rounded-xl overflow-hidden flex-shrink-0">
                    <ProductImage src={vendor.image} alt={vendor.name} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-gray-900">{vendor.name}</p>
                      {vendor.featured && (
                        <span className="px-2 py-0.5 bg-green-100 rounded text-xs" style={{ color: '#44C062' }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{vendor.category}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>Booth {vendor.booth}</span>
                      <span>•</span>
                      <span>{vendor.products} products</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:opacity-70 transition-colors flex-shrink-0" style={{ color: '#44C062' }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <button
          onClick={() => navigate('/cart')}
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
          style={{ backgroundColor: '#44C062' }}
        >
          View Cart
          <span className="px-2 py-0.5 bg-white/20 rounded-full text-sm">3</span>
        </button>
      </div>
    </div>
  );
}
