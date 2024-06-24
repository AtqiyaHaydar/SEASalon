"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { customerReviewSchema } from '@/schema/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, StarIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

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
    }
  ])

  const form = useForm<z.infer<typeof customerReviewSchema>>({
    resolver: zodResolver(customerReviewSchema),
    defaultValues: {
      customerName: "",
      starRating: 0,
      comment: ""
    }
  })

  const onSubmit = (values: z.infer<typeof customerReviewSchema>) => {
    console.log(values)
  }

  return (
    <>
      <div className='h-[300px] w-full mt-[80px] flex items-center justify-center gap-y-6 flex-col' data-aos="fade-down">
          <h1 className='font-alta text-3xl md:text-5xl text-center text-gold'>What Our Clients Are Saying</h1>
          <Dialog>
            <DialogTrigger asChild>
            <Button className='bg-gold flex gap-x-4 hover:gap-x-6 transition-all hover:bg-orange-300 text-white rounded-full'>
              Add a Review <Plus className='w-6 h-6' />
            </Button>
            </DialogTrigger>
            <DialogContent>

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
    <Card className='shadow-md border-2 border-gold max-w-[300px]' data-aos="fade-up">
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