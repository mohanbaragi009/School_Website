import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PrincipalMessage() {
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal-portrait');

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Image Container */}
          <div className="w-full lg:w-5/12 max-w-md lg:max-w-none relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white">
              <Image 
                src={principalImg?.imageUrl || 'https://picsum.photos/seed/principal/400/500'} 
                alt="Principal Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                data-ai-hint="professional portrait"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 md:p-8 text-white">
                <p className="font-bold text-xl md:text-2xl leading-none">Dr. Meera K. Rao</p>
                <p className="text-xs md:text-sm text-accent font-semibold uppercase tracking-widest mt-2 italic">Principal, Seshadripuram Gateway</p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-12 md:-right-8 bg-accent text-white p-4 md:p-6 rounded-2xl shadow-xl z-20 text-center transform rotate-3">
              <div className="text-2xl md:text-3xl font-bold">25+</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-90">Years Experience</div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-7/12 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-3 text-accent font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              <div className="w-12 h-0.5 bg-accent"></div>
              Leadership Message
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary leading-[1.15]">
              Leading with Vision, <br className="hidden md:block" />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">Learning</span> with Heart
            </h2>
            
            <div className="relative pt-4">
              <Quote className="absolute -top-4 -left-6 md:-left-12 text-accent/10 w-20 h-20 md:w-32 md:h-32 -z-10" />
              <p className="text-lg md:text-2xl text-muted-foreground italic leading-relaxed font-body font-medium">
                "Our mission at Seshadripuram Gateway has always been to provide an environment where curiosity thrives and every student finds their unique path to success. We don't just teach subjects; we nurture character, instill values, and prepare our students for an ever-changing world."
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Founded on the principles of academic rigor and holistic development, our institution has remained at the forefront of educational innovation in Bangalore for nearly a century. We welcome you to explore our vibrant campus and join a community dedicated to excellence and integrity.
            </p>
            
            <div className="pt-4 flex items-center gap-6">
              <div>
                <div className="relative w-40 h-16 grayscale opacity-80">
                  <Image 
                    src="https://placehold.co/200x60/transparent/264273?text=Meera+Rao&font=cursive" 
                    alt="Signature"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-primary mt-2">Dr. Meera K. Rao</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-semibold">Ph.D. in Educational Leadership</p>
              </div>
              <div className="h-16 w-px bg-border hidden sm:block"></div>
              <div className="hidden sm:block">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Office Hours</p>
                <p className="text-sm font-semibold text-primary">Mon - Fri: 9:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
