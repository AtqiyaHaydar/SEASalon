"use server"

import prisma from "@/lib/prisma";
import { customerReviewSchema, reservationSchema } from "@/lib/schema";
import { z } from "zod";
import { Reservation } from "@prisma/client";

export async function createCustomerReservation(
  values: z.infer<typeof reservationSchema>
): Promise<Reservation> {
  try {
    const reservation = await prisma.reservation.create({
      data: values,
    })
    return reservation;
  } catch (error) {
    console.log(error)
    throw new Error("Error creating customer reservation")
  }
}