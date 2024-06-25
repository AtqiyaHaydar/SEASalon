"use client"

import React, { useEffect, useState } from 'react'

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
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createCustomerReservation } from '@/actions/reserve-actions';
import { toast } from 'sonner';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { getUserByEmail } from '@/actions/dashboard-actions';

const timeOptions = [
  { value: '09:00 - 10.00', label: '09.00 - 10.00' },
  { value: '10:00 - 11.00', label: '10.00 - 11.00' },
  { value: '11:00 - 12.00', label: '11.00 - 12.00' },
  { value: '12:00 - 13.00', label: '12.00 - 13.00' },
  { value: '13:00 - 14.00', label: '13.00 - 14.00' },
  { value: '14:00 - 15.00', label: '14.00 - 15.00' },
  { value: '15:00 - 16.00', label: '15.00 - 16.00' },
  { value: '16:00 - 17.00', label: '16.00 - 17.00' },
  { value: '17:00 - 18.00', label: '17.00 - 18.00' },
  { value: '18:00 - 19.00', label: '18.00 - 19.00' },
  { value: '19:00 - 20.00', label: '19.00 - 20.00' },
  { value: '20:00 - 21.00', label: '20.00 - 21.00' },
  { value: '21:00 - 22.00', label: '21.00 - 22.00' },
];

const page = () => {
  const { data: session } = useSession();
  const [username, setUsername] = useState<string | null>('');

  if (!session) {
    redirect("/sign-in")
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const email = session?.user?.email;

      if (typeof email === 'string') {
        try {
          const user = await getUserByEmail(email); 
          console.log('User data:', user);
          
          if (user) {
            setUsername(user.fullName); 
          } else {
            console.error('User not found');
          }
        } catch (error) {
          
        }
      }
    }
  })

  const formReservation = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: username || '',
      phoneNumber: "",
      serviceType: "Haircuts and Styling",
      date: new Date(),
      time: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof reservationSchema>) => {
    try {
      console.log(values)
      await createCustomerReservation(values);
      toast.success("Reservation successfully added!")
      formReservation.reset();
    } catch (error) {
      console.log(error)
      toast.error("Failed to create a reservation")
    }
  }

  return (
    <>
      <div className='h-[200px] md:h-[250px] w-full mt-[80px] flex items-center justify-center gap-y-3 flex-col' data-aos="fade-down">
        <h1 className='font-alta text-3xl md:text-5xl text-center text-gold'>Reservation</h1>
        <h3 className='text-black/50 text-center'>
          Effortless Booking, Beautiful Results: Schedule Your Salon Experience Today!
        </h3>
      </div>
      <div data-aos="fade-up" className='wrapper flex w-full justify-center'>
        <Form {...formReservation}>
          <form className='shadow-md space-y-6 border-2 w-full md:w-[600px] border-gold rounded-xl mb-20 py-10 px-6 md:translate-y-[-50px]' onSubmit={formReservation.handleSubmit(onSubmit)}>
            <FormField 
              control={formReservation.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your name...' {...field} className='border-gold focus-visible:ring-transparent' defaultValue={username || ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={formReservation.control}
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
              control={formReservation.control}
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
            <div className='flex flex-col md:flex-row items-center w-full gap-x-6 gap-y-6 md:gap-y-0'>
              <FormField 
                control={formReservation.control}
                name="date"
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='text-black/70'>
                      Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild className='border-gold w-full'>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField 
                control={formReservation.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-black/70'>
                      Time
                    </FormLabel>
                    <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='w-[225px] border-gold focus-visible:ring-transparent translate-y-[-5px]'>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='flex flex-col items-center'>
                        <ScrollArea className='h-[150px]'>
                          {timeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} className='text-center w-full'>
                              {option.label}
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className='bg-gold rounded-full w-full hover:bg-orange-300'>
              Create Reservation
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default page