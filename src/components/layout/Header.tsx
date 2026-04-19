
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
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
    { name: 'Admissions', href: '#resources' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-xl sticky top-0 z-[60] shadow-sm">
      {/* Top Yellow Bar */}
      <div className="h-1.5 bg-[hsl(var(--highlight))] w-full"></div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-4 lg:gap-6 group">
          {/* Circular Logo - Perfect Edge-to-Edge */}
          <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-500 overflow-hidden shrink-0">
            <Image 
              src={logoUrl} 
              alt="SET Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-[10px] lg:text-[11px] font-black text-accent tracking-[0.5em] uppercase mt-1">Institute</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Button asChild className="bg-gradient-to-r from-[hsl(var(--accent))] to-indigo-600 hover:from-indigo-600 hover:to-[hsl(var(--accent))] text-white rounded-full px-10 py-6 text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95 border-none">
              <Link href="#staff">Staff Portal</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary h-12 w-12">
                <Menu size={32} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none bg-primary">
              <div className="h-full flex flex-col text-white">
                <SheetHeader className="p-8 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-left flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-white rounded-full shadow-lg overflow-hidden shrink-0">
                        <Image src={logoUrl} alt="Logo" fill className="object-cover" />
                      </div>
                      <div className="text-white">
                        <p className="font-bold text-2xl leading-none">Seshadripuram</p>
                        <p className="text-[10px] font-bold text-accent tracking-[0.4em] uppercase mt-1">Institute</p>
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
                          <span className="text-xl font-bold tracking-tight uppercase">{link.name}</span>
                          <ChevronRight className="w-6 h-6 opacity-30 group-hover:translate-x-2 group-hover:opacity-100 transition-all" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="p-8 border-t border-white/10 bg-white/5">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-gradient-to-r from-accent to-indigo-600 rounded-full py-8 text-lg font-bold shadow-2xl">
                      <Link href="#staff">Staff Portal</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom Navy Bar */}
      <div className="h-2 bg-primary w-full"></div>
    </header>
  );
}
