'use client';

// Libraries
import { useEffect } from "react";

// Actions
import { loadVehiclesList, setListLoading } from "./slice";

// Components
import List from "./List";
import Edit from "./Edit";

// Utilities
import { useAppDispatch, useAppSelector } from "@/utilities/redux";
import { getServerInstance } from "@/utilities/server";

const Vehicles: React.FC = () => {

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.vehicles.list.loading);
  
  useEffect(() => {
    if (loading) {
      fetchVehicles();
    }
  }, [ loading ]);

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
    finally {
      dispatch(setListLoading(false));
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
