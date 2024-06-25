"use server"

import prisma from "@/lib/prisma"

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    console.error(`Error fetching user by email ${email}:`, error);
    throw error; 
  }
}

export async function getUserReservationByName(name: string) {
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        name,
      }
    })

    return reservations
  } catch (error) {
    console.error(`Error fetching reservations by name ${name}:`, error);
    throw error;
  }
}