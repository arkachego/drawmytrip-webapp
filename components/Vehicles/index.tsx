'use client';

// Libraries
import { useEffect } from "react";

// Actions
import { loadVehiclesList } from "./slice";

// Components
import List from "./List";
import Edit from "./Edit";

// Utilities
import { useAppDispatch } from "@/utilities/redux";
import { getServerInstance } from "@/utilities/server";

const Vehicles: React.FC = () => {

  const dispatch = useAppDispatch();
  
    useEffect(() => {
      fetchVehicles();
    }, []);
  
    const fetchVehicles: () => void = async () => {
      try {
        const serverInstance = await getServerInstance();
        const getResponse = await serverInstance.get('/vehicle');
        const vehicleData = getResponse.data;
        dispatch(loadVehiclesList(vehicleData));
      }
      catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <List/>
      <Edit/>
    </>
  );

};

export default Vehicles;
