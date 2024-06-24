"use client"

import React, { useEffect, useState } from 'react'

import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed z-20 w-full top-0 h-[80px] py-4 flex justify-between items-center transition-colors duration-300 ${scrolled ? 'bg-white/50 border-b border-gold backdrop-blur-md' : 'bg-transparent'}`} data-aos="fade-down">
      <div className='wrapper w-full flex justify-between items-center'>
        <div className='flex gap-x-8 items-center'>
          <Image 
            src={Logo}
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className='text-3xl text-gold font-liana'>
            SEA Salon
          </h1>
        </div>

        <nav>
          <NavigationItems 
            className='hidden md:flex gap-x-16'
          />
          <MobileNavigation />
        </nav>
      </div>
    </header>
  )
}

export default Header

const MobileNavigation = () => {
  return (
    <div className='flex md:hidden'>
      <Sheet>
        <SheetTrigger asChild className='h-8 w-8 cursor-pointer'>
          <Menu className='text-gold' />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-y-12 items-center justify-center h-full'>
          <NavigationItems 
            className='flex flex-col gap-y-12 items-center justify-center h-full'
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}

const NavigationItems = ({
  className
}:{
  className: string
}) => {
  return (
    <div className={cn(
      className, "text-[18px]"
    )}>
      <Link href="/" className='hover:border-b hover:border-black'>
        HOME
      </Link>
      <Link href="/reserve" className='hover:border-b hover:border-black'>
        RESERVE
      </Link>
      <Link href="/review" className='hover:border-b hover:border-black'>
        REVIEW
      </Link>
      <Link href="/member" className='hover:border-b hover:border-black'>
        MEMBER
      </Link>
      <Link href="/sign-in" className='hover:border-b hover:border-black'>
        SIGN IN
      </Link>
    </div>
  )
}