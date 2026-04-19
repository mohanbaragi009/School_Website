
"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getPlaceholderById } from '@/lib/placeholder-images';

const highlights = [
  {
    title: "Modern Classrooms",
    description: "Equipped with smart boards and ergonomic furniture for an immersive learning experience.",
    imageId: "highlight-class",
    color: "bg-blue-600",
    hint: "modern classroom"
  },
  {
    title: "Advanced Science Labs",
    description: "State-of-the-art physics, chemistry, and biology labs for hands-on experimentation.",
    imageId: "highlight-lab",
    color: "bg-purple-600",
    hint: "science laboratory"
  },
  {
    title: "Digital Library",
    description: "Access to thousands of e-books and journals in a quiet, modern study environment.",
    imageId: "highlight-library",
    color: "bg-green-600",
    hint: "digital library"
  },
  {
    title: "Sports Complex",
    description: "Professional coaching and world-class facilities for various indoor and outdoor sports.",
    imageId: "highlight-sports",
    color: "bg-orange-600",
    hint: "school sports"
  }
];

export function HighlightsCarousel() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent/40 text-accent px-6 py-1.5 rounded-full font-bold tracking-widest bg-accent/5 uppercase text-xs">
            Experience the Future
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Institutional <span className="text-accent">Highlights</span>
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Take a closer look at the world-class facilities and innovative environments that make Seshadripuram Institute a leader in education.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {highlights.map((item, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="rounded-[3rem] border-none shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden group h-full bg-white transition-all duration-500 hover:-translate-y-4">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image 
                            src={getPlaceholderById(item.imageId)} 
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                            data-ai-hint={item.hint}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                          <div className="absolute bottom-6 left-8 right-8">
                            <Badge className={`${item.color} text-white mb-3 px-4 py-1 rounded-full shadow-lg border-none uppercase text-[10px] tracking-widest font-bold`}>
                              Feature 0{index + 1}
                            </Badge>
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-10 space-y-6 flex-grow flex flex-col justify-between">
                          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            {item.description}
                          </p>
                          <button className="flex items-center gap-3 text-accent font-black uppercase tracking-widest text-xs group-hover:gap-5 transition-all w-fit">
                            Explore Facility <ArrowRight size={16} />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-6 mt-16">
              <CarouselPrevious className="static translate-y-0 h-16 w-16 rounded-full border-2 border-primary/10 bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95" />
              <CarouselNext className="static translate-y-0 h-16 w-16 rounded-full border-2 border-primary/10 bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
