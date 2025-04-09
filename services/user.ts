// Libraries
import UserType from "@/types/UserType";
import { prisma } from "@/utilities/database";

const formatUser = (result: any) => {
  let user: UserType | null = null;
  if (result !== null) {
    user = {
      id: result.id,
      first_name: result.first_name,
      last_name: result.last_name,
      is_blocked: result.is_blocked,
      email: result.Contact[0].email,
      code: result.Contact[0].code,
      phone: result.Contact[0].phone,
      date_format: result.Preference[0].date_format,
      time_format: result.Preference[0].time_format,
    };
  }
  return user;
};

export const readUser: (id: string) => Promise<UserType | null> = async (id) => {
  let result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      Contact: true,
      Preference: true,
    },
  });
  return formatUser(result);
};


export const createUser : (payload: UserType) => Promise<UserType | null> = async ({ id, first_name, last_name, email }) => {
  const result = await prisma.user.create({
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
      Preference: true,
    },
  });
  return formatUser(result);
};
