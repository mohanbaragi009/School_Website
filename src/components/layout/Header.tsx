
"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Seshadripuram, Bangalore</span>
            <span className="flex items-center gap-1"><Phone size={14} /> +91 (80) 2356-1234</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@seshadripuram.edu</span>
          </div>
          <div className="flex gap-4">
            <Link href="/alumni" className="hover:text-accent transition-colors">Alumni</Link>
            <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/admissions" className="hover:text-accent transition-colors font-bold text-accent">Admissions Open</Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">SG</div>
          <div>
            <h1 className="text-xl md:text-2xl font-headline font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-sm font-semibold text-accent tracking-widest">GATEWAY</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-accent transition-colors">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
              About Us
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link href="/about/vision">Vision & Mission</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/about/history">Our History</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/about/leadership">Leadership</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/academics" className="text-sm font-semibold hover:text-accent transition-colors">Academics</Link>
          <Link href="/admissions" className="text-sm font-semibold hover:text-accent transition-colors">Admissions</Link>
          <Link href="/activities" className="text-sm font-semibold hover:text-accent transition-colors">Student Life</Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-accent transition-colors">Contact</Link>
          <Button size="sm" className="bg-accent hover:bg-accent/90">Staff Portal</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t py-4 px-4 space-y-4">
          <Link href="/" className="block text-lg font-semibold text-primary">Home</Link>
          <Link href="/about" className="block text-lg font-semibold text-primary">About Us</Link>
          <Link href="/academics" className="block text-lg font-semibold text-primary">Academics</Link>
          <Link href="/admissions" className="block text-lg font-semibold text-primary">Admissions</Link>
          <Link href="/activities" className="block text-lg font-semibold text-primary">Student Life</Link>
          <Link href="/contact" className="block text-lg font-semibold text-primary">Contact</Link>
          <Button className="w-full bg-accent">Staff Portal</Button>
        </div>
      )}
    </header>
  );
}
