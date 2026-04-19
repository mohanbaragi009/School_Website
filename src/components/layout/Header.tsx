
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
    { name: 'Home', href: '/' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/activities' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[60]">
      {/* Top Bar - Desktop Only */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 opacity-80"><MapPin size={12} className="text-accent" /> Seshadripuram, Bangalore</span>
            <span className="flex items-center gap-1.5 opacity-80"><Phone size={12} className="text-accent" /> +91 (80) 2356-1234</span>
            <span className="flex items-center gap-1.5 opacity-80"><Mail size={12} className="text-accent" /> info@seshadripuram.edu</span>
          </div>
          <div className="flex gap-6">
            <Link href="/alumni" className="hover:text-accent transition-colors">Alumni</Link>
            <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/admissions" className="text-accent animate-pulse">Admissions Open</Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative w-10 h-10 md:w-16 md:h-16 overflow-hidden rounded-2xl border-2 border-primary/5 bg-white p-1 shadow-sm group-hover:shadow-md transition-shadow">
            <Image 
              src={logoUrl} 
              alt="SET Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-headline font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-[10px] md:text-xs font-bold text-accent tracking-[0.3em] uppercase mt-0.5">Institute</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-xs font-bold uppercase tracking-widest text-primary/70 hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
              About
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl">
              <DropdownMenuItem asChild><Link href="/about/vision" className="w-full cursor-pointer py-2 rounded-lg font-bold text-xs uppercase tracking-wider">Vision & Mission</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/about/history" className="w-full cursor-pointer py-2 rounded-lg font-bold text-xs uppercase tracking-wider">Our History</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/about/leadership" className="w-full cursor-pointer py-2 rounded-lg font-bold text-xs uppercase tracking-wider">Leadership</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button size="sm" className="bg-accent hover:bg-accent/90 rounded-full px-8 text-xs font-bold uppercase tracking-widest h-10 shadow-lg shadow-accent/20">
            Staff Portal
          </Button>
        </nav>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/admissions">
            <Button size="sm" variant="outline" className="border-accent text-accent rounded-full text-[10px] h-8 px-4 font-bold uppercase">Apply</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5 h-10 w-10">
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none">
              <div className="h-full flex flex-col bg-primary text-white">
                <SheetHeader className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-left flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
                        <Image src={logoUrl} alt="Logo" fill className="object-contain" />
                      </div>
                      <div className="text-white">
                        <p className="font-headline font-bold text-lg leading-none">Seshadripuram</p>
                        <p className="text-[10px] font-bold text-accent tracking-widest uppercase mt-0.5">Institute</p>
                      </div>
                    </SheetTitle>
                    <SheetClose className="p-2 hover:bg-white/10 rounded-full">
                      <X className="w-6 h-6" />
                    </SheetClose>
                  </div>
                </SheetHeader>
                
                <div className="flex-grow overflow-y-auto py-8 px-6">
                  <nav className="space-y-4">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-accent transition-all group"
                      >
                        <span className="text-lg font-bold tracking-tight">{link.name}</span>
                        <ChevronRight className="w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                    <div className="pt-6">
                       <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4 ml-4">About Institution</p>
                       <div className="grid grid-cols-1 gap-3">
                          <Link href="/about/vision" className="p-4 bg-white/5 rounded-2xl font-bold text-sm">Vision & Mission</Link>
                          <Link href="/about/history" className="p-4 bg-white/5 rounded-2xl font-bold text-sm">Our History</Link>
                          <Link href="/about/leadership" className="p-4 bg-white/5 rounded-2xl font-bold text-sm">Leadership</Link>
                       </div>
                    </div>
                  </nav>
                </div>

                <div className="p-6 border-t border-white/10 space-y-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-2xl py-8 text-lg font-bold shadow-xl shadow-accent/20">
                    Staff Login
                  </Button>
                  <div className="flex justify-center gap-6 pt-4 text-white/60">
                    <Phone size={20} />
                    <Mail size={20} />
                    <MapPin size={20} />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
