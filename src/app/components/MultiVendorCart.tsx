import { useNavigate } from "react-router";
import { ArrowLeft, Trash2, MapPin } from "lucide-react";
import { ProductImage, productImages } from "./ProductImage";

export function MultiVendorCart() {
  const navigate = useNavigate();

  const cartItems = [
    {
      vendor: {
        id: 1,
        name: "Blue Shoes Honey",
        booth: "#12",
      },
      items: [
        { id: 1, name: "Blue Shoes Honey 500g", quantity: 2, price: 12, image: productImages.honeyJar },
        { id: 2, name: "Maple Candy Bag", quantity: 1, price: 10, image: productImages.mapleCandy },
      ],
      subtotal: 34,
    },
    {
      vendor: {
        id: 2,
        name: "Maple Farm",
        booth: "#18",
      },
      items: [
        { id: 3, name: "Pure Maple Syrup 500ml", quantity: 1, price: 18, image: productImages.mapleSyrup },
      ],
      subtotal: 18,
    },
  ];

  const total = cartItems.reduce((sum, vendor) => sum + vendor.subtotal, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Your Cart</h1>
          <p className="text-sm text-gray-600">
            {cartItems.reduce((sum, v) => sum + v.items.length, 0)} items from {cartItems.length} vendors
          </p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-6">
          {cartItems.map((vendorCart, vIndex) => (
            <div key={vIndex} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-5 py-4 border-b border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: '#44C062' }} />
                    <div>
                      <p className="text-gray-900">{vendorCart.vendor.name}</p>
                      <p className="text-sm text-gray-600">Booth {vendorCart.vendor.booth}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-4 mb-4">
                  {vendorCart.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                        <ProductImage src={item.image} alt={item.name} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 mb-1">{item.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            ${item.price} × {item.quantity}
                          </span>
                          <span style={{ color: '#44C062' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-xl text-gray-900">${vendorCart.subtotal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mt-6">
          <h3 className="text-gray-900 mb-2">✨ One checkout reservation</h3>
          <p className="text-sm text-green-800 mb-2">
            Pay each vendor at pickup when you collect your items
          </p>
          <div className="flex items-center gap-2 text-xs text-green-700 pt-2 border-t border-green-200">
            <span className="px-2 py-1 bg-white rounded">
              {cartItems.length} vendors
            </span>
            <span>•</span>
            <span>Pick up at their booths</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-600">Total reservation amount</p>
            <p className="text-xs text-gray-500">Pay at each booth</p>
          </div>
          <span className="text-3xl text-gray-900">${total}</span>
        </div>
        <button
          onClick={() => navigate('/order-confirmation')}
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all"
          style={{ backgroundColor: '#44C062' }}
        >
          Place Pickup Order
        </button>
      </div>
    </div>
  );
}
