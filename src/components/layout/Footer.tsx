
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
      <footer className="bg-primary/95 backdrop-blur-2xl text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Column 1: School Info */}
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                {/* Full Circle Logo Container - Perfect circle edge-to-edge */}
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-2xl group hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                  <Image 
                    src={logoUrl} 
                    alt="Seshadripuram Logo" 
                    fill 
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-headline font-bold leading-tight tracking-tight">SESHADRIPURAM</h2>
                  <p className="text-[10px] text-accent font-black uppercase tracking-[0.5em] mt-1">Institute</p>
                </div>
              </div>
              <p className="text-sm text-blue-100/70 leading-relaxed font-medium">
                Empowering students with quality education since 1930. Our commitment to excellence shapes the leaders of tomorrow in the heart of Bangalore.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <Link key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-10">
              <h3 className="text-lg font-bold flex flex-col gap-2">
                <span className="w-8 h-1 bg-[hsl(var(--highlight))] rounded-full"></span>
                Explore
              </h3>
              <ul className="space-y-4 text-sm font-semibold">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-blue-100/60 hover:text-[hsl(var(--highlight))] transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Departments */}
            <div className="space-y-10">
              <h3 className="text-lg font-bold flex flex-col gap-2">
                <span className="w-8 h-1 bg-[hsl(var(--highlight))] rounded-full"></span>
                Academics
              </h3>
              <ul className="space-y-4 text-sm font-semibold">
                {departments.map((dept, i) => (
                  <li key={i}>
                    <Link href={dept.href} className="text-blue-100/60 hover:text-[hsl(var(--highlight))] transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {dept.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-10">
              <h3 className="text-lg font-bold flex flex-col gap-2">
                <span className="w-8 h-1 bg-[hsl(var(--highlight))] rounded-full"></span>
                Contact Us
              </h3>
              <div className="space-y-8">
                <div className="flex gap-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-accent group-hover:border-accent transition-all h-fit">
                    <MapPin size={20} className="text-accent group-hover:text-white" />
                  </div>
                  <span className="text-sm text-blue-100/70 font-medium leading-relaxed group-hover:text-white transition-colors">
                    No. 27, Nagappa Street, Seshadripuram, Bangalore - 560020
                  </span>
                </div>
                <div className="flex gap-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-accent group-hover:border-accent transition-all h-fit">
                    <Phone size={20} className="text-accent group-hover:text-white" />
                  </div>
                  <a href="tel:+918023561234" className="text-sm font-bold text-blue-100/70 group-hover:text-accent transition-colors">
                    +91 (80) 2356-1234
                  </a>
                </div>
                <div className="flex gap-5 group cursor-pointer">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-accent group-hover:border-accent transition-all h-fit">
                    <Mail size={20} className="text-accent group-hover:text-white" />
                  </div>
                  <a href="mailto:info@seshadripuram.edu" className="text-sm font-bold text-blue-100/70 group-hover:text-accent transition-colors">
                    info@seshadripuram.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Glass Bar */}
          <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-black text-white/30">
            <p className="text-center md:text-left">
              © 2024 Seshadripuram Institute. <span className="hidden sm:inline">Excellence Since 1930.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link href="#contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#contact" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="#contact" className="hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
