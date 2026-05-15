import { useNavigate } from "react-router";
import { Mic, X } from "lucide-react";
import { useEffect, useState } from "react";

export function VoiceSearchListening() {
  const navigate = useNavigate();
  const [transcript, setTranscript] = useState("");
  const [isPulsing, setIsPulsing] = useState(true);

  const fullTranscript = "I am looking for honey, tomato and onion… oh I forgot, I need some beef as well.";

  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex < fullTranscript.length) {
        setTranscript(fullTranscript.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          navigate('/voice-results');
        }, 1000);
      }
    }, 50);

    return () => clearInterval(typingTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl text-gray-900">What are you looking for?</h1>
        <button
          onClick={() => navigate('/market')}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="relative mb-8">
          {/* Pulsing rings */}
          {isPulsing && (
            <>
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#44C062', width: '200px', height: '200px', left: '-50px', top: '-50px' }}></div>
              <div className="absolute inset-0 rounded-full animate-pulse opacity-30" style={{ backgroundColor: '#44C062', width: '160px', height: '160px', left: '-30px', top: '-30px' }}></div>
            </>
          )}

          {/* Main microphone card */}
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-2xl" style={{ backgroundColor: '#44C062' }}>
            <Mic className="w-16 h-16 text-white" />
          </div>
        </div>

        <h2 className="text-xl text-gray-900 mb-2 text-center">Say your shopping list naturally</h2>
        <p className="text-sm text-gray-500 mb-8 text-center max-w-md">
          Just tell us what you need, we'll find it for you
        </p>

        {/* Live transcript */}
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8 min-h-[120px]">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#44C062' }}></div>
            <p className="flex-1 text-gray-900 text-lg leading-relaxed">
              {transcript}
              <span className="inline-block w-1 h-5 ml-1 bg-gray-900 animate-pulse"></span>
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/voice-results')}
          className="px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors shadow-md"
        >
          Stop Listening
        </button>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Listening... Speak clearly for best results
        </p>
      </div>
    </div>
  );
}
