import React from 'react'

import Image from 'next/image'
import Client from '@/public/client.svg'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'

const Clients = () => {
  return (
    <div className='w-full h-full md:h-[450px] bg-[#FBF7F4]'>
      <div className='wrapper flex md:flex-row flex-col py-8 md:py-0 items-center justify-start gap-x-12'>
        <Image 
          src={Client}
          alt="Client"
          className='w-[450px] h-[450px]'
          data-aos="fade-right"
        />
        <div className='flex flex-col gap-y-8 justify-center items-center md:items-start md:justify-start' data-aos="fade-left">
          <div className='space-y-4 text-center md:text-start'>
            <h3 className='text-4xl text-gold font-alta'>Why Our Client <br />Choose Us</h3>
            <p className='tracking-wider text-black/70'>
              Experience an exceptional blend of expertise and luxury with our highly trained staff, top-quality products, and soothing ambiance. We prioritize customer satisfaction, ensuring every visit leaves you feeling rejuvenated and valued.
            </p>
          </div>
          <Link href="/review">
            <Button className='bg-gold flex gap-x-2 hover:gap-x-4 transition-all items-center justify-center text-white w-[200px] rounded-full hover:bg-orange-300'>
              Client's Reviews <ChevronRight className='w-6 h-6' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Clients