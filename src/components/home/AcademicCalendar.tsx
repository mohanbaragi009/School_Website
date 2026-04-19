
"use client";

import React from 'react';
import { Clock, MapPin, ChevronRight, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const events = [
  {
    date: new Date(2024, 11, 15),
    title: "AI & Future Skills Workshop",
    time: "10:00 AM - 1:00 PM",
    location: "Main Auditorium",
    category: "Academic",
    color: "border-l-blue-500",
    badge: "bg-blue-100 text-blue-700"
  },
  {
    date: new Date(2024, 11, 20),
    title: "Annual Sports Meet",
    time: "8:00 AM - 4:00 PM",
    location: "School Ground",
    category: "Sports",
    color: "border-l-orange-500",
    badge: "bg-orange-100 text-orange-700"
  },
  {
    date: new Date(2024, 11, 25),
    title: "Winter Vacation Starts",
    time: "All Day",
    location: "Campus",
    category: "Holiday",
    color: "border-l-purple-500",
    badge: "bg-purple-100 text-purple-700"
  }
];

export function AcademicCalendar() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1 font-bold tracking-widest uppercase">Schedules</Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Academic Calendar</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Stay updated with all important dates, examinations, and cultural milestones happening across our institutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
              Upcoming Events
              <span className="h-0.5 bg-border hidden sm:block w-24"></span>
            </h3>
            <Badge variant="secondary" className="w-fit">Showing {events.length} Events</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, idx) => (
              <Card key={idx} className={`hover:shadow-2xl transition-all border-l-8 ${event.color} overflow-hidden group h-full rounded-[2rem] bg-white`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary text-white p-2 rounded-xl text-center min-w-[65px] shadow-md group-hover:scale-110 transition-transform">
                      <div className="text-2xl font-bold leading-none">{event.date.getDate()}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-80">
                        {event.date.toLocaleString('default', { month: 'short' })}
                      </div>
                    </div>
                    <Badge className={event.badge}>
                      {event.category}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug flex-grow">
                    {event.title}
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent shrink-0" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent shrink-0" /> {event.location}
                    </div>
                  </div>
                  <button className="w-full py-2.5 flex items-center justify-center text-xs font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest border border-primary/10 rounded-xl bg-primary/5 hover:bg-primary/10">
                    View Details <ChevronRight size={14} className="ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-xl border border-border rounded-[2.5rem] gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/5 rounded-[1.5rem] shadow-inner">
                <FileText className="text-primary h-8 w-8" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-xl">Academic Planner 2024-25</h4>
                <p className="text-muted-foreground text-sm font-medium">Download the complete session schedule in PDF format.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 whitespace-nowrap uppercase tracking-widest">
              Download Full PDF
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
