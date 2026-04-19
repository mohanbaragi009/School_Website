
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden flex items-center justify-center bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/50 backdrop-blur-xl border border-white/60 text-primary text-[10px] font-black rounded-full uppercase tracking-[0.3em] shadow-sm mx-auto">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.6)]"></span>
          90+ Years of Academic Excellence
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary leading-[1.1] max-w-5xl mx-auto tracking-tight">
          Shaping Futures, <br className="hidden md:block" /> 
          <span className="text-accent italic relative">
            Empowering
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-accent/20" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
              <path d="M0 10C50 15 150 5 200 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span> Minds
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed px-6">
          Join Seshadripuram Institute, where tradition meets innovation to create the next generation of global leaders in Bangalore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 w-full max-w-lg mx-auto sm:max-w-none">
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base px-12 py-8 rounded-full font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
            Enroll Now <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-primary border-primary/20 bg-white/40 backdrop-blur-md hover:bg-white text-base px-12 py-8 rounded-full font-bold transition-all hover:scale-105 active:scale-95 uppercase tracking-widest border-2">
            Virtual Tour
          </Button>
        </div>
        
        {/* Glass Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto pt-16">
          {[
            { icon: BookOpen, val: "50+", label: "Academic Streams", color: "text-blue-600" },
            { icon: Users, val: "15K+", label: "Global Alumni", color: "text-purple-600" },
            { icon: Trophy, val: "120+", label: "Gold Medals", color: "text-orange-500" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-2xl border border-white/80 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group text-center">
              <div className={`p-4 rounded-2xl bg-white shadow-sm inline-block mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-bold tracking-tighter mb-1 text-primary">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
