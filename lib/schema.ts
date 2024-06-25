import { z, object, string } from 'zod'

export const customerReviewSchema = z.object({
  customerName: z.string().min(1),
  starRating: z.number().min(1).max(6),
  comment: z.string().min(1).max(100),
})

export const reservationSchema = z.object({
  name: z.string().min(1),
  phoneNumber: z.string().min(1).max(15),
  serviceType: z.enum(["Haircuts and Styling", "Manicure and Pedicure", "Facial Treatments"]),
  date: z.date(),
  time: z.string(),
})

export const userDataSchema = z.object({
  fullName: z.string().min(1).max(50),
  email: z.string().min(1),
  phoneNumber: z.string().min(1).max(15),
  password: z.string().min(1).max(16),
  role: z.enum(["Customer", "Admin"])
})
 
export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const signUpSchema = object({
  fullName: z.string().min(1),
  email: z.string().min(1),
  phoneNumber: z.string().min(8),
  password: z.string().min(8),
})