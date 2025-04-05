type VehicleType = {
  created_at?: Date;
  updated_at?: Date;
  id?: string;
  user_id: string;
  title: string;
  description: string | null;
  category: string;
  tenancy: number;
  registration: string | null;
};

export default VehicleType;
