"use client"

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='mt-[96px]'>
      <h1>SEA Salon, Beauty and Elegance Redefined</h1>
      <p>
        Experience top-notch treatments with a touch of elegance at our salon, where your beauty is enhanced and luxury is felt.
      </p>
    </div>
  )
}

export default HomePage