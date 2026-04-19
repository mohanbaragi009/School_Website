
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Sparkles, Loader2, Landmark, Beaker, BookOpen, Trophy } from 'lucide-react';
import { getCampusInfo, type CampusGuideOutput } from '@/ai/flows/campus-guide-flow';
import { Badge } from '@/components/ui/badge';

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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1">VIRTUAL TOUR</Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Explore Our Campus</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Click on a location to get an AI-powered guided description of our world-class facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((loc) => {
              const Icon = loc.icon;
              return (
                <Card 
                  key={loc.name}
                  className={`cursor-pointer transition-all hover:shadow-md border-2 ${selected === loc.name ? 'border-accent bg-accent/5' : 'border-transparent'}`}
                  onClick={() => handleExplore(loc.name)}
                >
                  <CardContent className="p-6">
                    <Icon className={`w-8 h-8 mb-4 ${selected === loc.name ? 'text-accent' : 'text-primary'}`} />
                    <h4 className="font-bold text-primary">{loc.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{loc.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="min-h-[400px]">
            {!selected && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-xl border-2 border-dashed">
                <Map className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-medium">Select a location on the left to start exploring.</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center p-12 bg-white rounded-xl border-2 border-dashed animate-pulse">
                <Loader2 className="w-12 h-12 text-accent mb-4 animate-spin" />
                <p className="text-accent font-bold">Connecting to our Virtual Guide...</p>
              </div>
            )}

            {info && !loading && (
              <Card className="shadow-xl border-none animate-in fade-in slide-in-from-right-4 duration-500">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-accent" />
                    {selected}
                  </CardTitle>
                  <CardDescription className="text-blue-100 italic">Virtual Tour Insight</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h5 className="font-bold text-primary mb-2">Description</h5>
                    <p className="text-muted-foreground leading-relaxed">{info.description}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-primary mb-2">Highlights</h5>
                    <ul className="grid grid-cols-1 gap-2">
                      {info.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <h5 className="font-bold text-accent text-xs uppercase tracking-widest mb-1">Visitor Tip</h5>
                    <p className="text-sm text-primary italic">"{info.visitorTips}"</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
