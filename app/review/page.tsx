"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus, StarIcon } from 'lucide-react';
import React, { useState } from 'react'

interface CustomerReviewI {
  customerName: string
  starRating: number;
  comment: string;
}

const page = () => {
  const [customerReviewData, setCustomerReviewData] = useState<CustomerReviewI[]>([])

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
        <CustomerReviewCard 
          customerName='Atqiya'
          starRating={5}
          comment='What you think about, sharing our last name?'
        />
        <CustomerReviewCard 
          customerName='Atqiya'
          starRating={5}
          comment='What you think about, sharing our last name?'
        />
        <CustomerReviewCard 
          customerName='Atqiya'
          starRating={5}
          comment='What you think about, sharing our last name?'
        />
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
    <Card className='shadow-md border-2 border-gold' data-aos="fade-up">
      <CardHeader className='flex flex-row items-center w-full justify-between'>
        <p className='font-regular'>{customerName}</p>
        <div className='flex font-medium flex-row gap-3 text-gold items-center'>
          {starRating} <StarIcon className='h-4 w-4' />
        </div>
      </CardHeader>
      <CardContent>
        <p className='font-regular text-black/70'>
          {comment}
        </p>
      </CardContent>
    </Card>
  )
}