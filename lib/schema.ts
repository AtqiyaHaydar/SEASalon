import { z } from 'zod'

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