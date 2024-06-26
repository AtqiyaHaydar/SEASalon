"use server"

import prisma from "@/lib/prisma";
import { branchSchema, serviceSchema } from "@/lib/schema";
import { Branch, Service } from "@prisma/client";
import { z } from "zod";

export async function addService(
  values: z.infer<typeof serviceSchema>
): Promise<Service> {
  try {
    const service = await prisma.service.create({
      data: {
        serviceName: values.serviceName,
        duration: values.duration,
      }
    })
    return service
  } catch (error) {
    throw new Error("Error creating customer review");
  }
}

export async function addBranch(
  values: z.infer<typeof branchSchema>
) {
  try {
    const branch = await prisma.branch.create({
      data: {
        branchName: values.branchName,
        branchLocation: values.branchLocation,
        openingTime: values.openingTime,
        closingTime: values.closingTime,
        services: values.services ? {
          create: values.services.map(service => ({
            serviceName: service.serviceName,
            duration: service.duration,
          }))
        } : undefined,
      },
    });
    return branch;
  } catch (error) {
    throw new Error("Error creating branch");
  }
}

export async function getAllBranch() {
  try {
    return prisma.branch.findMany()
  } catch (error) {
    throw new Error("Error fetching all branch")
  }
}