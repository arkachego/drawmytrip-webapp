// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MantineColorsTuple } from "@mantine/core";

interface GlobalState {
  loading: boolean;
  profile: object | null;
}

const initialState: GlobalState = {
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
    setLoading: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProfile: (state: GlobalState, action: PayloadAction<object | null>) => {
      state.profile = action.payload;
    },
  },
});

export const { resetState, setLoading, setProfile } = globalSlice.actions;
export default globalSlice.reducer;
