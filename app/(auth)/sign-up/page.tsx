"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { createUser } from '@/actions/auth-actions'
import { redirect, useRouter } from 'next/navigation'
import Link from 'next/link'

const SignUpPage = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      await createUser(values)
      toast.success("Successfully created an account!")
      router.push("/sign-in")
    } catch (error) {
      console.log(error)
      toast.error("An error occured, catch error")
    }
  }

  return (
    <div className='overflow-hidden flex items-center justify-center h-screen mt-[80px] wrapper'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-[600px] border-2 border-gold rounded-lg shadow-lg space-y-8 p-6'>
          <h1 className='text-center text-3xl text-gold font-alta'>Sign Up to SEASalon</h1>
          <FormField 
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-black/70'>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Enter your full name' 
                    {...field}
                    className='border-gold focus-visible:ring-transparent'
                  />
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
                <FormLabel className='text-black/70'>Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Enter your phone number' 
                    {...field}
                    className='border-gold focus-visible:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-black/70'>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Enter your email' 
                    {...field}
                    className='border-gold focus-visible:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-black/70'>Password</FormLabel>
                <FormControl>
                  <Input 
                    placeholder='Enter your password' 
                    {...field}
                    className='border-gold focus-visible:ring-transparent'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='bg-gold hover:bg-orange-300 rounded-full w-full'>
            Sign Up
          </Button>
          <div className='text-center w-full underline text-gold'>
            <Link href="/sign-in">
              <p className='text-center'>
                Already have an account?
              </p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUpPage