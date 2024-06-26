import { z, string } from 'zod'

export const customerReviewSchema = z.object({
  customerName: z.string().min(1),
  starRating: z.number().min(1).max(6),
  comment: z.string().min(1).max(100),
})

export const reservationSchema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(1).max(15),
  serviceType: z.string(),
  date: z.date(),
  time: z.string(),
})

export const serviceSchema = z.object({
  serviceName: z.string().min(1),
  duration: z.number().min(1),
})

export const branchSchema = z.object({
  branchName: z.string().min(1),
  branchLocation: z.string().min(1),
  openingTime: z.string().min(1),
  closingTime: z.string().min(1),
})

export const userDataSchema = z.object({
  fullName: z.string().min(1).max(50),
  email: z.string().min(1),
  phoneNumber: z.string().min(1).max(15),
  password: z.string().min(1).max(16),
  role: z.enum(["Customer", "Admin"])
})
 
export const signInSchema = z.object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const signUpSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().min(1),
  phoneNumber: z.string().min(8),
  password: z.string().min(8),
})