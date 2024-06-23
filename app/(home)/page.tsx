"use client"

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';

import Salon from "@/public/Salon.png"
import Hero from '@/components/Hero';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <Hero />
    </div>
  )
}

export default HomePage