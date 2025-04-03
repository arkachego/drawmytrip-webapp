// Libraries
import { prisma } from "@/utilities/database";

export const readUser: (id: string) => Promise<object> = async (id) => {
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


export const createUser : (id: string, first_name: string, last_name: string, email: string) => Promise<object> = async (id, first_name, last_name, email) => {
  const user = await prisma.user.create({
    data: {
      id,
      first_name,
      last_name,
      Contact: {
        create: {
          email,
        },
      },
      Preference: {
        create: {},
      },
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
