
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center bg-slate-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px] animate-bounce duration-[10s]"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-blue-400/5 rounded-full blur-[120px]"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center space-y-12">
        {/* Premium Badge from Image */}
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-500 group">
          <Sparkles className="text-accent w-6 h-6 animate-pulse" />
          <span className="text-2xl font-black text-primary tracking-tight">90+</span>
          <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.3em] border-l border-primary/10 pl-4 hidden sm:block">Years of Excellence</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.05] max-w-5xl mx-auto tracking-tight">
            Shaping Futures, <br className="hidden md:block" /> 
            <span className="text-accent italic relative inline-block">
              Empowering
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-accent/20" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M0 10C50 15 150 5 200 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span> Minds
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed px-6 opacity-90">
            Join Seshadripuram Institute, where tradition meets global innovation to nurture the next generation of visionary leaders in Bangalore.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 w-full max-w-lg mx-auto sm:max-w-none">
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base px-14 py-10 rounded-[2rem] font-bold shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
            Enroll Now <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-primary border-primary/10 bg-white/40 backdrop-blur-md hover:bg-white text-base px-14 py-10 rounded-[2rem] font-bold transition-all hover:scale-105 active:scale-95 uppercase tracking-widest border-2">
            Virtual Tour
          </Button>
        </div>
        
        {/* Glass Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto pt-20">
          {[
            { icon: BookOpen, val: "50+", label: "Academic Streams", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: Users, val: "15K+", label: "Global Alumni", color: "text-purple-600", bg: "bg-purple-50" },
            { icon: Trophy, val: "120+", label: "Gold Medals", color: "text-orange-500", bg: "bg-orange-50" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-3xl border border-white/60 p-10 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] transition-all duration-700 group text-center relative overflow-hidden hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className={`p-5 rounded-3xl ${stat.bg} shadow-sm inline-block mb-6 group-hover:rotate-12 transition-transform ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <div className="text-5xl font-black tracking-tighter mb-2 text-primary">{stat.val}</div>
              <div className="text-[11px] uppercase tracking-[0.3em] font-black text-muted-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
