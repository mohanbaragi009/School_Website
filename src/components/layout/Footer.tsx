
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function Footer() {
  const logoUrl = getPlaceholderById('school-logo');

  const footerLinks = [
    { title: "Admissions", href: "/admissions" },
    { title: "Academic Calendar", href: "/calendar" },
    { title: "Examination Results", href: "/exams" },
    { title: "Campus Gallery", href: "/gallery" },
    { title: "Alumni Association", href: "/alumni" },
  ];

  const departments = [
    { title: "Science & Technology", href: "/dept/science" },
    { title: "Arts & Humanities", href: "/dept/arts" },
    { title: "Commerce & Business", href: "/dept/commerce" },
    { title: "Physical Education", href: "/dept/sports" },
    { title: "Research & Innovation", href: "/dept/research" },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: School Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 bg-white rounded-2xl overflow-hidden p-1.5 shadow-xl rotate-3">
                <Image 
                  src={logoUrl} 
                  alt="Seshadripuram Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-headline font-bold leading-tight tracking-tight">Seshadripuram</h2>
                <p className="text-xs text-accent font-bold uppercase tracking-widest">Institute</p>
              </div>
            </div>
            <p className="text-sm text-blue-100/80 leading-relaxed max-w-sm">
              Empowering students with quality education since 1930. We are committed to fostering a spirit of innovation and character in every learner.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Explore
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-blue-100/70 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Academics
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {departments.map((dept, i) => (
                <li key={i}>
                  <Link href={dept.href} className="text-blue-100/70 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent transition-colors h-fit">
                  <MapPin size={18} className="text-accent group-hover:text-white" />
                </div>
                <span className="text-sm text-blue-100/80 leading-relaxed">
                  No. 27, Nagappa Street, Seshadripuram, Bangalore - 560020
                </span>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent transition-colors h-fit">
                  <Phone size={18} className="text-accent group-hover:text-white" />
                </div>
                <a href="tel:+918023561234" className="text-sm font-bold text-blue-100/80 hover:text-accent transition-colors">
                  +91 (80) 2356-1234
                </a>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent transition-colors h-fit">
                  <Mail size={18} className="text-accent group-hover:text-white" />
                </div>
                <a href="mailto:info@seshadripuram.edu" className="text-sm font-bold text-blue-100/80 hover:text-accent transition-colors">
                  info@seshadripuram.edu
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-white/40">
          <p className="text-center md:text-left">
            © 2024 Seshadripuram Institute. <span className="hidden sm:inline">Crafted with excellence.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
