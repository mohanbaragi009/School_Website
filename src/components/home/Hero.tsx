
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
      <Image 
        src={heroImg?.imageUrl || 'https://picsum.photos/seed/school/1200/600'} 
        alt="School Hero"
        fill
        priority
        className="object-cover brightness-[0.35]"
      />
      
      {/* Dynamic Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/80"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6 md:space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 text-accent text-[10px] md:text-xs font-bold rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-md uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            90+ Years of Academic Excellence
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white leading-[1.05] max-w-5xl mx-auto drop-shadow-2xl">
            Shaping Futures, <br className="hidden md:block" /> 
            <span className="text-accent relative inline-block italic">
              Empowering
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M0 10C50 15 150 5 200 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span> Minds
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl text-blue-50/80 max-w-2xl mx-auto font-medium drop-shadow-md px-4 leading-relaxed">
            Join Seshadripuram Institute, where tradition meets innovation to create the next generation of global leaders in Bangalore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 w-full max-w-md mx-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-sm md:text-base px-10 py-7 rounded-2xl font-bold shadow-2xl shadow-accent/30 uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-primary text-sm md:text-base px-10 py-7 rounded-2xl font-bold backdrop-blur-md transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
              Virtual Tour
            </Button>
          </div>
          
          {/* Stats Section - Hidden on tiny screens, dynamic on larger */}
          <div className="hidden sm:grid grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto pt-12 md:pt-20">
            {[
              { icon: BookOpen, val: "50+", label: "Academic Streams" },
              { icon: Users, val: "15K+", label: "Global Alumni" },
              { icon: Trophy, val: "120+", label: "Gold Medals" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-8 rounded-[2rem] text-white hover:bg-white/10 transition-colors group">
                <stat.icon className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" size={28} />
                <div className="text-2xl md:text-4xl font-bold tracking-tight">{stat.val}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
