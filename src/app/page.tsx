
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NewsBanner } from '@/components/home/NewsBanner';
import { Hero } from '@/components/home/Hero';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { AcademicCalendar } from '@/components/home/AcademicCalendar';
import { AcademicVideos } from '@/components/home/AcademicVideos';
import { AiRefinementTool } from '@/components/admin/AiRefinementTool';
import { VirtualGuide } from '@/components/home/VirtualGuide';
import { LocationMap } from '@/components/home/LocationMap';
import { Testimonials } from '@/components/home/Testimonials';
import { ParentResources } from '@/components/home/ParentResources';
import { HighlightsCarousel } from '@/components/home/HighlightsCarousel';
import { Toaster } from '@/components/ui/toaster';
import { getPlaceholderById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, BookOpen, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div id="home">
          <NewsBanner />
          <Hero />
        </div>
        
        {/* Yellow Separator */}
        <div className="h-2 w-full bg-[hsl(var(--highlight))]"></div>

        {/* Highlights Carousel Section */}
        <HighlightsCarousel />

        {/* Bento About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center lg:text-left mb-16 space-y-4">
              <Badge variant="outline" className="border-accent/40 text-accent px-6 py-1.5 rounded-full font-bold tracking-widest bg-accent/5 uppercase text-xs">
                Our Legacy
              </Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight leading-tight">
                90 Years of <span className="text-accent italic">Excellence</span>
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Main Content Card */}
              <div className="md:col-span-4 lg:col-span-3 bg-white/40 backdrop-blur-xl border-2 border-white/60 p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center space-y-6">
                <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
                  Established in 1930, Seshadripuram Institute has been a cornerstone of quality education in Bangalore.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our legacy is built on the pillars of academic distinction, holistic growth, and character building, preparing students for a global future.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <div className="text-4xl font-black text-accent">#1</div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-60">Ranked Institution</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-60">Passing Results</div>
                  </div>
                </div>
              </div>

              {/* High-Impact Image Card */}
              <div className="md:col-span-2 lg:col-span-3 h-[400px] relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-[12px] border-white">
                <img 
                  src={getPlaceholderById('welcome-1')} 
                  alt="Students" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <Badge className="bg-accent text-white mb-2">Student Life</Badge>
                  <h3 className="text-white font-bold text-2xl">Vibrant Campus Life</h3>
                </div>
              </div>

              {/* Stats Bento Tiles */}
              <div className="md:col-span-2 lg:col-span-2 bg-primary p-8 rounded-[2.5rem] shadow-2xl text-white flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-2 transition-transform">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-4xl font-black">15K+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">Global Alumni</div>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-slate-50 p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-2 transition-transform border-2 border-white">
                <div className="p-4 bg-accent/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">50+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Streams</div>
                </div>
              </div>

              <div className="md:col-span-4 lg:col-span-2 bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border-2 border-white/60 flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-2 transition-transform">
                <div className="p-4 bg-primary/5 rounded-2xl">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">120+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Gold Medals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accent Separator */}
        <div className="h-2 w-full bg-accent"></div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Primary Separator */}
        <div className="h-2 w-full bg-primary"></div>

        {/* Leadership Section */}
        <div id="leadership" className="bg-slate-50 relative">
          <PrincipalMessage />
        </div>

        {/* Primary Separator */}
        <div className="h-2 w-full bg-primary"></div>
        
        {/* Student Life Section */}
        <div id="student-life" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white pointer-events-none"></div>
          <VirtualGuide />
        </div>

        {/* Accent Separator */}
        <div className="h-2 w-full bg-accent"></div>

        {/* Academics Section */}
        <div id="academics" className="bg-white">
          <div className="bg-slate-50/50">
            <AcademicCalendar />
          </div>
          <div className="bg-white border-t border-border/40">
            <AcademicVideos />
          </div>
        </div>

        {/* Highlight Separator */}
        <div className="h-2 w-full bg-[hsl(var(--highlight))]"></div>

        {/* Parent Resources Section */}
        <ParentResources />

        {/* Primary Separator */}
        <div className="h-2 w-full bg-primary"></div>

        {/* Staff Portal Section */}
        <div id="staff" className="relative overflow-hidden bg-primary py-24">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <AiRefinementTool />
          </div>
        </div>

        {/* Primary Separator */}
        <div className="h-2 w-full bg-primary"></div>

        {/* Contact Section */}
        <div id="contact">
          <LocationMap />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
