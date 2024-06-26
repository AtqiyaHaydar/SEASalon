"use server"

import prisma from "@/lib/prisma";
import { reservationSchema } from "@/lib/schema";
import { z } from "zod";

export async function createCustomerReservation(
  values: z.infer<typeof reservationSchema>
) {
  try {
    const branch = await prisma.branch.findUnique({
      where: {
        branchName: values.branchName
      }
    })

    if (!branch) {
      throw new Error('Branch not found');
    }

    console.log("BRANCH", branch)

    const reservation = await prisma.reservation.create({
      data : {
        name: values.name,
        phoneNumber: values.phoneNumber,
        date: values.date,
        time: values.time,
        branchId: branch.branchId,
      }
    })
    return reservation;
  } catch (error) {
    console.log(error)
    throw new Error("Error creating customer reservation")
  }
}