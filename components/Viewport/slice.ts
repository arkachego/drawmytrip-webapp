// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import MenuItemType from '@/types/MenuItemType';

interface ViewportState {
  items: MenuItemType[];
};


const initialState: ViewportState = {
  items: [],
};

const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    resetState: () => {
      return {
        ...initialState,
      };
    },
    setItems: (state: ViewportState, action: PayloadAction<MenuItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { resetState, setItems } = viewportSlice.actions;
export default viewportSlice.reducer;
