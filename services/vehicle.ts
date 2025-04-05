// Libraries
import { prisma } from "@/utilities/database";

// Types
import VehicleType from "@/types/VehicleType";

export const readVehicle: (id: string) => Promise<object> = async (id) => {
  let user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      Contact: true,
      Address: true,
      Preference: true,
      Subscription: true,
    },
  });
  return user;
};


export const createVehicle : (payload: VehicleType) => Promise<VehicleType> = async (payload) => {
  const vehicle = await prisma.vehicle.create({
    data: payload,
  });

  return vehicle;
};
