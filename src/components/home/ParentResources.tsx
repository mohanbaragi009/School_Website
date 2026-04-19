
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
    color: "bg-blue-600",
    bg: "bg-blue-50",
    link: "#"
  },
  {
    title: "Attendance Portal",
    description: "Track student attendance and daily records.",
    icon: UserCheck,
    color: "bg-purple-600",
    bg: "bg-purple-50",
    link: "#"
  },
  {
    title: "Result Inquiry",
    description: "View board results and assessment reports.",
    icon: GraduationCap,
    color: "bg-green-600",
    bg: "bg-green-50",
    link: "#"
  },
  {
    title: "Transport Tracking",
    description: "Live updates for school bus routes and timings.",
    icon: Bus,
    color: "bg-orange-500",
    bg: "bg-orange-50",
    link: "#"
  },
  {
    title: "Digital Library",
    description: "Access 20,000+ e-books and journals.",
    icon: Library,
    color: "bg-pink-600",
    bg: "bg-pink-50",
    link: "#"
  },
  {
    title: "Downloads",
    description: "Forms, syllabus, and academic brochures.",
    icon: Download,
    color: "bg-indigo-600",
    bg: "bg-indigo-50",
    link: "#"
  }
];

export function ParentResources() {
  return (
    <section id="resources" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/20 text-primary px-6 py-1.5 rounded-full font-bold tracking-widest bg-white uppercase text-xs">
            Digital Hub
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Parent & Student <span className="text-accent">Resources</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Streamlined digital tools designed to support our community in their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <Card key={i} className="rounded-[3rem] border-white bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className={`${resource.bg} w-20 h-20 rounded-3xl flex items-center justify-center ${resource.color} shadow-sm group-hover:scale-110 transition-transform`}>
                  <resource.icon size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{resource.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <button className={`flex items-center gap-2 ${resource.color} font-black uppercase tracking-widest text-[10px] pt-4 group-hover:gap-4 transition-all`}>
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
