
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Sparkles, Loader2, Landmark, Beaker, BookOpen, Trophy, Info, Lightbulb } from 'lucide-react';
import { getCampusInfo, type CampusGuideOutput } from '@/ai/flows/campus-guide-flow';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const locations = [
  { name: "Central Library", icon: BookOpen, description: "A haven for knowledge seekers." },
  { name: "Science Laboratories", icon: Beaker, description: "Where theories come to life." },
  { name: "Main Auditorium", icon: Landmark, description: "The heart of cultural activities." },
  { name: "Sports Complex", icon: Trophy, description: "Fostering team spirit and health." }
];

export function VirtualGuide() {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [info, setInfo] = React.useState<CampusGuideOutput | null>(null);

  const handleExplore = async (name: string) => {
    setSelected(name);
    setLoading(true);
    setInfo(null);
    try {
      const data = await getCampusInfo(name);
      setInfo(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent/40 text-accent px-6 py-1.5 rounded-full font-bold tracking-widest bg-accent/5 uppercase text-xs">
            Interactive Experience
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            AI Virtual <span className="text-accent">Campus Guide</span>
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto font-medium">
            Explore our world-class facilities through the lens of our advanced AI guide. Select a location below to begin your tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((loc) => {
              const Icon = loc.icon;
              const isSelected = selected === loc.name;
              return (
                <Card 
                  key={loc.name}
                  className={cn(
                    "cursor-pointer transition-all duration-500 group hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-none transform hover:-translate-y-2 rounded-[2.5rem] shadow-xl",
                    isSelected 
                      ? 'bg-accent text-white' 
                      : 'bg-white'
                  )}
                  onClick={() => handleExplore(loc.name)}
                >
                  <CardContent className="p-8">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
                      isSelected ? "bg-white/20 backdrop-blur-md text-white" : "bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent"
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className={cn(
                      "font-bold text-xl mb-3 transition-colors",
                      isSelected ? "text-white" : "text-primary group-hover:text-accent"
                    )}>
                      {loc.name}
                    </h4>
                    <p className={cn(
                      "text-sm font-medium leading-relaxed transition-colors",
                      isSelected ? "text-white/80" : "text-primary/60"
                    )}>
                      {loc.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="lg:col-span-7 min-h-[600px] h-full">
            {!selected && (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center p-12 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border-4 border-dashed border-primary/10 transition-all duration-500 shadow-inner">
                <div className="bg-primary/5 p-8 rounded-full mb-8 shadow-inner">
                  <Map className="w-20 h-20 text-primary/20" />
                </div>
                <h5 className="text-3xl font-bold text-primary mb-3 text-center">Ready to explore?</h5>
                <p className="text-primary/40 font-bold uppercase tracking-widest text-sm text-center">Select a location to activate AI insights</p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center p-12 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border-none shadow-2xl animate-pulse">
                <Loader2 className="w-24 h-24 text-accent mb-10 animate-spin" />
                <h5 className="text-3xl font-bold text-accent animate-pulse">Consulting AI Guide...</h5>
                <p className="text-accent/60 mt-6 font-black uppercase tracking-[0.3em] text-xs">Fetching dynamic campus insights</p>
              </div>
            )}

            {info && !loading && (
              <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-700 h-full">
                <Card className="shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] border-none overflow-hidden rounded-[2.5rem] bg-white h-full">
                  <div className="bg-primary p-10 md:p-14 text-white flex justify-between items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-5">
                        <Sparkles className="text-accent w-6 h-6 fill-accent" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">AI-Powered Virtual Tour</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-headline font-bold leading-none tracking-tight">{selected}</h3>
                    </div>
                    <div className="hidden sm:block relative z-10">
                      {locations.find(l => l.name === selected)?.icon && (
                        <div className="p-6 bg-white/10 rounded-[2rem] backdrop-blur-md border border-white/20 shadow-2xl">
                          {React.createElement(locations.find(l => l.name === selected)!.icon, { className: "w-10 h-10 text-white" })}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-10 md:p-16 space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-primary">
                        <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center shadow-sm">
                          <Info size={22} className="text-primary" />
                        </div>
                        <h5 className="font-bold text-2xl tracking-tight">Academic Overview</h5>
                      </div>
                      <p className="text-primary/80 leading-relaxed text-xl font-medium pl-14">
                        {info.description}
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 text-primary">
                        <div className="w-10 h-10 rounded-2xl bg-accent/5 flex items-center justify-center shadow-sm">
                          <Sparkles size={22} className="text-accent" />
                        </div>
                        <h5 className="font-bold text-2xl tracking-tight">Campus Highlights</h5>
                      </div>
                      <ul className="grid grid-cols-1 gap-6 pl-14">
                        {info.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-5 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-accent/30 transition-all group hover:bg-white hover:shadow-xl">
                            <div className="mt-2 w-3 h-3 rounded-full bg-accent shrink-0 shadow-[0_0_15px_rgba(var(--accent),0.6)]" />
                            <span className="text-primary/70 font-bold text-base md:text-lg leading-relaxed group-hover:text-primary transition-colors">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 p-10 rounded-[2.5rem] border-2 border-dashed border-accent/30 relative overflow-hidden group hover:bg-accent/10 transition-colors">
                      <div className="absolute -top-4 -right-4 p-8 opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-transform">
                        <Lightbulb size={100} className="text-accent" />
                      </div>
                      <div className="relative z-10">
                        <h5 className="font-black text-accent text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                          <Lightbulb size={20} />
                          Virtual Guide Tip
                        </h5>
                        <p className="text-primary text-2xl md:text-3xl font-headline italic font-bold leading-tight">
                          "{info.visitorTips}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
