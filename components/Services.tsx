import React from 'react'

import HairStyling from '@/public/haircutstyling.svg'
import Manicure from '@/public/manicure.svg'
import FacialTreatment from '@/public/facialtreatments.svg'
import Image from 'next/image'

const serviceData = [
  {
    title: "Haircuts and Styling",
    description: "Get a fresh look with our expert haircuts and styling services.",
    image: HairStyling
  },
  {
    title: "Manicure and Pedicure",
    description: "Enjoy our relaxing and rejuvenating manicure and pedicure treatments.",
    image: Manicure
  },
  {
    title: "Facial Treatments",
    description: "Revitalize your skin with our luxurious facial treatments.",
    image: FacialTreatment
  }
]

const Services = () => {
  return (
    <div className='wrapper flex flex-col gap-y-12 items-center mt-16'>
      <div className='text-center space-y-4' data-aos="fade-up">
        <h3 className='text-3xl font-alta text-gold font-bold'>Our Services</h3>
        <p className='text-black/50 text-center max-w-[750px]'>
        Explore our premium beauty treatments, from luxurious facials to expert hair styling, tailored to rejuvenate and enhance your natural beauty.
      </p>
      </div>
      <div className='flex flex-col md:flex-row gap-6' data-aos="fade-up">
        {serviceData.map(item => (
          <ServiceCard 
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <div  id="servicesection" />
    </div>
  )
}

export default Services

const ServiceCard = ({
  title, description, image
}:{
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='shadow-md rounded-sm flex items-center justify-center w-full h-[200px] object-cover overflow-hidden'>
        <Image 
          src={image}
          alt={title}
        />
      </div>
      <div>
        <p className=' text-black/80 text-[18px]'>{title}</p>
        <p className='text-black/60 text-[14px]'>{description}</p>
      </div>
    </div>
  )
}