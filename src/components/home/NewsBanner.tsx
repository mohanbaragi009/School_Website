
"use client";

import React from 'react';
import { Megaphone } from 'lucide-react';

export function NewsBanner() {
  return (
    <div className="bg-primary text-white py-4 overflow-hidden border-b-2 border-[hsl(var(--highlight))]">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 font-bold whitespace-nowrap bg-[hsl(var(--highlight))] text-primary px-4 py-1.5 rounded-full mr-6 text-xs shadow-lg ring-2 ring-white/20">
          <Megaphone size={14} className="animate-bounce" /> LATEST UPDATES
        </div>
        <div className="flex-1 overflow-hidden relative h-6">
          <div className="absolute inset-0 animate-marquee flex items-center whitespace-nowrap gap-16 text-sm font-bold tracking-wide uppercase italic">
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
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
