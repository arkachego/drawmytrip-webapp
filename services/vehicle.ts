// Libraries
import { prisma } from "@/utilities/database";

// Types
import VehicleType from "@/types/VehicleType";

export const readVehicles: (userId: string) => Promise<VehicleType[]> = async (userId: string) => {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      user_id: userId,
    },
  });
  return vehicles;
};


export const createVehicle : (payload: VehicleType) => Promise<VehicleType> = async (payload) => {
  const count = await prisma.vehicle.count({
    where: {
      user_id: payload.user_id,
    },
  });

  if (count === 5) {
    throw new Error('Maximum 5');
  }

  const vehicle = await prisma.vehicle.create({
    data: payload,
  });

  return vehicle;
};
