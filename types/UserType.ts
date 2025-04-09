type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  is_blocked?: boolean;
  email: string;
  code?: string | null;
  phone?: string | null;
  date_format?: string;
  time_format?: string;
};

export default UserType;
