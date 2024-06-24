"use client"

import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { ArrowRight } from 'lucide-react';
import Clients from '@/components/Clients';

const HomePage = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(false);
      } else {
        setShowText(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col items-center gap-y-8'>
      <Hero />
      <div 
        data-aos="fade-up"
        className={`flex absolute bottom-20  text-gold text-xl`}
      >
        <a href="#servicesection" className={`${showText ? 'fade-in' : 'fade-out'} items-center hidden md:flex gap-x-4 cursor-pointer transition-all hover:gap-x-6`}>
          See Our Services <ArrowRight />
        </a>
      </div>
      <Clients />
      <Services />
    </div>
  )
}

export default HomePage