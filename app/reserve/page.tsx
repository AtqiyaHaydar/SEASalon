import React from 'react'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const page = () => {
  return (
    <>
      <div className='h-[200px] md:h-[300px] w-full mt-[80px] flex items-center justify-center gap-y-3 flex-col'>
        <h1 className='font-alta text-3xl md:text-5xl text-center text-gold'>Reservation</h1>
        <h3 className='text-black/50'>
        Effortless Booking, Beautiful Results: Schedule Your Salon Experience Today!
        </h3>
      </div>
      <div>

      </div>
    </>
  )
}

export default page