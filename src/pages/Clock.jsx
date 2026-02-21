import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeWithSeconds = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const expirationTime = new Date(currentTime.getTime() + 60 * 60 * 1000);
  const formatExpiration = (date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <div className="pt-2 pr-4 pb-1 pl-4 flex items-center justify-between border-b border-gray-200">
        <div>
          <h1 className="text-xl font-bold text-gray-800">CTtransit</h1>
          <p className="text-gray-600 text-sm font-medium">Show operator your ticket</p>
        </div>
        <button className="p-2 text-gray-400">
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Content */}
      <div className="pr-4 pb-16 pl-4 flex-1 flex flex-col items-center justify-center space-y-16">
        
        {/* Animated Circle */}
        <div className="relative flex items-center justify-center -mt-8">
          {/* Animated orange circle */}
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              animation: 'pulse-circle 5s ease-in-out infinite',
              backgroundColor: '#019E73',
              width: '192px',
              height: '192px'
            }}>

          </div>
          
          {/* Fixed white center circle with logo */}
          <div className="absolute w-32 h-32 rounded-full bg-white flex items-center justify-center">
            <img
              src="https://www.cttransit.com/sites/default/files/logo_3.png"
              alt="CT Transit Logo"
              className="w-16 h-16 object-contain" />

          </div>
        </div>

        {/* Time Display */}
        <div className="text-center w-full max-w-sm flex flex-col items-center space-y-8">
          <div className="text-5xl font-bold text-gray-700 tracking-wider">
            {formatTimeWithSeconds(currentTime)}
          </div>
          
          {/* Ticket Info */}
          <div className="bg-white pt-5 pr-5 pb-5 pl-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.08)] w-full">
            <h2 className="text-2xl text-xl font-semibold text-left">Adult 10 Ride - Local Service

            </h2>
            <p className="text-left text-xs leading-relaxed">Hartford, New Haven, Stamford, Bristol, Meriden, New Britain, Wallingford, and Waterbury

            </p>
            <div className="pt-4 mt-4">
              <p className="text-gray-500 text-sm font-bold text-left">Expires {formatExpiration(expirationTime)}

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes pulse-circle {
          0% {
            transform: scale(0.85);
          }
          16.6% { /* First small pulse */
            transform: scale(0.95);
          }
          33.3% {
            transform: scale(0.85);
          }
          50% { /* Second medium pulse */
            transform: scale(1.05);
          }
          66.6% {
            transform: scale(0.85);
          }
          83.3% { /* Third large pulse */
            transform: scale(1.15);
          }
          100% {
            transform: scale(0.85);
          }
        }
      `}</style>
    </div>);

}
