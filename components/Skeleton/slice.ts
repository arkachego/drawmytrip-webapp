// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import MenuItemType from '@/types/MenuItemType';

interface SkeletonState {
  items: MenuItemType[];
};


const initialState: SkeletonState = {
  items: [],
};

const skeletonSlice = createSlice({
  name: 'skeleton',
  initialState,
  reducers: {
    resetState: () => {
      return {
        ...initialState,
      };
    },
    setItems: (state: SkeletonState, action: PayloadAction<MenuItemType[]>) => {
      state.items = action.payload;
    },
  },
});

export const { resetState, setItems } = skeletonSlice.actions;
export default skeletonSlice.reducer;
