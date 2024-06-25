"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signInSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Flower1 from '@/public/flower1.svg'
import Flower2 from '@/public/flower2.svg'
import Image from 'next/image'

const SignInPage = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log("SUBMITTED WITH VALUE: ", values)

  }

  return (
      <div className='relative wrapper overflow-hidden flex items-center justify-center h-screen'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='bg-white wrapper border-2 border-gold rounded-lg shadow-lg space-y-8 w-[600px]  p-6'>
            <h1 className='text-center text-3xl text-gold font-alta'>Sign In to SEASalon</h1>
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
              Sign In
            </Button>
            <div className='text-center w-full underline text-gold'>
              <Link href="/sign-up">
                <p className='text-center'>
                  Don't have an account?
                </p>
              </Link>
            </div>
          </form>
        </Form>
        <Image src={Flower1} alt="Flower" className='absolute hidden md:block -z-50 top-0 translate-x-[300px] translate-y-[-350px]'/>
      </div>
  )
}

export default SignInPage