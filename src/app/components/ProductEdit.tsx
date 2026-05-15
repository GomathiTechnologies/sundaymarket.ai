import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "Maple Candy Bag",
    category: "Maple",
    price: "",
    quantity: "15",
    description: "Delicious maple candy made from pure maple syrup",
    status: "available",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/vendor/catalog-review');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Edit Product</h1>
          <p className="text-sm text-gray-600">Update product details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4">
            🍬
          </div>
          <button
            type="button"
            className="w-full text-sm hover:opacity-70 transition-opacity"
            style={{ color: '#44C062' }}
          >
            Change Image
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Product Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            >
              <option value="Honey">Honey</option>
              <option value="Maple">Maple</option>
              <option value="Bakery">Bakery</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Snacks">Snacks</option>
              <option value="Handmade">Handmade</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="e.g., $12"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Quantity Available Today</label>
            <input
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            >
              <option value="available">Available</option>
              <option value="sold_out">Sold Out</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all mt-8"
          style={{ backgroundColor: '#44C062' }}
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
