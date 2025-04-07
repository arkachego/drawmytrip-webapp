// Libraries
import { prisma } from "@/utilities/database";

// Types
import VehicleType from "@/types/VehicleType";

export const readVehicles: (userId: string) => Promise<VehicleType[]> = async (userId) => {
  const vehicles = await prisma.vehicle.findMany({
    where: {
      user_id: userId,
    },
  });
  return vehicles;
};

export const createVehicle : (userId: string, payload: VehicleType) => Promise<VehicleType> = async (userId, payload) => {
  const count = await prisma.vehicle.count({
    where: {
      user_id: userId,
    },
  });

  if (count === 5) {
    throw new Error('Maximum 5');
  }

  const vehicle = await prisma.vehicle.create({
    data: {
      ...payload,
      user_id: userId,
    },
  });

  return vehicle;
};

export const updateVehicle : (userId: string, vehicleId: string, payload: VehicleType) => Promise<VehicleType> = async (userId, vehicleId, payload) => {
  const vehicle = await prisma.vehicle.update({
    where: {
      id: vehicleId,
      user_id: userId,
    },
    data: payload,
  });

  return vehicle;
};

export const deleteVehicle : (userId: string, vehicleId: string) => Promise<void> = async (userId, vehicleId) => {
  await prisma.vehicle.delete({
    where: {
      id: vehicleId,
      user_id: userId,
    },
  });
};
