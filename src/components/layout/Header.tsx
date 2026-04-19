"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, Mail, MapPin, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
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
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[60]">
      {/* Top Bar - Desktop Only */}
      <div className="bg-primary text-white py-4 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 opacity-90"><MapPin size={14} className="text-highlight" /> Seshadripuram, Bangalore</span>
            <span className="flex items-center gap-2 opacity-90"><Phone size={14} className="text-highlight" /> +91 (80) 2356-1234</span>
            <span className="flex items-center gap-2 opacity-90"><Mail size={14} className="text-highlight" /> info@seshadripuram.edu</span>
          </div>
          <div className="flex gap-8">
            <Link href="#contact" className="hover:text-highlight transition-colors">Alumni</Link>
            <Link href="#contact" className="hover:text-highlight transition-colors">Careers</Link>
            <Link href="#home" className="text-highlight animate-pulse">Admissions Open</Link>
          </div>
        </div>
      </div>
      
      {/* Golden Separator */}
      <div className="h-1.5 bg-[hsl(var(--highlight))] w-full hidden lg:block"></div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 lg:py-4 xl:py-6 flex justify-between items-center overflow-hidden">
        <Link href="#home" className="flex items-center gap-3 xl:gap-5 group shrink-0">
          <div className="relative w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 overflow-hidden rounded-2xl border-2 border-primary/5 bg-white p-1 shadow-sm group-hover:shadow-md transition-shadow">
            <Image 
              src={logoUrl} 
              alt="SET Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-headline font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-[9px] lg:text-[11px] xl:text-sm font-bold text-accent tracking-[0.4em] uppercase mt-1">Institute</p>
          </div>
        </Link>

        {/* Desktop Navigation - Improved Spacing for Responsiveness */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] xl:text-xs font-bold uppercase tracking-widest text-primary/80 hover:text-accent transition-colors relative group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          <Button asChild className="bg-accent hover:bg-accent/90 rounded-full px-6 xl:px-10 text-[10px] xl:text-xs font-bold uppercase tracking-widest h-10 xl:h-12 shadow-xl shadow-accent/20 shrink-0">
            <Link href="#staff">Staff Portal</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
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
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white p-1">
                        <Image src={logoUrl} alt="Logo" fill className="object-contain" />
                      </div>
                      <div className="text-white">
                        <p className="font-headline font-bold text-xl leading-none">Seshadripuram</p>
                        <p className="text-[10px] font-bold text-accent tracking-widest uppercase mt-1">Institute</p>
                      </div>
                    </SheetTitle>
                    <SheetClose className="p-2 hover:bg-white/10 rounded-full text-white">
                      <X className="w-7 h-7" />
                    </SheetClose>
                  </div>
                </SheetHeader>
                
                <div className="flex-grow overflow-y-auto py-10 px-8">
                  <nav className="space-y-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link 
                          href={link.href} 
                          className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-accent transition-all group"
                        >
                          <span className="text-xl font-bold tracking-tight">{link.name}</span>
                          <ChevronRight className="w-6 h-6 opacity-50 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="p-8 border-t border-white/10 space-y-6">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 rounded-2xl py-8 text-xl font-bold shadow-xl shadow-accent/20">
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
