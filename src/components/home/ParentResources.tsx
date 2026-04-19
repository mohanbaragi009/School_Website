
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
    textColor: "text-blue-600",
    iconColor: "text-white",
    iconBg: "bg-blue-600",
    bg: "bg-blue-50",
    link: "#"
  },
  {
    title: "Attendance Portal",
    description: "Track student attendance and daily records.",
    icon: UserCheck,
    textColor: "text-purple-600",
    iconColor: "text-white",
    iconBg: "bg-purple-600",
    bg: "bg-purple-50",
    link: "#"
  },
  {
    title: "Result Inquiry",
    description: "View board results and assessment reports.",
    icon: GraduationCap,
    textColor: "text-green-600",
    iconColor: "text-white",
    iconBg: "bg-green-600",
    bg: "bg-green-50",
    link: "#"
  },
  {
    title: "Transport Tracking",
    description: "Live updates for school bus routes and timings.",
    icon: Bus,
    textColor: "text-orange-500",
    iconColor: "text-white",
    iconBg: "bg-orange-500",
    bg: "bg-orange-50",
    link: "#"
  },
  {
    title: "Digital Library",
    description: "Access 20,000+ e-books and journals.",
    icon: Library,
    textColor: "text-pink-600",
    iconColor: "text-white",
    iconBg: "bg-pink-600",
    bg: "bg-pink-50",
    link: "#"
  },
  {
    title: "Downloads",
    description: "Forms, syllabus, and academic brochures.",
    icon: Download,
    textColor: "text-indigo-600",
    iconColor: "text-white",
    iconBg: "bg-indigo-600",
    bg: "bg-indigo-50",
    link: "#"
  }
];

export function ParentResources() {
  return (
    <section id="resources" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Blobs for Glass depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
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
            <Card key={i} className="rounded-[3rem] border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border-2 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className={`${resource.iconBg} w-20 h-20 rounded-3xl flex items-center justify-center ${resource.iconColor} shadow-lg group-hover:scale-110 transition-transform`}>
                  <resource.icon size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{resource.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <button className={`flex items-center gap-2 ${resource.textColor} font-black uppercase tracking-widest text-[10px] pt-4 group-hover:gap-4 transition-all bg-transparent border-none p-0`}>
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
