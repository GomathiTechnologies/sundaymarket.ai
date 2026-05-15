import { useNavigate } from "react-router";
import { ArrowLeft, X, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { ProductImage, productImages } from "./ProductImage";

export function AIShoppingListResults() {
  const navigate = useNavigate();
  const [items, setItems] = useState(["Honey", "Tomato", "Onion", "Beef"]);
  const [cartCount, setCartCount] = useState(0);

  const removeItem = (item: string) => {
    setItems(items.filter(i => i !== item));
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const productResults = {
    Honey: [
      { id: 1, name: "Blue Shoes Honey 500g", vendor: "Blue Shoes Honey", price: "$12", image: productImages.honeyJar },
      { id: 2, name: "Wildflower Honey 250g", vendor: "Blue Shoes Honey", price: "$8", image: productImages.honeycomb },
    ],
    Tomato: [
      { id: 3, name: "Fresh Tomatoes 1 lb", vendor: "Green Valley Produce", price: "$3.99", image: productImages.tomatoes },
    ],
    Onion: [
      { id: 4, name: "Red Onion 2 lb", vendor: "Green Valley Produce", price: "$2.99", image: productImages.redOnions },
    ],
    Beef: [
      { id: 5, name: "Beef Steak 1 lb", vendor: "Local Butcher", price: "$14.99", image: productImages.beefSteak },
      { id: 6, name: "Ground Beef 1 lb", vendor: "Local Butcher", price: "$9.99", image: productImages.groundBeef },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate('/market')} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl text-gray-900">Shopping Assistant</h1>
          <p className="text-sm text-gray-600">Voice search results</p>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Extracted Items */}
        <div className="mb-6">
          <h2 className="text-sm text-gray-700 mb-3">Your shopping list:</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 shadow-sm"
                style={{ borderColor: '#44C062' }}
              >
                <span className="text-gray-900">{item}</span>
                <button
                  onClick={() => removeItem(item)}
                  className="w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-green-900">
            ✨ We found matching products from vendors in this market
          </p>
        </div>

        {/* Product Results by Category */}
        <div className="space-y-6">
          {items.map((item) => {
            const products = productResults[item as keyof typeof productResults];
            if (!products) return null;

            return (
              <div key={item}>
                <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 rounded-full text-sm" style={{ color: '#44C062' }}>
                    {item}
                  </span>
                  <span className="text-sm text-gray-500">({products.length} found)</span>
                </h3>

                <div className="space-y-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200"
                    >
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                          <ProductImage src={product.image} alt={product.name} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-gray-900 mb-1">{product.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{product.vendor}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg" style={{ color: '#44C062' }}>{product.price}</span>
                            <button
                              onClick={addToCart}
                              className="flex items-center gap-2 px-4 py-2 text-white rounded-xl hover:opacity-90 transition-all"
                              style={{ backgroundColor: '#44C062' }}
                            >
                              <Plus className="w-4 h-4" />
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Cart Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
          <button
            onClick={() => navigate('/cart')}
            className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: '#44C062' }}
          >
            <ShoppingCart className="w-5 h-5" />
            View Cart
            <span className="px-2 py-0.5 bg-white/20 rounded-full text-sm">{cartCount}</span>
          </button>
        </div>
      )}
    </div>
  );
}
