'use client';

// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import VehicleType from '@/types/VehicleType';

interface VehiclesState {
  list: {
    loading: boolean;
    items: VehicleType[];
  };
  edit: {
    loading: boolean;
    item: VehicleType | null;
  },
}

const initialState: VehiclesState = {
  list: {
    loading: true,
    items: [],
  },
  edit: {
    loading: false,
    item: null,
  },
};

const globalSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    resetState: () => {
      return {
        ...initialState,
      };
    },
    setListLoading: (state: VehiclesState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
    loadVehiclesList: (state: VehiclesState, action: PayloadAction<VehicleType[]>) => {
      state.list.items = action.payload;
    },
    setEditLoading: (state: VehiclesState, action: PayloadAction<boolean>) => {
      state.edit.loading = action.payload;
    },
    loadVehicleItem: (state: VehiclesState, action: PayloadAction<VehicleType | undefined | null>) => {
      state.edit.item = (action.payload === undefined) ? {
        title: '',
        description: '',
        image: null,
        category: '',
        fuel: '',
        mileage: 1,
        occupancy: 1,
        registration: '',
      } : action.payload;
    },
    setVehicleTitle: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.title = action.payload;
      }
    },
    setVehicleDescription: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.description = action.payload || null;
      }
    },
    setVehicleImage: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.image = action.payload || null;
      }
    },
    setVehicleCategory: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.category = action.payload;
      }
    },
    setVehicleFuel: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.fuel = action.payload;
      }
    },
    setVehicleMileage: (state: VehiclesState, action: PayloadAction<number>) => {
      if (state.edit.item) {
        state.edit.item.mileage = action.payload;
      }
    },
    setVehicleOccupancy: (state: VehiclesState, action: PayloadAction<number>) => {
      if (state.edit.item) {
        state.edit.item.occupancy = action.payload;
      }
    },
    setVehicleRegistration: (state: VehiclesState, action: PayloadAction<string>) => {
      if (state.edit.item) {
        state.edit.item.registration = action.payload;
      }
    },
  },
});

export const {
  resetState,
  setListLoading,
  loadVehiclesList,
  setEditLoading,
  loadVehicleItem,
  setVehicleTitle,
  setVehicleDescription,
  setVehicleImage,
  setVehicleCategory,
  setVehicleFuel,
  setVehicleMileage,
  setVehicleOccupancy,
  setVehicleRegistration,
} = globalSlice.actions;
export default globalSlice.reducer;
