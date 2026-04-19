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
        <div id="home">
          <NewsBanner />
          <Hero />
        </div>
        
        <section id="about" className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm">Welcome to Excellence</p>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">
                    Where Tradition <br />Meets Global Innovation
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Established in 1930, Seshadripuram Institute has been a cornerstone of quality education in Bangalore. Our legacy is built on the pillars of academic distinction, holistic growth, and character building.
                  </p>
                  <p>
                    From state-of-the-art laboratories to our extensive library and modern athletic facilities, we provide every student with the tools they need to excel in the 21st century. Join a community that values curiosity and prepares you for life beyond the classroom.
                  </p>
                </div>
                <div className="flex flex-wrap gap-12 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">#1</div>
                    <div className="text-xs uppercase tracking-widest font-semibold">Ranked Institution</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs uppercase tracking-widest font-semibold">Passing Results</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">90+</div>
                    <div className="text-xs uppercase tracking-widest font-semibold">Year Legacy</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-accent/10 rounded-full absolute -top-12 -right-12 w-64 h-64 -z-10 blur-3xl"></div>
                <div className="aspect-square bg-primary/10 rounded-full absolute -bottom-12 -left-12 w-64 h-64 -z-10 blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-2 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                      <img src={getPlaceholderById('welcome-1')} alt="Students" className="rounded-xl w-full" />
                    </div>
                    <div className="bg-white p-2 rounded-2xl shadow-xl transform translate-x-4 hover:-translate-y-2 transition-transform duration-500 delay-75">
                      <img src={getPlaceholderById('welcome-2')} alt="Lab" className="rounded-xl w-full" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-white p-2 rounded-2xl shadow-xl transform -translate-x-4 hover:-translate-y-2 transition-transform duration-500 delay-150">
                      <img src={getPlaceholderById('welcome-3')} alt="Sports" className="rounded-xl w-full" />
                    </div>
                    <div className="bg-white p-2 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-500 delay-300">
                      <img src={getPlaceholderById('welcome-4')} alt="Arts" className="rounded-xl w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="leadership">
          <PrincipalMessage />
        </div>
        
        <div id="student-life">
          <VirtualGuide />
        </div>

        <div id="academics">
          <AcademicCalendar />
          <AcademicVideos />
        </div>

        <div id="staff">
          <AiRefinementTool />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
