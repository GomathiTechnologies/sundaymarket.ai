import { useNavigate } from "react-router";
import { ArrowLeft, Check, Edit, Trash2, AlertCircle } from "lucide-react";
import { ProductImage, productImages } from "./ProductImage";

export function CatalogReview() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Blue Shoes Honey 500g",
      price: "$12",
      quantity: 10,
      status: "approved",
      confidence: "high",
      image: productImages.honeyJar,
    },
    {
      id: 2,
      name: "Pure Maple Syrup 500ml",
      price: "$18",
      quantity: 8,
      status: "approved",
      confidence: "high",
      image: productImages.mapleSyrup,
    },
    {
      id: 3,
      name: "Maple Candy Bag",
      price: null,
      quantity: 15,
      status: "needs_review",
      confidence: "medium",
      image: productImages.mapleCandy,
    },
    {
      id: 4,
      name: "Honey Jar Small",
      price: "$8",
      quantity: 12,
      status: "duplicate",
      confidence: "medium",
      image: productImages.honeyJar,
    },
    {
      id: 5,
      name: "Maple Butter 250g",
      price: "$14",
      quantity: 6,
      status: "approved",
      confidence: "high",
      image: productImages.mapleButter,
    },
    {
      id: 6,
      name: "Honeycomb Pack",
      price: "$22",
      quantity: 5,
      status: "approved",
      confidence: "high",
      image: productImages.honeycomb,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Approved</span>;
      case "needs_review":
        return <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">Needs Review</span>;
      case "duplicate":
        return <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Review</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl text-gray-900">Review Catalog</h1>
          <p className="text-sm text-gray-600">42 products detected</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#44C062' }} />
          <p className="text-sm text-green-900">
            3 items need your attention before publishing
          </p>
        </div>

        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <ProductImage src={product.image} alt={product.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-gray-900">{product.name}</h3>
                    {getStatusBadge(product.status)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    {product.price ? (
                      <span>{product.price}</span>
                    ) : (
                      <span className="text-red-600">Price missing</span>
                    )}
                    <span>Qty: {product.quantity}</span>
                    <span className="text-xs text-gray-500">
                      {product.confidence === "high" ? "✓ High confidence" : "~ Medium confidence"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {product.status === "approved" ? (
                      <button className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
                        <Check className="w-4 h-4" />
                        Approved
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/vendor/product-edit/${product.id}`)}
                        className="flex items-center gap-2 px-3 py-1.5 text-white rounded-lg text-sm hover:opacity-90 transition-all"
                        style={{ backgroundColor: '#44C062' }}
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-action-bar">
        <button
          onClick={() => navigate('/vendor/publish')}
          className="mobile-primary-action text-white hover:opacity-90"
          style={{ backgroundColor: '#44C062' }}
        >
          Continue to Publish
        </button>
      </div>
    </div>
  );
}
