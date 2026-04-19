
import React from 'react';
import Image from 'next/image';
import { Play, Eye, Calendar } from 'lucide-react';
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">Life at Gateway</h2>
            <p className="text-muted-foreground italic leading-relaxed">
              Experience our vibrant campus life, academic achievements, and cultural celebrations through our digital media library.
            </p>
          </div>
          <button className="w-full md:w-auto px-6 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all rounded-lg uppercase tracking-widest text-xs">
            Browse All Videos
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => {
            const placeholder = PlaceHolderImages.find(img => img.id === video.id);
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                  <Image 
                    src={placeholder?.imageUrl || 'https://picsum.photos/seed/school-video/600/400'} 
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint="academic video"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform border border-white/30 shadow-2xl">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                    {video.duration}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors text-lg line-clamp-1">{video.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {video.date}</span>
                    <span className="flex items-center gap-1"><Eye size={12} /> {video.views} views</span>
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
