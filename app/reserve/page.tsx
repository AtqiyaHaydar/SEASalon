"use client"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema } from '@/lib/schema';
import { Input } from '@/components/ui/input';

const page = () => {
  const form = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      serviceType: "Haircuts and Styling",
      dateAndTime: new Date(),
    }
  })

  const onSubmit = (values: z.infer<typeof reservationSchema>) => {
    console.log(values)
  }

  return (
    <>
      <div className='h-[200px] md:h-[300px] w-full mt-[80px] flex items-center justify-center gap-y-3 flex-col'>
        <h1 className='font-alta text-3xl md:text-5xl text-center text-gold'>Reservation</h1>
        <h3 className='text-black/50 text-center'>
        Effortless Booking, Beautiful Results: Schedule Your Salon Experience Today!
        </h3>
      </div>
      <div className='wrapper flex justify-center'>
        <Form {...form}>
          <form className=' shadow-md space-y-6 border-2 w-full md:w-[600px] border-gold rounded-xl mb-20 py-12 px-6 md:translate-y-[-50px]' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your name...' {...field} className='border-gold focus-visible:ring-transparent' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your phone number...' {...field} className='border-gold focus-visible:ring-transparent' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Reservation Type
                  </FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='border-gold focus-visible:ring-transparent'>
                        <SelectValue placeholder="Select a service type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='border-gold'>
                      <SelectItem value="Haircuts and Styling">Haircuts and Styling</SelectItem>
                      <SelectItem value="Manicure and Pedicure">Manicure and Pedicure</SelectItem>
                      <SelectItem value="Facial Treatments">Facial Treatments</SelectItem>
                    </SelectContent>
                  </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="dateAndTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Date and Time
                  </FormLabel>
                  <FormControl>

                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  )
}

export default page