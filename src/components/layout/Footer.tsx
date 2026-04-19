
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function Footer() {
  const logoUrl = getPlaceholderById('school-logo');

  const footerLinks = [
    { title: "Admissions", href: "#resources" },
    { title: "Academic Calendar", href: "#academics" },
    { title: "Examination Results", href: "#resources" },
    { title: "Campus Gallery", href: "#student-life" },
    { title: "Alumni Association", href: "#contact" },
  ];

  const departments = [
    { title: "Science & Technology", href: "#academics" },
    { title: "Arts & Humanities", href: "#academics" },
    { title: "Commerce & Business", href: "#academics" },
    { title: "Physical Education", href: "#student-life" },
    { title: "Research & Innovation", href: "#academics" },
  ];

  return (
    <div className="relative">
      {/* Signature Yellow Highlight Line */}
      <div className="h-2 bg-[hsl(var(--highlight))] w-full relative z-10"></div>
      
      {/* Glassmorphic Footer Body */}
      <footer className="bg-primary/95 backdrop-blur-2xl text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: School Info - Firmly Aligned Left */}
            <div className="md:col-span-4 space-y-8">
              <div className="flex items-center gap-4 lg:gap-6">
                {/* Circular Logo Container */}
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-2xl group hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0 border-4 border-white flex items-center justify-center">
                  <div className="relative w-full h-full p-2.5">
                    <Image 
                      src={logoUrl} 
                      alt="Seshadripuram Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-2xl lg:text-3xl font-headline font-bold leading-none tracking-tight">SESHADRIPURAM</h2>
                  <p className="text-[10px] text-accent font-black uppercase tracking-[0.5em] mt-2">Institute</p>
                </div>
              </div>
              <p className="text-sm text-blue-100/60 leading-relaxed font-medium max-w-sm">
                Empowering students with quality education since 1930. Our commitment to excellence shapes the leaders of tomorrow in the heart of Bangalore.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <Link key={i} href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links - Explore */}
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-[hsl(var(--highlight))] rounded-full"></div>
                <h3 className="text-lg font-bold tracking-tight">Explore</h3>
              </div>
              <ul className="space-y-3">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm font-semibold text-blue-100/50 hover:text-[hsl(var(--highlight))] transition-all flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Departments */}
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-[hsl(var(--highlight))] rounded-full"></div>
                <h3 className="text-lg font-bold tracking-tight">Academics</h3>
              </div>
              <ul className="space-y-3">
                {departments.map((dept, i) => (
                  <li key={i}>
                    <Link href={dept.href} className="text-sm font-semibold text-blue-100/50 hover:text-[hsl(var(--highlight))] transition-all flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                      {dept.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-[hsl(var(--highlight))] rounded-full"></div>
                <h3 className="text-lg font-bold tracking-tight">Contact Us</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent group-hover:border-accent transition-all h-fit shrink-0">
                    <MapPin size={18} className="text-accent group-hover:text-white" />
                  </div>
                  <span className="text-sm text-blue-100/60 font-medium leading-relaxed">
                    No. 27, Nagappa Street, Seshadripuram, Bangalore - 560020
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent group-hover:border-accent transition-all shrink-0">
                    <Phone size={18} className="text-accent group-hover:text-white" />
                  </div>
                  <a href="tel:+918023561234" className="text-sm font-bold text-blue-100/60 group-hover:text-accent transition-colors">
                    +91 (80) 2356-1234
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent group-hover:border-accent transition-all shrink-0">
                    <Mail size={18} className="text-accent group-hover:text-white" />
                  </div>
                  <a href="mailto:info@seshadripuram.edu" className="text-sm font-bold text-blue-100/60 group-hover:text-accent transition-colors">
                    info@seshadripuram.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-black text-white/30">
            <p>© 2024 Seshadripuram Institute. Excellence Since 1930.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
