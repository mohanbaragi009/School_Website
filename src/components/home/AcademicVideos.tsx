import React from 'react';
import Image from 'next/image';
import { Play, Eye, Calendar, ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const videos = [
  {
    id: 'academic-video-1',
    title: "Innovating in the Science Lab",
    duration: "4:32",
    date: "Oct 12, 2024",
    views: "1.2k"
  },
  {
    id: 'academic-video-2',
    title: "Library Life: The Quiet Strength",
    duration: "3:15",
    date: "Sep 28, 2024",
    views: "850"
  },
  {
    id: 'academic-video-3',
    title: "Sports Day Highlights 2024",
    duration: "10:05",
    date: "Nov 05, 2024",
    views: "3.4k"
  }
];

export function AcademicVideos() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">Life at Gateway</h2>
            <p className="text-muted-foreground italic leading-relaxed text-base md:text-lg">
              Experience our vibrant campus life, academic achievements, and cultural celebrations through our digital media library.
            </p>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold hover:bg-accent transition-all rounded-full uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-xl shadow-primary/10">
            Browse All Videos <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {videos.map((video, idx) => {
            const placeholder = PlaceHolderImages.find(img => img.id === video.id);
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src={placeholder?.imageUrl || 'https://picsum.photos/seed/school-video/600/400'} 
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint="academic video"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform border border-white/40 shadow-2xl">
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-widest">
                    {video.duration}
                  </div>
                </div>
                <div className="space-y-3 px-1">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors text-lg md:text-xl line-clamp-1 leading-tight">{video.title}</h3>
                  <div className="flex items-center gap-6 text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-accent" /> {video.date}</span>
                    <span className="flex items-center gap-1.5"><Eye size={14} className="text-accent" /> {video.views}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
