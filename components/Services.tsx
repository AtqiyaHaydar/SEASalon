import React from 'react'

import HairStyling from '@/public/haircutstyling.svg'
import Manicure from '@/public/manicure.svg'
import FacialTreatment from '@/public/facialtreatments.svg'

const Services = () => {
  return (
    <div className='wrapper flex flex-col gap-y-12 items-center mt-16'>
      <div className='text-center space-y-4'>
        <h3 className='text-3xl font-alta text-gold font-bold' data-aos="fade-up">Our Services</h3>
        <p className='text-black/50 text-center max-w-[750px]'>
        Explore our premium beauty treatments, from luxurious facials to expert hair styling, tailored to rejuvenate and enhance your natural beauty.
      </p>
      </div>
      <div>
      
      </div>
      <div  id="servicesection" />
    </div>
  )
}

export default Services