
import React from 'react';
import Image from 'next/image';
import { Quote, Award, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PrincipalMessage() {
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal-portrait');

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          {/* Image Container */}
          <div className="w-full lg:w-5/12 max-w-2xl lg:max-w-none relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
            
            <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group border-[12px] border-white bg-slate-100">
              <Image 
                src={principalImg?.imageUrl || 'https://picsum.photos/seed/principal/600/400'} 
                alt="Principal Portrait"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
                data-ai-hint="principal woman desk"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-8 md:p-10 text-white">
                <p className="font-bold text-2xl md:text-3xl leading-tight">Dr. Meera K. Rao</p>
                <p className="text-xs md:text-sm text-accent font-bold uppercase tracking-[0.3em] mt-3 italic flex items-center gap-2">
                  <span className="w-8 h-px bg-accent"></span> Principal
                </p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:bottom-16 md:-right-12 bg-accent text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl z-20 text-center transform rotate-6 scale-90 md:scale-110 ring-8 ring-white">
              <div className="text-3xl md:text-4xl font-bold">25+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90 mt-1">Years Experience</div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-7/12 space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-4 text-accent font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
              <div className="w-16 h-0.5 bg-accent"></div>
              Leadership Message
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary leading-[1.1]">
              Leading with Vision, <br className="hidden md:block" />
              <span className="text-accent relative">
                Learning
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M0 15C50 18 150 10 200 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span> with Heart
            </h2>
            
            <div className="relative pt-6">
              <Quote className="absolute -top-6 -left-8 md:-left-16 text-primary/5 w-24 h-24 md:w-48 md:h-48 -z-10" />
              <p className="text-xl md:text-3xl text-muted-foreground italic leading-[1.6] font-body font-medium">
                "Our mission at Seshadripuram Institute has always been to provide an environment where curiosity thrives and every student finds their unique path to success. We don't just teach subjects; we nurture character."
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-medium">
              Founded on the principles of academic rigor and holistic development, our institution has remained at the forefront of educational innovation in Bangalore for nearly a century.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Award size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Certified Academic Leader</span>
                </div>
                <p className="text-2xl font-headline font-bold text-primary italic">Dr. Meera K. Rao</p>
                <div className="h-0.5 w-24 bg-accent/30 my-2"></div>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">Ph.D. in Educational Leadership</p>
              </div>

              <div className="h-20 w-px bg-border/60 hidden sm:block"></div>
              
              <div className="space-y-2">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">Office Hours</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <p className="text-lg font-bold text-primary flex items-center gap-2">
                    <Clock size={18} className="text-accent" />
                    Mon - Fri: 9:00 AM - 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
