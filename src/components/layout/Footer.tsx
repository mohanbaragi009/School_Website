
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: School Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-lg">SG</div>
            <h2 className="text-xl font-headline font-bold">Seshadripuram Gateway</h2>
          </div>
          <p className="text-sm text-blue-100 leading-relaxed">
            Empowering students with quality education since 1930. Committed to excellence, integrity, and fostering a spirit of innovation in every learner.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook size={18} /></Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Twitter size={18} /></Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Linkedin size={18} /></Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/admissions" className="hover:text-accent transition-colors flex items-center gap-2"><ExternalLink size={12} /> Admissions 2024</Link></li>
            <li><Link href="/calendar" className="hover:text-accent transition-colors flex items-center gap-2"><ExternalLink size={12} /> Academic Calendar</Link></li>
            <li><Link href="/exams" className="hover:text-accent transition-colors flex items-center gap-2"><ExternalLink size={12} /> Examination Results</Link></li>
            <li><Link href="/gallery" className="hover:text-accent transition-colors flex items-center gap-2"><ExternalLink size={12} /> Campus Gallery</Link></li>
            <li><Link href="/alumni" className="hover:text-accent transition-colors flex items-center gap-2"><ExternalLink size={12} /> Alumni Association</Link></li>
          </ul>
        </div>

        {/* Column 3: Departments */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2">Departments</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/dept/science" className="hover:text-accent transition-colors">Science & Technology</Link></li>
            <li><Link href="/dept/arts" className="hover:text-accent transition-colors">Arts & Humanities</Link></li>
            <li><Link href="/dept/commerce" className="hover:text-accent transition-colors">Commerce & Business</Link></li>
            <li><Link href="/dept/sports" className="hover:text-accent transition-colors">Physical Education</Link></li>
            <li><Link href="/dept/research" className="hover:text-accent transition-colors">Research & Innovation</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold border-b border-white/20 pb-2">Contact Us</h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin className="text-accent shrink-0" size={20} />
              <span>No. 27, Nagappa Street, Seshadripuram, Bangalore - 560020, Karnataka, India</span>
            </div>
            <div className="flex gap-3">
              <Phone className="text-accent shrink-0" size={20} />
              <a href="tel:+918023561234" className="hover:underline">+91 (80) 2356-1234</a>
            </div>
            <div className="flex gap-3">
              <Mail className="text-accent shrink-0" size={20} />
              <a href="mailto:info@seshadripuram.edu" className="hover:underline">info@seshadripuram.edu</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
        <p>© 2024 Seshadripuram Gateway Educational Institutions. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
