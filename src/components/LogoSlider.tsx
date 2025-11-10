'use client';
import { useState } from 'react';

export default function LogoSlider() {
  const logos = [
    {
      name: 'Campbells',
      src: '/images/campbells-logo.png',
      alt: 'Campbells Logo',
      width: 180,
      height: 60
    },
    {
      name: '3M',
      src: '/images/3m-logo.png',
      alt: '3M Logo',
      width: 120,
      height: 60
    }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-gray-600 text-sm font-semibold uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </h3>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div 
            className="flex group"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}

function LogoItem({ logo }: { logo: typeof logos[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="flex-shrink-0 mx-12 flex items-center justify-center"
      style={{ minWidth: '200px' }}
    >
      <div className="transition-all duration-300">
        {!imageError ? (
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain max-w-[200px]"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-2xl font-bold text-gray-400">{logo.name}</span>
        )}
      </div>
    </div>
  );
}

