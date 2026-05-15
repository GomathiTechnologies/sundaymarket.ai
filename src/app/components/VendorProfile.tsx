import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export function VendorProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    phone: "",
    email: "",
    boothNumber: "",
    pickupInstructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/vendor/create-market-day');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Vendor Profile</h1>
          <p className="text-sm text-gray-600">Set up your store information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-6">
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Store Name</label>
            <input
              type="text"
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
              placeholder="e.g., Blue Shoes Honey"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Owner Name</label>
            <input
              type="text"
              value={formData.ownerName}
              onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
              placeholder="e.g., Priya Sharma"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g., +1 613 555 0123"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g., hello@blueshoes.ai"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Booth Number</label>
            <input
              type="text"
              value={formData.boothNumber}
              onChange={(e) => setFormData({ ...formData, boothNumber: e.target.value })}
              placeholder="e.g., Booth 12"
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": "#44C062" } as React.CSSProperties}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Pickup Instructions</label>
            <textarea
              value={formData.pickupInstructions}
              onChange={(e) => setFormData({ ...formData, pickupInstructions: e.target.value })}
              placeholder="e.g., Look for the blue tent with honey jars"
              rows={3}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all mt-8"
          style={{ backgroundColor: '#44C062' }}
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
}
