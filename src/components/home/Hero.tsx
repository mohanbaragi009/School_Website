import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden flex items-center justify-center">
      <Image 
        src={heroImg?.imageUrl || 'https://picsum.photos/seed/school/1200/600'} 
        alt="School Hero"
        fill
        priority
        className="object-cover brightness-[0.4]"
      />
      
      {/* Dynamic Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-8 py-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-[10px] font-black rounded-full animate-in fade-in slide-in-from-bottom-8 duration-1000 backdrop-blur-xl uppercase tracking-[0.3em] shadow-2xl mx-auto">
          <span className="w-2 h-2 bg-[hsl(var(--highlight))] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,191,0,1)]"></span>
          90+ Years of Academic Excellence
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-tight max-w-5xl mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-1000 delay-200">
          Shaping Futures, <br className="hidden md:block" /> 
          <span className="text-[hsl(var(--highlight))] relative inline-block italic">
            Empowering
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[hsl(var(--highlight))]/60" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10C50 15 150 5 200 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span> Minds
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-blue-50/90 max-w-3xl mx-auto font-bold drop-shadow-2xl px-6 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Join Seshadripuram Institute, where tradition meets innovation to create the next generation of global leaders in Bangalore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 w-full max-w-lg mx-auto sm:max-w-none animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-base px-12 py-8 rounded-[2.5rem] font-black shadow-[0_20px_40px_-10px_rgba(139,92,246,0.6)] uppercase tracking-[0.1em] transition-all hover:scale-105 active:scale-95">
            Enroll Now <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/40 hover:bg-white hover:text-primary text-base px-12 py-8 rounded-[2.5rem] font-black backdrop-blur-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.1em] border-2">
            Virtual Tour
          </Button>
        </div>
        
        {/* Stats Section - Scaled Down */}
        <div className="hidden sm:grid grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto pt-16 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-700">
          {[
            { icon: BookOpen, val: "50+", label: "Academic Streams" },
            { icon: Users, val: "15K+", label: "Global Alumni" },
            { icon: Trophy, val: "120+", label: "Gold Medals" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2rem] text-white hover:bg-white/10 transition-all duration-500 group shadow-xl hover:-translate-y-2">
              <stat.icon className="mx-auto mb-4 text-[hsl(var(--highlight))] group-hover:scale-110 transition-transform duration-500" size={32} />
              <div className="text-3xl md:text-4xl font-black tracking-tighter mb-1">{stat.val}</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
