import React from 'react'

import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <header className='fixed w-full top-0 h-[80px] py-4 flex justify-between items-center' data-aos="fade-down">
      <div className='wrapper w-full flex justify-between items-center'>
        <div className='flex gap-x-8 items-center'>
          <Image 
            src={Logo}
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className='text-3xl text-gold font-alta'>
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
          <Menu className='text-black' />
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
      <Link href="/" className='hover:border-b hover:border-black'>
        MEMBER
      </Link>
      <Link href="/" className='hover:border-b hover:border-black'>
        LOGIN
      </Link>
    </div>
  )
}