"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { customerReviewSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, StarIcon } from 'lucide-react';
import React, { useState } from 'react'
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
import { Input } from "@/components/ui/input"
import { FaStar } from 'react-icons/fa';
import { toast } from 'sonner';

interface CustomerReviewI {
  customerName: string
  starRating: number;
  comment: string;
}

const page = () => {
  const [customerReviewData, setCustomerReviewData] = useState<CustomerReviewI[]>([
    {
      customerName: "Chaewon",
      starRating: 5,
      comment: "Amazing experience at SEASalon! Friendly staff, perfect haircut and color. Clean and beautifully decorated. Will return!"
    },
  ])

  const form = useForm<z.infer<typeof customerReviewSchema>>({
    resolver: zodResolver(customerReviewSchema),
    defaultValues: {
      customerName: "",
      starRating: 1,
      comment: ""
    }
  })

  const onSubmit = (values: z.infer<typeof customerReviewSchema>) => {
    if (values.customerName && values.starRating && values.comment) {
      const newReview: CustomerReviewI = {
        customerName: values.customerName,
        starRating: values.starRating,
        comment: values.comment,
      };
      setCustomerReviewData([...customerReviewData, newReview]);
      toast.success("Review successfully added!")
      form.reset()
    }
    else {
      toast.warning("Please fill in all fields.")
    }
  };

  return (
    <>
      <div className='h-[200px] md:h-[250px] w-full mt-[80px] flex items-center justify-center gap-y-6 flex-col' data-aos="fade-down">
          <h1 className='font-alta text-3xl md:text-5xl text-center text-gold'>What Our Clients Are Saying</h1>
          <Dialog>
            <DialogTrigger asChild>
            <Button className='bg-gold flex gap-x-4 hover:gap-x-6 transition-all hover:bg-orange-300 text-white rounded-full'>
              Add a Review <Plus className='w-6 h-6' />
            </Button>
            </DialogTrigger>
            <DialogContent className='rounded-lg max-w-[450px]'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField 
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-black/70'>Customer Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Enter your name' {...field} className='border-gold focus-visible:ring-transparent' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="starRating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-black/70'>Rating</FormLabel>
                        <div className='flex flex-row items-center gap-x-3'>
                          <input type="hidden" {...field} />
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className='w-8 h-8 cursor-pointer'
                              onClick={() => field.onChange(index + 1)}
                              color={index < field.value ? "#EBC58E" : "#1c1c1c"}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-black/70'>Comment</FormLabel>
                        <FormControl>
                          <Input placeholder='Your experience matters! Tell us more...' {...field} className='border-gold focus-visible:ring-transparent' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogClose asChild>
                    <Button type="submit" className='bg-gold rounded-full hover:bg-orange-300'>
                        Submit Review
                    </Button>
                  </DialogClose>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
      </div>
      <div className='wrapper grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        {customerReviewData.map(item => (
          <CustomerReviewCard 
            customerName={item.customerName}
            starRating={item.starRating}
            comment={item.comment}
          />
        ))}
      </div>
    </>
  )
}

export default page

const CustomerReviewCard = ({
  customerName, 
  starRating, 
  comment
}: CustomerReviewI) => {
  return (
    <Card className='shadow-md border-2 border-gold w-full md:max-w-[300px]' data-aos="fade-up">
      <CardHeader className='flex flex-row items-center w-full justify-between'>
        <p className='font-regular font-medium text-black/70'>{customerName}</p>
        <div className='flex font-medium flex-row gap-3 text-gold items-center'>
          {starRating} <StarIcon className='h-4 w-4' />
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-[14px] text-black/70'>
          {comment}
        </p>
      </CardContent>
    </Card>
  )
}