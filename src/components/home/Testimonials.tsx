
"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Parent of Class X Student",
    content: "The holistic approach at Seshadripuram is unmatched. My son has not only improved academically but has also developed great leadership skills through their sports programs.",
    rating: 5
  },
  {
    name: "Anita Deshpande",
    role: "Alumni, Batch of 2018",
    content: "My foundation was built here. The teachers are mentors who genuinely care about our future. The new AI tools on the website show how much they've modernized.",
    rating: 5
  },
  {
    name: "Dr. Suresh V.",
    role: "Parent of PUC Student",
    content: "The level of discipline and the quality of laboratory facilities are excellent. It's the best investment I've made for my daughter's higher education.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent/40 text-accent px-6 py-1.5 rounded-full font-bold tracking-widest bg-accent/5 uppercase text-xs">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Trusted by <span className="text-accent">Thousands</span>
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto font-medium">
            Hear from our community of parents, students, and alumni about their experiences at Seshadripuram Institute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {reviews.map((rev, i) => (
            <Card key={i} className="rounded-[2.5rem] border-white/60 shadow-2xl bg-white/40 backdrop-blur-xl relative group hover:-translate-y-2 transition-all duration-500 border-2">
              <Quote className="absolute top-8 right-8 text-primary/5 w-24 h-24 -z-0 group-hover:scale-110 transition-transform duration-700" />
              <CardContent className="p-10 relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-primary/80 text-xl font-medium italic leading-relaxed">
                  "{rev.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/40">
                  <Avatar className="w-14 h-14 border-2 border-white shadow-md">
                    <AvatarImage src={`https://picsum.photos/seed/${rev.name}/100/100`} />
                    <AvatarFallback>{rev.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-primary">{rev.name}</h4>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">{rev.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
