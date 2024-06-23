import React from 'react'

import Logo from "@/public/Logo.svg"
import Image from 'next/image'

const Header = () => {
  return (
    <header className='fixed w-full top-0 h-[80px] py-4 px-8 flex justify-between items-center bg-black text-gold' data-aos="fade-down">
      <div className='wrapper flex items-center justify-between'>
        <div className='flex gap-x-4 items-center'>
          <Image 
            src={Logo}
            alt="Logo"
            className="h-10 w-10"
          />
          <h1 className='text-2xl poppins-regular font-great-vibes'>
            SEA Salon
          </h1>
        </div>
      </div>

      {/* Desktop Navigation */}
      <DesktopNavigation />

      {/* Mobile Navigation */}
      <MobileNavigation />
    </header>
  )
}

export default Header

const DesktopNavigation = () => {
  return (
    <div className='hidden md:flex'>

    </div>
  )
}

const MobileNavigation = () => {
  return (
    <div className='flex md:hidden'>

    </div>
  )
}