import React from 'react'
import { Button } from './ui/button'

import Danielle from "@/public/Danielle.svg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='wrapper mt-[80px] md:h-[450px] h-full flex flex-col-reverse md:flex-row items-center justify-center'>
      <div className='flex flex-col gap-y-12 items-center md:items-start' data-aos="fade-right">
        <div className='space-y-[12px]'>
          <h2 className='text-gold text-5xl leading-[-25px] font-alta font-bold text-center md:text-start'>Beauty and Elegance Redefined.</h2>
          <p className='text-gold text-center md:text-start tracking-wider'>Experience top-notch treatments with a touch of elegance at our salon, where your beauty is enhanced and luxury is felt.</p>
        </div>
        <Button className='w-[250px] rounded-full bg-gold hover:bg-orange-300'>
          Reserve Now
        </Button>
      </div>
      <div>
        <Image 
          src={Danielle}
          alt="Model"
          className='max-h-[500px] max-w-[500px] md:h-[750px] md:w-[750px] md:translate-x-0 translate-x-[-60px]'
        />
      </div>
    </div>
  )
}

export default Hero