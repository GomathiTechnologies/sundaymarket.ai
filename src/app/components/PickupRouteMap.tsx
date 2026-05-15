import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export function PickupRouteMap() {
  const navigate = useNavigate();

  const pickupStops = [
    {
      number: 1,
      vendor: "Blue Shoes Honey",
      booth: "#12",
      amount: 34,
      items: 3,
      position: { x: 20, y: 35 },
      status: "pending",
    },
    {
      number: 2,
      vendor: "Maple Farm",
      booth: "#18",
      amount: 18,
      items: 1,
      position: { x: 65, y: 50 },
      status: "pending",
    },
    {
      number: 3,
      vendor: "Local Butcher",
      booth: "#7",
      amount: 22,
      items: 2,
      position: { x: 35, y: 65 },
      status: "pending",
    },
  ];

  const [stops, setStops] = useState(pickupStops);

  const markPickedUp = (number: number) => {
    setStops(stops.map(stop =>
      stop.number === number ? { ...stop, status: "completed" } : stop
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl text-gray-900">Pickup Route</h1>
            <p className="text-sm text-gray-600">Ottawa Sunday Market</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" style={{ color: '#44C062' }} />
            <span>10:00 AM – 2:00 PM</span>
          </div>
          <div className="text-sm text-gray-600">
            Order: <span className="font-medium">MKT-1045</span>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 px-6 py-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="text-center mb-4">
            <h3 className="text-sm text-gray-700 mb-1">Market Layout</h3>
            <p className="text-xs text-gray-500">Main entrance at bottom</p>
          </div>

          {/* Simplified Market Map */}
          <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-green-50 to-amber-50 rounded-xl border-2 border-gray-300 overflow-hidden">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.05) 19px, rgba(0,0,0,0.05) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.05) 19px, rgba(0,0,0,0.05) 20px)'
            }}></div>

            {/* Market aisles/paths */}
            <div className="absolute left-0 right-0 top-1/2 h-8 bg-amber-100 border-y-2 border-amber-200 transform -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-amber-100 border-x-2 border-amber-200 transform -translate-x-1/2"></div>

            {/* Entrance marker */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs shadow-lg">
              ↑ Entrance
            </div>

            {/* Vendor booth markers */}
            {stops.map((stop) => (
              <div
                key={stop.number}
                className="absolute"
                style={{
                  left: `${stop.position.x}%`,
                  top: `${stop.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Booth background */}
                <div className="absolute w-16 h-16 bg-white/80 rounded-lg shadow-md border-2 border-gray-300 -z-10"></div>

                {/* Numbered marker */}
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white ${
                      stop.status === "completed" ? "bg-gray-400" : ""
                    }`}
                    style={stop.status === "pending" ? { backgroundColor: '#44C062' } : {}}
                  >
                    {stop.status === "completed" ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="text-lg font-bold">{stop.number}</span>
                    )}
                  </div>

                  {/* Booth label */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-white px-2 py-1 rounded shadow-md border border-gray-200 text-xs">
                      <p className="font-medium text-gray-900">{stop.booth}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative elements */}
            <div className="absolute top-2 left-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
              North
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#44C062' }}></div>
              <span className="text-gray-600">To Visit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600">Completed</span>
            </div>
          </div>
        </div>

        {/* Pickup Checklist */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-6">
          <h2 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" style={{ color: '#44C062' }} />
            Pickup Checklist
          </h2>

          <div className="space-y-3">
            {stops.map((stop) => (
              <div
                key={stop.number}
                className={`rounded-xl p-4 border-2 transition-all ${
                  stop.status === "completed"
                    ? "bg-gray-50 border-gray-200 opacity-75"
                    : "bg-white border-green-200"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      stop.status === "completed" ? "bg-gray-400" : ""
                    }`}
                    style={stop.status === "pending" ? { backgroundColor: '#44C062' } : {}}
                  >
                    {stop.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white font-bold">{stop.number}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-gray-900 font-medium">{stop.vendor}</p>
                        <p className="text-sm text-gray-600">Booth {stop.booth}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl text-gray-900">${stop.amount}</p>
                        <p className="text-xs text-gray-500">{stop.items} items</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 mb-3">
                      <p className="text-sm text-purple-900">
                        💳 Pay ${stop.amount} at booth
                      </p>
                    </div>

                    {stop.status === "pending" ? (
                      <button
                        onClick={() => markPickedUp(stop.number)}
                        className="w-full text-white py-2.5 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                        style={{ backgroundColor: '#44C062' }}
                      >
                        <CheckCircle className="w-4 h-4" />
                        Mark Picked Up
                      </button>
                    ) : (
                      <div className="w-full bg-gray-100 text-gray-600 py-2.5 rounded-lg flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Completed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <button
          onClick={() => navigate('/order-confirmation')}
          className="w-full bg-gray-900 text-white py-4 rounded-2xl hover:bg-gray-800 transition-colors"
        >
          Back to Order
        </button>
      </div>
    </div>
  );
}
