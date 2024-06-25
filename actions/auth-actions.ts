"use server"

import prisma from "@/lib/prisma"
import { signInSchema, signUpSchema } from "@/lib/schema";
import { z } from "zod";

export async function getUserByEmail(email: any, password: any) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      }
    })
    
    return user;
  } catch (error) {
    throw new Error("Cannot find the specific user")
  }
}

export async function createUser(value: z.infer<typeof signUpSchema>) {
  const { fullName, phoneNumber, email, password } = value;

  await prisma.user.create({
    data: {
      fullName,
      phoneNumber,
      email,
      password
    }
  })
}