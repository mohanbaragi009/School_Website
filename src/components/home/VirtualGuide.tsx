
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
      {/* Decorative background elements */}
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
          {/* Sidebar Location Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {locations.map((loc) => {
              const Icon = loc.icon;
              const isSelected = selected === loc.name;
              return (
                <Card 
                  key={loc.name}
                  className={cn(
                    "cursor-pointer transition-all duration-300 group hover:shadow-2xl border-2 transform hover:-translate-y-1",
                    isSelected 
                      ? 'border-accent bg-accent/5 shadow-xl shadow-accent/10' 
                      : 'border-white bg-white hover:border-accent/30'
                  )}
                  onClick={() => handleExplore(loc.name)}
                >
                  <CardContent className="p-6">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors",
                      isSelected ? "bg-accent text-white" : "bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent"
                    )}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className={cn(
                      "font-bold text-xl mb-2 transition-colors",
                      isSelected ? "text-accent" : "text-primary group-hover:text-accent"
                    )}>
                      {loc.name}
                    </h4>
                    <p className="text-sm text-primary/60 font-medium leading-relaxed">
                      {loc.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Result Content Area */}
          <div className="lg:col-span-7 min-h-[500px] h-full">
            {!selected && (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 bg-white/50 backdrop-blur-sm rounded-[2rem] border-2 border-dashed border-primary/20 transition-all duration-500">
                <div className="bg-primary/5 p-6 rounded-full mb-6">
                  <Map className="w-16 h-16 text-primary/30" />
                </div>
                <h5 className="text-2xl font-bold text-primary mb-2 text-center">Ready to explore?</h5>
                <p className="text-primary/50 font-medium text-center">Click on any location on the left to activate the AI guide.</p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 bg-white/80 backdrop-blur-sm rounded-[2rem] border-2 border-accent/20 shadow-2xl animate-pulse">
                <Loader2 className="w-20 h-20 text-accent mb-8 animate-spin" />
                <h5 className="text-2xl font-bold text-accent animate-pulse">Consulting AI Guide...</h5>
                <p className="text-accent/60 mt-4 font-bold uppercase tracking-widest text-xs">Fetching dynamic campus insights</p>
              </div>
            )}

            {info && !loading && (
              <div className="animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-700 h-full">
                <Card className="shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-none overflow-hidden rounded-[2.5rem] bg-white h-full">
                  <div className="bg-primary p-8 md:p-10 text-white flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-accent w-5 h-5 fill-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">AI-Powered Tour</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-headline font-bold leading-none">{selected}</h3>
                    </div>
                    <div className="hidden sm:block">
                      {locations.find(l => l.name === selected)?.icon && (
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                          {React.createElement(locations.find(l => l.name === selected)!.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-8 md:p-12 space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                          <Info size={18} className="text-primary" />
                        </div>
                        <h5 className="font-bold text-lg">About this Facility</h5>
                      </div>
                      <p className="text-primary/80 leading-relaxed text-lg font-medium pl-11">
                        {info.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-primary">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                          <Sparkles size={18} className="text-accent" />
                        </div>
                        <h5 className="font-bold text-lg">Key Highlights</h5>
                      </div>
                      <ul className="grid grid-cols-1 gap-4 pl-11">
                        {info.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-all group">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                            <span className="text-primary/70 font-bold text-sm md:text-base leading-relaxed group-hover:text-primary transition-colors">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 p-8 rounded-[2rem] border-2 border-dashed border-accent/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                        <Lightbulb size={60} className="text-accent" />
                      </div>
                      <div className="relative z-10">
                        <h5 className="font-black text-accent text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
                          <Lightbulb size={16} />
                          Visitor Tip
                        </h5>
                        <p className="text-primary text-xl font-headline italic font-bold leading-relaxed">
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
