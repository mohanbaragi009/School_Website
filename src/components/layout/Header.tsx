"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, Mail, MapPin, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { getPlaceholderById } from '@/lib/placeholder-images';

export function Header() {
  const logoUrl = getPlaceholderById('school-logo');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#home' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[60]">
      {/* Top Bar - Desktop Only */}
      <div className="bg-primary text-white py-4 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 opacity-90 hover:text-accent transition-colors cursor-pointer">
              <MapPin size={14} className="text-[hsl(var(--highlight))]" /> Seshadripuram, Bangalore
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:text-accent transition-colors cursor-pointer">
              <Phone size={14} className="text-[hsl(var(--highlight))]" /> +91 (80) 2356-1234
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:text-accent transition-colors cursor-pointer">
              <Mail size={14} className="text-[hsl(var(--highlight))]" /> info@seshadripuram.edu
            </span>
          </div>
          <div className="flex gap-8">
            <Link href="#contact" className="hover:text-accent transition-colors">Alumni</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="#home" className="text-[hsl(var(--highlight))] animate-pulse font-black">Admissions Open</Link>
          </div>
        </div>
      </div>
      
      {/* Signature Yellow Highlight Line */}
      <div className="h-1.5 bg-[hsl(var(--highlight))] w-full"></div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 xl:py-6 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 overflow-hidden rounded-2xl border border-primary/5 bg-white p-1.5 shadow-lg group-hover:scale-105 transition-all">
            <Image 
              src={logoUrl} 
              alt="SET Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-2xl xl:text-3xl font-headline font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-[9px] lg:text-[11px] xl:text-xs font-black text-accent tracking-[0.5em] uppercase mt-1">Institute</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] xl:text-xs font-bold uppercase tracking-widest text-primary/80 hover:text-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          <Button asChild className="bg-accent hover:bg-accent/90 rounded-full px-8 xl:px-10 text-[11px] xl:text-xs font-bold uppercase tracking-[0.2em] h-12 shadow-xl shadow-accent/20">
            <Link href="#staff">Staff Portal</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5 h-12 w-12">
                <Menu size={32} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none">
              <div className="h-full flex flex-col bg-primary text-white">
                <SheetHeader className="p-8 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-left flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white p-2">
                        <Image src={logoUrl} alt="Logo" fill className="object-contain" />
                      </div>
                      <div className="text-white">
                        <p className="font-headline font-bold text-xl leading-none">Seshadripuram</p>
                        <p className="text-[10px] font-bold text-accent tracking-widest uppercase mt-1">Institute</p>
                      </div>
                    </SheetTitle>
                    <SheetClose className="p-2 hover:bg-white/10 rounded-full text-white">
                      <X className="w-8 h-8" />
                    </SheetClose>
                  </div>
                </SheetHeader>
                
                <div className="flex-grow overflow-y-auto py-12 px-8">
                  <nav className="space-y-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link 
                          href={link.href} 
                          className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] hover:bg-accent transition-all group border border-white/5"
                        >
                          <span className="text-2xl font-bold tracking-tight">{link.name}</span>
                          <ChevronRight className="w-6 h-6 opacity-30 group-hover:translate-x-2 group-hover:opacity-100 transition-all" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="p-8 border-t border-white/10 bg-white/5">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 rounded-[2rem] py-8 text-xl font-bold shadow-2xl shadow-accent/20">
                      <Link href="#staff">Staff Login</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
