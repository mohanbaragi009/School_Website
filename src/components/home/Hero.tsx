
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'school-hero');

  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
      <Image 
        src={heroImg?.imageUrl || 'https://picsum.photos/seed/school/1200/600'} 
        alt="School Hero"
        fill
        className="object-cover brightness-[0.4]"
        data-ai-hint="school building"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container mx-auto px-4 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full mb-4 animate-in fade-in slide-in-from-bottom-4">
            90+ YEARS OF ACADEMIC EXCELLENCE
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Shaping Futures, <span className="text-accent underline decoration-4 underline-offset-8">Empowering</span> Minds
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto font-medium drop-shadow-md">
            Join Seshadripuram Gateway, where tradition meets innovation to create leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-sm mx-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-lg px-8 py-6 rounded-full font-bold">
              Enroll Now <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full font-bold">
              Virtual Tour
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-12 hidden md:grid">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white">
              <BookOpen className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-70">Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white">
              <Users className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">15K+</div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-70">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-white">
              <Trophy className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">120+</div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-70">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
