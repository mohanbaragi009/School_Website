
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Image 
        src={heroImg?.imageUrl || 'https://picsum.photos/seed/school/1200/600'} 
        alt="School Hero"
        fill
        priority
        className="object-cover brightness-[0.4]"
        data-ai-hint="school building"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center space-y-6 md:space-y-8">
          <div className="inline-block px-4 py-1.5 bg-accent text-white text-[10px] md:text-xs font-bold rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            90+ YEARS OF ACADEMIC EXCELLENCE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-2xl">
            Shaping Futures, <br className="hidden md:block" /> 
            <span className="text-accent relative inline-block">
              Empowering
              <span className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-accent/30 -z-10 translate-y-1 md:translate-y-2"></span>
            </span> Minds
          </h1>
          <p className="text-base md:text-xl text-blue-50 max-w-2xl mx-auto font-medium drop-shadow-md px-4">
            Join Seshadripuram Institute, where tradition meets innovation to create leaders of tomorrow in the heart of Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full max-w-md mx-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-base md:text-lg px-8 py-6 rounded-full font-bold shadow-xl shadow-accent/20">
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-8 py-6 rounded-full font-bold backdrop-blur-sm">
              Virtual Tour
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 md:pt-16 px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <BookOpen className="mx-auto mb-2 text-accent" size={24} />
              <div className="text-xl md:text-3xl font-bold">50+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-semibold opacity-80">Academic Streams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl text-white transform hover:scale-105 transition-transform delay-75">
              <Users className="mx-auto mb-2 text-accent" size={24} />
              <div className="text-xl md:text-3xl font-bold">15K+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-semibold opacity-80">Global Alumni</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl text-white transform hover:scale-105 transition-transform delay-150">
              <Trophy className="mx-auto mb-2 text-accent" size={24} />
              <div className="text-xl md:text-3xl font-bold">120+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-semibold opacity-80">Gold Medals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
