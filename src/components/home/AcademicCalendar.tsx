
"use client";

import React from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, MapPin, ChevronRight } from 'lucide-react';
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1">SCHEDULES</Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Academic Calendar</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Keep track of all important dates, examinations, and cultural activities happening across our institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 shadow-lg border-none">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="text-accent" />
                Monthly View
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CalendarUI
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-none w-full flex items-center justify-center scale-100 sm:scale-110 py-8"
              />
            </CardContent>
          </Card>
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
              Upcoming Events
              <div className="flex-1 h-0.5 bg-border ml-4"></div>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all border-l-4 border-l-accent overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-primary text-white p-2 rounded text-center min-w-[60px]">
                        <div className="text-xl font-bold">{event.date.getDate()}</div>
                        <div className="text-[10px] uppercase font-bold tracking-tighter">
                          {event.date.toLocaleString('default', { month: 'short' })}
                        </div>
                      </div>
                      <Badge className={
                        event.category === 'Academic' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                        event.category === 'Sports' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                        'bg-red-100 text-red-700 hover:bg-red-100'
                      }>
                        {event.category}
                      </Badge>
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{event.title}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-accent" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent" /> {event.location}
                      </div>
                    </div>
                    <button className="mt-6 w-full sm:w-auto py-2 flex items-center justify-center sm:justify-start text-xs font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest border border-primary/10 sm:border-none rounded-md sm:rounded-none">
                      Event Details <ChevronRight size={14} />
                    </button>
                  </CardContent>
                </Card>
              ))}
              
              <div className="flex flex-col items-center justify-center p-8 bg-white border-2 border-dashed border-border rounded-xl">
                <p className="text-muted-foreground text-center mb-4">View more scheduled events for the current semester.</p>
                <button className="w-full sm:w-auto py-2 text-accent font-bold hover:underline transition-all">Full Calendar PDF Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
