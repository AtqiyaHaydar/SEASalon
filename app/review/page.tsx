"use client"

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

interface customerReview {
  customerName: string
  starRating: number;
  comment: string;
}

const page = () => {
  const [customerReviewData, setCustomerReviewData] = useState<customerReview[]>([])

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
      <div className='wrapper grid-cols-1 md:grid-cols-3'>

      </div>
    </>
  )
}

export default page