
import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PrincipalMessage() {
  const principalImg = PlaceHolderImages.find(img => img.id === 'principal-portrait');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-accent rounded-2xl z-0 hidden md:block"></div>
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <Image 
                src={principalImg?.imageUrl || 'https://picsum.photos/seed/principal/400/500'} 
                alt="Principal Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="professional portrait"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-4 text-white">
                <p className="font-bold text-lg leading-none">Dr. Meera K. Rao</p>
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mt-1 italic">Principal, Seshadripuram Gateway</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-2">
              <div className="w-8 h-0.5 bg-accent"></div>
              Leadership Message
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">
              Leading with Vision, <br />Learning with Heart
            </h2>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 text-accent/20 w-16 h-16 -z-10" />
              <p className="text-lg text-muted-foreground italic leading-relaxed font-body">
                "Our mission at Seshadripuram Gateway has always been to provide an environment where curiosity thrives and every student finds their unique path to success. We don't just teach subjects; we nurture character, instill values, and prepare our students to become compassionate global citizens who can lead with integrity in an ever-changing world."
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Founded on the principles of academic rigor and holistic development, our institution has remained at the forefront of educational innovation in Bangalore for nearly a century. We welcome you to explore our vibrant campus and join a community dedicated to excellence.
            </p>
            
            <div className="pt-6">
              <Image 
                src="https://placehold.co/200x60/transparent/264273?text=Meera+Rao&font=cursive" 
                alt="Signature"
                width={150}
                height={45}
                className="opacity-80"
              />
              <p className="text-sm font-bold text-primary mt-2">Dr. Meera K. Rao</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Ph.D. in Educational Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
