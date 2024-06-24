import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-16 md:py-8 px-16 w-full h-full text-center md:text-start  md:h-[250px]'>
      <div className='wrapper flex flex-col md:flex-row w-full justify-between gap-y-16 md:gap-y-0'>
        <div className='flex flex-col gap-y-12'>
          <div className='space-y-2'>
            <h1 className='font-liana text-gold text-4xl'>SEA Salon</h1>
            <p className='font-alta text-gold text-2xl'>Beauty and Elegance Redefined.</p>
          </div>
          <div className='flex gap-x-4 text-gold justify-center md:justify-start'>
            <Instagram />
            <Twitter />
            <Facebook />
          </div>
        </div>
        <div className='text-white flex flex-col gap-y-4'>
          <p className='text-xl font-medium'>Contact Details</p>
          <div className=''>
            Thomas
            (08123456789)
          </div>
          <div className=''>
            Sekar
            (08164829372)
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Footer