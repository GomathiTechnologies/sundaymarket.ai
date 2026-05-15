import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Minus, Plus, MapPin } from "lucide-react";
import { useState } from "react";
import { ProductImage, productImages } from "./ProductImage";

export function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Blue Shoes Honey 500g",
    price: 12,
    image: productImages.honeyJar,
    description: "Pure, raw honey harvested from local hives in the Ottawa Valley. Unfiltered and unpasteurized to preserve natural enzymes and nutrients.",
    vendor: "Blue Shoes Honey",
    booth: "#12",
    category: "Honey",
    available: 10,
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < product.available) setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg text-gray-900">Product Details</h1>
      </div>

      <div className="bg-white px-6 py-8 mb-6">
        <div className="w-full max-w-xs mx-auto aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden mb-6">
          <ProductImage src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="px-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="mb-4">
            <h2 className="text-2xl text-gray-900 mb-2">{product.name}</h2>
            <p className="text-3xl mb-3" style={{ color: '#44C062' }}>${product.price}</p>
            <span className="px-3 py-1 bg-green-100 rounded-full text-sm" style={{ color: '#44C062' }}>
              {product.category}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">{product.vendor}</p>
              <p className="text-xs text-gray-600">Booth {product.booth}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-700">Quantity</span>
            <span className="text-sm text-gray-500">
              {product.available} available
            </span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <Minus className="w-5 h-5 text-gray-700" />
            </button>
            <span className="text-3xl text-gray-900 w-16 text-center">{quantity}</span>
            <button
              onClick={handleIncrease}
              disabled={quantity >= product.available}
              className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <Plus className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
          <p className="text-sm text-purple-900">
            <strong>Payment:</strong> Pay at pickup. Reserve now and pay when you collect from the vendor booth.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">Total</span>
          <span className="text-2xl text-gray-900">${(product.price * quantity).toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate('/cart')}
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all"
          style={{ backgroundColor: '#44C062' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
