import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Search, MapPin, Clock, Plus } from "lucide-react";

export function VendorStorePage() {
  const navigate = useNavigate();
  const { vendorId } = useParams();

  const products = [
    {
      id: 1,
      name: "Blue Shoes Honey 500g",
      price: "$12",
      image: "🍯",
      inStock: true,
      quantity: 10,
    },
    {
      id: 2,
      name: "Pure Maple Syrup 500ml",
      price: "$18",
      image: "🍁",
      inStock: true,
      quantity: 8,
    },
    {
      id: 3,
      name: "Honey Jar Small 250g",
      price: "$8",
      image: "🍯",
      inStock: true,
      quantity: 12,
    },
    {
      id: 4,
      name: "Maple Butter 250g",
      price: "$14",
      image: "🧈",
      inStock: true,
      quantity: 6,
    },
    {
      id: 5,
      name: "Honeycomb Pack",
      price: "$22",
      image: "🍯",
      inStock: true,
      quantity: 5,
    },
    {
      id: 6,
      name: "Maple Candy Bag",
      price: "$10",
      image: "🍬",
      inStock: false,
      quantity: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl text-gray-900">Blue Shoes Honey</h1>
            <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Booth #12
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Pickup 10 AM - 2 PM
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-green-900">
            <strong>Local honey</strong> harvested from Ottawa Valley. All products made with pure, natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => navigate(`/market/product/${product.id}`)}
              disabled={!product.inStock}
              className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-200 text-left transition-all ${
                product.inStock
                  ? 'hover:border-green-300'
                  : 'opacity-60'
              }`}
            >
              <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-5xl mb-3">
                {product.image}
              </div>
              <p className="text-sm text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </p>
              <div className="flex items-center justify-between">
                <span style={{ color: '#44C062' }}>{product.price}</span>
                {product.inStock ? (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#44C062' }}>
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <span className="text-xs text-red-600">Sold Out</span>
                )}
              </div>
              {product.inStock && (
                <p className="text-xs text-gray-500 mt-1">
                  {product.quantity} available
                </p>
              )}
            </button>
          ))}
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
