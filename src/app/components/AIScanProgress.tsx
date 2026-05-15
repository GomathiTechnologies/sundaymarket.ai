import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Loader2, Check } from "lucide-react";

export function AIScanProgress() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const steps = [
    { id: 1, label: "Detecting products", completed: false },
    { id: 2, label: "Reading price cards", completed: false },
    { id: 3, label: "Grouping duplicates", completed: false },
    { id: 4, label: "Finding missing prices", completed: false },
    { id: 5, label: "Creating draft catalog", completed: false },
  ];

  const uploadedImages = [
    "/src/imports/image.png",
    "/src/imports/image-1.png",
    "/src/imports/image-2.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => navigate('/vendor/scan-results'), 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [navigate]);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % uploadedImages.length);
    }, 2000);

    return () => clearInterval(imageTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Thumbnail Carousel */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {uploadedImages.map((image, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                index === activeImage
                  ? 'border-green-400 ring-2 ring-green-200'
                  : 'border-gray-200'
              }`}
            >
              <img
                src={image}
                alt={`Booth photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === activeImage && (
                <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 text-white animate-spin drop-shadow-lg" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Analyzing {uploadedImages.length} photos
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <Loader2 className="w-12 h-12 animate-spin" style={{ color: '#44C062' }} />
      </div>

      <h1 className="text-2xl text-gray-900 mb-2">AI Scanning in Progress</h1>
      <p className="text-gray-600 mb-12 text-center">
        Analyzing your booth photos...
      </p>

      <div className="w-full max-w-md space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`bg-white rounded-2xl p-4 shadow-sm border transition-all ${
              index <= currentStep
                ? 'border-green-300 bg-green-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  index < currentStep
                    ? 'bg-green-500'
                    : index === currentStep
                    ? ''
                    : 'bg-gray-200'
                }`}
                style={index === currentStep ? { backgroundColor: '#44C062' } : {}}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : index === currentStep ? (
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                ) : (
                  <span className="text-sm text-gray-500">{step.id}</span>
                )}
              </div>
              <p
                className={`flex-1 ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-8">This usually takes 30-60 seconds</p>
      </div>
    </div>
  );
}
