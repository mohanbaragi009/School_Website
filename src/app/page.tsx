import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NewsBanner } from '@/components/home/NewsBanner';
import { Hero } from '@/components/home/Hero';
import { PrincipalMessage } from '@/components/home/PrincipalMessage';
import { AcademicCalendar } from '@/components/home/AcademicCalendar';
import { AcademicVideos } from '@/components/home/AcademicVideos';
import { AiRefinementTool } from '@/components/admin/AiRefinementTool';
import { VirtualGuide } from '@/components/home/VirtualGuide';
import { Toaster } from '@/components/ui/toaster';
import { getPlaceholderById } from '@/lib/placeholder-images';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div id="home" className="relative">
          <NewsBanner />
          <Hero />
        </div>
        
        {/* About Section - Enhanced with Images */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Welcome to Excellence</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary leading-tight">
                    Where Tradition <br />Meets Global Innovation
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <p>
                    Established in 1930, Seshadripuram Institute has been a cornerstone of quality education in Bangalore. Our legacy is built on the pillars of academic distinction, holistic growth, and character building.
                  </p>
                  <p>
                    From state-of-the-art laboratories to our extensive library and modern athletic facilities, we provide every student with the tools they need to excel in the 21st century.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-4">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-primary">#1</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Ranked Institution</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Passing Results</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-primary">90+</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Year Legacy</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-accent/20 rounded-full absolute -top-20 -right-20 w-80 h-80 -z-10 blur-3xl opacity-50"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                      <img src={getPlaceholderById('welcome-1')} alt="Students" className="rounded-xl w-full" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-2xl transform translate-x-4 hover:-translate-y-2 transition-transform duration-500 delay-75">
                      <img src={getPlaceholderById('welcome-2')} alt="Lab" className="rounded-xl w-full" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-white p-3 rounded-2xl shadow-2xl transform -translate-x-4 hover:-translate-y-2 transition-transform duration-500 delay-150">
                      <img src={getPlaceholderById('welcome-3')} alt="Sports" className="rounded-xl w-full" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 delay-300">
                      <img src={getPlaceholderById('welcome-4')} alt="Arts" className="rounded-xl w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="leadership" className="bg-slate-50 border-y border-border/50">
          <PrincipalMessage />
        </div>
        
        <div id="student-life" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-white pointer-events-none"></div>
          <VirtualGuide />
        </div>

        <div id="academics" className="bg-white">
          <div className="bg-slate-50/50">
            <AcademicCalendar />
          </div>
          <div className="bg-white border-t border-border/40">
            <AcademicVideos />
          </div>
        </div>

        <div id="staff" className="relative overflow-hidden bg-primary py-24">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <AiRefinementTool />
          </div>
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
