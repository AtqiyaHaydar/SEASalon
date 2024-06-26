"use client"

import { addBranch, addService } from '@/actions/admin-actions'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { branchSchema, serviceSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const page = () => {
  return (
    <div className='mt-[80px] wrapper min-h-[400px] mb-20'>
      <div className='h-[200px] flex text-center w-full items-center flex-col gap-y-4 justify-center text-gold'>
        <h1 className='text-3xl md:text-4xl'>
          Welcome Admin
        </h1>
        <div className='flex gap-4'>
          <CreateNewBranch />
          <CreateNewService />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default page

function CreateNewBranch() {
  const form = useForm<z.infer<typeof branchSchema>>({
    resolver: zodResolver(branchSchema),
    defaultValues: {
      branchName: "",
      branchLocation: "",
      openingTime: "",
      closingTime: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof branchSchema>) => {
    console.log(values)
    try {
      const branch = await addBranch(values)
      toast.success("Successfully created a new service")
      form.reset()
    } catch (error) {
      console.log(error)
      toast.error("Failed to create a new service")
    }
  }

  const timeOptions = [
    { value: '09:00', label: '09.00' },
    { value: '10:00', label: '10.00' },
    { value: '11:00', label: '11.00' },
    { value: '12:00', label: '12.00' },
    { value: '13:00', label: '13.00' },
    { value: '14:00', label: '14.00' },
    { value: '15:00', label: '15.00' },
    { value: '16:00', label: '16.00' },
    { value: '17:00', label: '17.00' },
    { value: '18:00', label: '18.00' },
    { value: '19:00', label: '19.00' },
    { value: '20:00', label: '20.00' },
    { value: '21:00', label: '21.00' },
    { value: '22:00', label: '22.00' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-x-4 hover:gap-x-6 bg-gold rounded-full hover:bg-orange-300'>
          Add Branch <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField 
              control={form.control}
              name="branchName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Branch Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter a branch name...'
                      {...field}
                      className='border-gold focus-visible:ring-transparent' 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="branchLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Branch Location
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter a branch location...'
                      {...field}
                      className='border-gold focus-visible:ring-transparent' 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='w-full flex flex-col md:flex-row justify-between gap-x-3 gap-y-8 md:gap-y-0'>
              <FormField 
                control={form.control}
                name="openingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-black/70'>
                      Opening Time
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='w-full md:w-[225px] border-gold focus-visible:ring-transparent translate-y-[-5px]'>
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
              <FormField 
                control={form.control}
                name="closingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-black/70'>
                      Closing Time
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='w-full md:w-[225px] border-gold focus-visible:ring-transparent translate-y-[-5px]'>
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
            <div className='flex flex-col md:flex-row gap-4'>
              <Button type="submit" className='bg-gold rounded-full hover:bg-orange-300'>
                  Create Branch
              </Button>
              <DialogClose asChild>
                <Button className='bg-white border-gold rounded-full border-2 hover:bg-white min-w-[120px] text-gold'>
                  Close
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

function CreateNewService() {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      serviceName: "",
      duration: 1,
    }
  })

  const onSubmit = async (values: z.infer<typeof serviceSchema>) => {
    console.log(values)
    try {
      const newService = await addService(values)
      toast.success("Successfully created a new service")
      form.reset()
    } catch (error) {
      console.log(error)
      toast.error("Failed to create a new service")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-x-4 hover:gap-x-6 bg-gold rounded-full hover:bg-orange-300'>
          Add Service <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField 
              control={form.control}
              name="serviceName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Service Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter a service name...'
                      {...field}
                      className='border-gold focus-visible:ring-transparent' 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black/70'>
                    Duration
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder='Enter a service name...'
                      {...field}
                      className='border-gold focus-visible:ring-transparent' 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='flex flex-col md:flex-row gap-4'>
              <Button type="submit" className='bg-gold rounded-full hover:bg-orange-300'>
                  Create Service
              </Button>
              <DialogClose asChild>
                <Button className='bg-white border-gold rounded-full border-2 hover:bg-white min-w-[120px] text-gold'>
                  Close
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}