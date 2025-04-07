type VehicleType = {
  created_at?: Date;
  updated_at?: Date;
  id?: string;
  user_id?: string;
  title: string;
  description: string | null;
  image: string | null;
  category: string;
  fuel: string;
  mileage: number;
  occupancy: number;
  registration: string | null;
};

export default VehicleType;
