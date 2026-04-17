
"use client";

import React from 'react';
import { Megaphone } from 'lucide-react';

export function NewsBanner() {
  return (
    <div className="bg-accent text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 font-bold whitespace-nowrap bg-white text-accent px-3 py-1 rounded-sm mr-4 text-xs">
          <Megaphone size={14} /> LATEST NEWS
        </div>
        <div className="flex-1 overflow-hidden relative h-6">
          <div className="absolute inset-0 animate-marquee flex items-center whitespace-nowrap gap-12 text-sm font-medium">
            <span>• Admissions for Academic Year 2024-25 are now open for all streams.</span>
            <span>• Congratulations to our 2023 batch for achieving 100% results!</span>
            <span>• Annual Sports Meet "Spardha 2024" scheduled for next Friday.</span>
            <span>• Workshop on AI in Education for teachers on 15th December.</span>
            <span>• New Digital Library wing inaugurated by Honorable Minister.</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
