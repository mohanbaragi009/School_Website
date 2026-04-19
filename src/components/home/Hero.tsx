
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full min-h-[600px] md:h-[700px] lg:h-[900px] overflow-hidden">
      <Image 
        src={heroImg?.imageUrl || 'https://picsum.photos/seed/school/1200/600'} 
        alt="School Hero"
        fill
        priority
        className="object-cover brightness-[0.35]"
      />
      
      {/* Dynamic Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/90"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8 md:space-y-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/20 border border-accent/30 text-accent text-[10px] md:text-xs font-black rounded-full animate-in fade-in slide-in-from-bottom-6 duration-1000 backdrop-blur-md uppercase tracking-[0.3em] shadow-2xl">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse shadow-[0_0_12px_rgba(var(--accent),1)]"></span>
            90+ Years of Academic Excellence
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white leading-[1] max-w-6xl mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            Shaping Futures, <br className="hidden md:block" /> 
            <span className="text-accent relative inline-block italic">
              Empowering
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-accent/40" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M0 10C50 15 150 5 200 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span> Minds
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-blue-50/90 max-w-3xl mx-auto font-bold drop-shadow-xl px-6 leading-relaxed">
            Join Seshadripuram Institute, where tradition meets innovation to create the next generation of global leaders in Bangalore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 w-full max-w-md mx-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-base px-12 py-8 rounded-[2rem] font-black shadow-[0_20px_40px_-10px_rgba(var(--accent),0.5)] uppercase tracking-widest transition-all hover:scale-110 active:scale-95">
              Enroll Now <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/40 hover:bg-white hover:text-primary text-base px-12 py-8 rounded-[2rem] font-black backdrop-blur-xl transition-all hover:scale-110 active:scale-95 uppercase tracking-widest border-2">
              Virtual Tour
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="hidden sm:grid grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto pt-16 md:pt-24">
            {[
              { icon: BookOpen, val: "50+", label: "Academic Streams" },
              { icon: Users, val: "15K+", label: "Global Alumni" },
              { icon: Trophy, val: "120+", label: "Gold Medals" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] text-white hover:bg-white/10 transition-all duration-500 group shadow-2xl hover:-translate-y-3">
                <stat.icon className="mx-auto mb-6 text-accent group-hover:scale-125 transition-transform duration-500" size={36} />
                <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">{stat.val}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
