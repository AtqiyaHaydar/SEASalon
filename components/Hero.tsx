import React from 'react'
import { Button } from './ui/button'

import Danielle from "@/public/Danielle.svg"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative wrapper mt-[80px] md:h-[525px] h-full flex flex-col-reverse md:flex-row items-center justify-center'>
      <div className='flex flex-col gap-y-12 items-center md:items-start'>
        <div className='space-y-[12px]'>
          <h2 data-aos="fade-right" className='text-gold text-5xl leading-[-25px] font-alta font-bold text-center md:text-start'>Beauty and Elegance Redefined.</h2>
          <p data-aos="fade-right" data-aos-duration="1200" className='text-orange-300 text-center md:text-start tracking-wider'>Experience top-notch treatments with a touch of elegance at our salon, where your beauty is enhanced and luxury is felt.</p>
        </div>
        <Link href="/reserve">
          <Button data-aos="fade-right" data-aos-duration="1400" className='w-[250px] rounded-full bg-gold hover:bg-orange-300'>
            Reserve Now
          </Button>
        </Link>
      </div>
      <div>
        <Image 
          src={Danielle}
          alt="Model"
          className='-z-20 max-h-[500px] max-w-[500px] md:h-[750px] md:w-[750px] md:translate-x-0 translate-x-[-60px]'
        />
      </div>
    </div>
  )
}

export default Hero