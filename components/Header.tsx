import React from 'react'

import Logo from "@/public/Logo.svg"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed w-full top-0 h-[80px] py-4 px-8 flex justify-between items-center' data-aos="fade-down">
      <div className='wrapper w-full flex justify-between items-center'>
        <div className='flex gap-x-8 items-center'>
          <Image 
            src={Logo}
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className='text-2xl text-gold font-great-vibes'>
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
    <div className={className}>
      <Link href="/" className='hover:border-b hover:border-black hover:font-medium'>
        HOME
      </Link>
      <Link href="/" className='hover:border-b hover:border-black hover:font-medium'>
        MEMBER
      </Link>
      <Link href="/" className='hover:border-b hover:border-black hover:font-medium'>
        LOGIN
      </Link>
    </div>
  )
}