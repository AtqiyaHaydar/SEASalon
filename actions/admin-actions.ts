"use server"

import prisma from "@/lib/prisma";
import { branchSchema, serviceSchema } from "@/lib/schema";
import { Service } from "@prisma/client";
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
    return prisma.branch.findMany({
      include: {
        services: true,
      },
    })
  } catch (error) {
    throw new Error("Error fetching all branch")
  }
}

export async function getServicesByBranchId(id: number) {
  try {
    return await prisma.service.findMany({
      where: {
        branchId: id
      }
    })    
  } catch (error) {
    throw new Error("Error fetching the services")
  }
}

export async function addServiceForBranch(name: string, values: z.infer<typeof serviceSchema>) {
  try {
    const branch = await prisma.branch.findUnique({
      where: {
        branchName: name, 
      },
    });

    if (!branch) {
      throw new Error('Branch not found');
    }

    const updatedBranch = await prisma.branch.update({
      where: {
        branchId: branch.branchId, 
      },
      data: {
        services: {
          create: {
            serviceName: values.serviceName,
            duration: values.duration,
          },
        },
      },
      include: {
        services: true,
      },
    });

    return updatedBranch;
  } catch (error) {
    throw new Error("Error adding service to branch");
  }
}