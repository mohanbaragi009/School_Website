
"use client";

import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function LocationMap() {
  const address = "No. 27, Nagappa Street, Seshadripuram, Bangalore - 560020";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.625!2d77.570!3d12.995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163df6718427%3A0x6b0487494483a9!2sSeshadripuram%20Institute!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=Seshadripuram+Institute+Nagappa+Street+Bangalore`;

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent/40 text-accent px-6 py-1.5 rounded-full font-bold tracking-widest bg-accent/5 uppercase text-xs">
            Visit Us
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
            Find Our <span className="text-accent">Campus</span>
          </h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto font-medium">
            Located in the heart of Bangalore, our campus is easily accessible and provides a serene environment for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Map Container */}
          <div className="lg:col-span-8 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group min-h-[450px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 h-full"
            ></iframe>
            <div className="absolute top-6 left-6">
              <Badge className="bg-primary/90 backdrop-blur-md text-white px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-2">
                <Navigation size={14} className="text-accent" />
                GET DIRECTIONS
              </Badge>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="h-full border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] bg-primary text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-between h-full space-y-8">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
                      <MapPin className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Main Address</h4>
                      <p className="text-blue-100/70 text-sm leading-relaxed font-medium">
                        {address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
                      <Clock className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Office Hours</h4>
                      <p className="text-blue-100/70 text-sm font-medium">
                        Monday - Saturday: 8:30 AM - 5:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
                      <Phone className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Quick Contact</h4>
                      <p className="text-blue-100/70 text-sm font-medium">+91 (80) 2356-1234</p>
                      <p className="text-blue-100/70 text-sm font-medium">info@seshadripuram.edu</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={externalMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl shadow-black/20 hover:scale-[1.02] flex items-center justify-center text-center"
                >
                  Open in Google Maps
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
