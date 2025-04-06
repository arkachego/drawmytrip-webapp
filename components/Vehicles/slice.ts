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
        category: '',
        tenancy: 1,
        registration: '',
      } : action.payload;
    },
  },
});

export const {
  resetState,
  setListLoading,
  loadVehiclesList,
  setEditLoading,
  loadVehicleItem,
} = globalSlice.actions;
export default globalSlice.reducer;
