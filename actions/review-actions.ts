"use server"

import prisma from "@/lib/prisma";
import { customerReviewSchema } from "@/lib/schema";
import { z } from "zod";
import { CustomerReview } from "@prisma/client";

export async function createCustomerReview(
  values: z.infer<typeof customerReviewSchema>
): Promise<CustomerReview> {
  try {
    const review = await prisma.customerReview.create({
      data: values,
    });
    return review;
  } catch (error) {
    throw new Error("Error creating customer review");
  }
}

export async function getCustomerReviews(): Promise<CustomerReview[]> {
  try {
    const reviews = await prisma.customerReview.findMany()
    return reviews
  } catch (error) {
    throw new Error("Error get customer review")   
  }
}