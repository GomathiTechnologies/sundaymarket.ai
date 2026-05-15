import { useNavigate } from "react-router";
import { ArrowLeft, Camera, Upload, Video } from "lucide-react";
import { useEffect, useState } from "react";

export function UploadPhotos() {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!showPreview) {
      return;
    }

    const timer = window.setTimeout(() => {
      navigate('/vendor/ai-scan-progress');
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [navigate, showPreview]);

  const handleStartScan = () => {
    setShowPreview(true);
  };

  const photoSlots = [
    { id: 1, title: "Full Booth Photo", description: "Take a clear photo from the front of your table", icon: Camera },
    { id: 2, title: "Left Side Photo", description: "Capture products on the left side", icon: Camera },
    { id: 3, title: "Right Side Photo", description: "Capture products on the right side", icon: Camera },
    { id: 4, title: "Price Cards Close-up", description: "Clear shot of all price labels", icon: Camera },
  ];

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md w-full">
          <img src="/resources/image-17.png" alt="AI scan preview" className="w-full h-auto object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl text-gray-900">Upload Booth Photos</h1>
          <p className="text-sm text-gray-600">Help AI detect your products</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
          <p className="text-sm text-green-900">
            <strong>Tip:</strong> Clear, well-lit photos help AI detect products accurately. Make sure price cards are visible!
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {photoSlots.map((slot) => (
            <button
              key={slot.id}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border-2 border-dashed border-gray-300 hover:border-green-400 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                  <slot.icon className="w-8 h-8 text-gray-400 group-hover:opacity-70 transition-colors" style={{ color: '#44C062' }} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900">{slot.title}</p>
                  <p className="text-sm text-gray-500">{slot.description}</p>
                </div>
                <Upload className="w-5 h-5 text-gray-400 group-hover:opacity-70 transition-colors" style={{ color: '#44C062' }} />
              </div>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-3">Optional: Upload Video Tour</p>
          <button className="w-full bg-white rounded-2xl p-4 shadow-sm border-2 border-dashed border-gray-300 hover:border-green-400 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                <Video className="w-8 h-8 text-gray-400 group-hover:opacity-70 transition-colors" style={{ color: '#44C062' }} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-900">30-second Video</p>
                <p className="text-sm text-gray-500">Pan across your booth for better detection</p>
              </div>
              <Upload className="w-5 h-5 text-gray-400 group-hover:opacity-70 transition-colors" style={{ color: '#44C062' }} />
            </div>
          </button>
        </div>

        <button
          onClick={handleStartScan}
          className="w-full text-white py-4 rounded-2xl shadow-md hover:opacity-90 transition-all"
          style={{ backgroundColor: '#44C062' }}
        >
          Start AI Scan
        </button>
      </div>
    </div>
  );
}
