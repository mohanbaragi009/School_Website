"use client";

import React from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin, ChevronRight, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    date: new Date(2024, 11, 15),
    title: "AI & Future Skills Workshop",
    time: "10:00 AM - 1:00 PM",
    location: "Main Auditorium",
    category: "Academic"
  },
  {
    date: new Date(2024, 11, 20),
    title: "Annual Sports Meet",
    time: "8:00 AM - 4:00 PM",
    location: "School Ground",
    category: "Sports"
  },
  {
    date: new Date(2024, 11, 25),
    title: "Winter Vacation Starts",
    time: "All Day",
    location: "Campus",
    category: "Holiday"
  }
];

export function AcademicCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendar View */}
          <Card className="lg:col-span-4 xl:col-span-4 shadow-xl border-none overflow-hidden">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="flex items-center gap-2 text-xl">
                <CalendarDays className="text-accent" />
                Monthly View
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex justify-center bg-white">
              <CalendarUI
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-4 md:p-6 w-full"
                classNames={{
                  months: "w-full",
                  month: "w-full space-y-4",
                  table: "w-full border-collapse space-y-1",
                  head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.8rem] text-center",
                  cell: "text-center text-sm p-0 relative focus-within:z-20 w-full aspect-square",
                  day: "h-full w-full p-0 font-normal aria-selected:opacity-100 flex items-center justify-center rounded-md hover:bg-accent/10 transition-colors",
                }}
              />
            </CardContent>
          </Card>
          
          {/* Events List */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                Upcoming Events
                <span className="h-0.5 bg-border hidden sm:block w-24"></span>
              </h3>
              <Badge variant="secondary" className="w-fit">Showing {events.length} Events</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {events.map((event, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all border-l-4 border-l-accent overflow-hidden group">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-primary text-white p-2 rounded-lg text-center min-w-[65px] shadow-md group-hover:scale-110 transition-transform">
                        <div className="text-2xl font-bold leading-none">{event.date.getDate()}</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-80">
                          {event.date.toLocaleString('default', { month: 'short' })}
                        </div>
                      </div>
                      <Badge className={
                        event.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                        event.category === 'Sports' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }>
                        {event.category}
                      </Badge>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">{event.title}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-accent shrink-0" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent shrink-0" /> {event.location}
                      </div>
                    </div>
                    <button className="mt-5 w-full py-2.5 flex items-center justify-center text-xs font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest border border-primary/10 rounded-lg bg-primary/5 hover:bg-primary/10">
                      View Event Details <ChevronRight size={14} className="ml-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="flex flex-col items-center justify-center p-8 bg-white/50 border-2 border-dashed border-border rounded-xl">
                <FileText className="text-muted-foreground/30 mb-4 h-12 w-12" />
                <p className="text-muted-foreground text-center mb-4 text-sm font-medium">Download the full academic planner for 2024-25 session.</p>
                <button className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-md">
                  Download Full PDF
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
