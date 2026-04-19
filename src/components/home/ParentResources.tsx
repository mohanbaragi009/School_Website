
"use client";

import React from 'react';
import { CreditCard, UserCheck, GraduationCap, Bus, Library, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const resources = [
  {
    title: "Online Fee Payment",
    description: "Securely pay tuition and admission fees online.",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-400",
    border: "border-blue-200",
    glow: "shadow-blue-500/20",
    text: "text-blue-600",
    link: "#"
  },
  {
    title: "Attendance Portal",
    description: "Track student attendance and daily records.",
    icon: UserCheck,
    color: "from-purple-500 to-indigo-400",
    border: "border-purple-200",
    glow: "shadow-purple-500/20",
    text: "text-purple-600",
    link: "#"
  },
  {
    title: "Result Inquiry",
    description: "View board results and internal assessment reports.",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-400",
    border: "border-green-200",
    glow: "shadow-green-500/20",
    text: "text-green-600",
    link: "#"
  },
  {
    title: "Transport Tracking",
    description: "Live updates for school bus routes and timings.",
    icon: Bus,
    color: "from-orange-500 to-yellow-400",
    border: "border-orange-200",
    glow: "shadow-orange-500/20",
    text: "text-orange-600",
    link: "#"
  },
  {
    title: "Digital Library",
    description: "Access 20,000+ e-books and research journals.",
    icon: Library,
    color: "from-pink-500 to-rose-400",
    border: "border-pink-200",
    glow: "shadow-pink-500/20",
    text: "text-pink-600",
    link: "#"
  },
  {
    title: "Downloads",
    description: "Forms, syllabus, and academic brochures.",
    icon: Download,
    color: "from-indigo-500 to-blue-400",
    border: "border-indigo-200",
    glow: "shadow-indigo-500/20",
    text: "text-indigo-600",
    link: "#"
  }
];

export function ParentResources() {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/20 text-primary px-6 py-1.5 rounded-full font-bold tracking-widest bg-primary/5 uppercase text-xs">
            Parent & Student Hub
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Essential <span className="text-accent">Resources</span>
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto font-medium">
            Streamlined digital tools designed to support parents and students in their academic journey with Seshadripuram Institute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <Card key={i} className={`rounded-[2.5rem] border-2 ${resource.border} shadow-lg ${resource.glow} hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white hover:-translate-y-2`}>
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className={`bg-gradient-to-br ${resource.color} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <resource.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className={`text-2xl font-bold ${resource.text}`}>{resource.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <button className={`flex items-center gap-2 ${resource.text} font-black uppercase tracking-widest text-[10px] pt-4 group-hover:gap-4 transition-all`}>
                  Access Portal <ExternalLink size={14} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
