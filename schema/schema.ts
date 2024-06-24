import { z } from 'zod'

export const customerReviewSchema = z.object({
  customerName: z.string().min(1),
  starRating: z.number().min(1).max(6),
  comment: z.string().min(1).max(250),
})