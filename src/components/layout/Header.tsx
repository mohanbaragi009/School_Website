
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Phone, Mail, MapPin } from 'lucide-react';
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
} from "@/components/ui/sheet";
import { getPlaceholderById } from '@/lib/placeholder-images';

export function Header() {
  const logoUrl = getPlaceholderById('school-logo');

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Desktop Only */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Seshadripuram, Bangalore</span>
            <span className="flex items-center gap-1"><Phone size={14} /> +91 (80) 2356-1234</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@seshadripuram.edu</span>
          </div>
          <div className="flex gap-4">
            <Link href="/alumni" className="hover:text-accent transition-colors font-medium">Alumni</Link>
            <Link href="/careers" className="hover:text-accent transition-colors font-medium">Careers</Link>
            <Link href="/admissions" className="hover:text-accent transition-colors font-bold text-accent">Admissions Open</Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-primary/10 bg-white p-0.5">
            <Image 
              src={logoUrl} 
              alt="SET Logo" 
              fill 
              className="object-contain"
              data-ai-hint="school logo"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-headline font-bold text-primary tracking-tight leading-none">SESHADRIPURAM</h1>
            <p className="text-[10px] md:text-sm font-semibold text-accent tracking-[0.2em] md:tracking-widest uppercase">Institute</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-accent transition-colors">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1 focus:outline-none">
              About Us
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild><Link href="/about/vision" className="w-full cursor-pointer">Vision & Mission</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/about/history" className="w-full cursor-pointer">Our History</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/about/leadership" className="w-full cursor-pointer">Leadership</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/academics" className="text-sm font-semibold hover:text-accent transition-colors">Academics</Link>
          <Link href="/admissions" className="text-sm font-semibold hover:text-accent transition-colors">Admissions</Link>
          <Link href="/activities" className="text-sm font-semibold hover:text-accent transition-colors">Student Life</Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-accent transition-colors">Contact</Link>
          <Button size="sm" className="bg-accent hover:bg-accent/90 rounded-full px-6">Staff Portal</Button>
        </nav>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5">
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="border-b pb-4 mb-4">
                <SheetTitle className="text-left flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/10">
                    <Image 
                      src={logoUrl} 
                      alt="SET Logo" 
                      fill 
                      className="object-contain"
                      data-ai-hint="school logo"
                    />
                  </div>
                  <span className="font-headline font-bold text-primary">Seshadripuram Institute</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium p-2 hover:bg-accent/5 rounded-md transition-colors">Home</Link>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">About Institution</p>
                  <Link href="/about/vision" className="block text-base font-medium p-2 pl-4 hover:bg-accent/5 rounded-md">Vision & Mission</Link>
                  <Link href="/about/history" className="block text-base font-medium p-2 pl-4 hover:bg-accent/5 rounded-md">Our History</Link>
                  <Link href="/about/leadership" className="block text-base font-medium p-2 pl-4 hover:bg-accent/5 rounded-md">Leadership</Link>
                </div>
                <Link href="/academics" className="text-lg font-medium p-2 hover:bg-accent/5 rounded-md transition-colors">Academics</Link>
                <Link href="/admissions" className="text-lg font-medium p-2 hover:bg-accent/5 rounded-md transition-colors text-accent">Admissions 2024</Link>
                <Link href="/activities" className="text-lg font-medium p-2 hover:bg-accent/5 rounded-md transition-colors">Student Life</Link>
                <Link href="/contact" className="text-lg font-medium p-2 hover:bg-accent/5 rounded-md transition-colors">Contact</Link>
                <div className="pt-6 border-t mt-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-full py-6 text-lg font-bold">Staff Portal</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
