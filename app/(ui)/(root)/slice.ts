'use client';

// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MantineColorsTuple } from "@mantine/core";

interface GlobalState {
  width: number;
  height: number;
  loading: boolean;
  profile: object | null;
}

const initialState: GlobalState = {
  width: window.innerWidth,
  height: window.innerHeight,
  loading: true,
  profile: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    resetState: () => {
      return {
        ...initialState,
      };
    },
    setWidth: (state: GlobalState, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state: GlobalState, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setLoading: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProfile: (state: GlobalState, action: PayloadAction<object | null>) => {
      state.profile = action.payload;
    },
  },
});

export const {
  resetState,
  setWidth,
  setHeight,
  setLoading,
  setProfile,
} = globalSlice.actions;
export default globalSlice.reducer;
