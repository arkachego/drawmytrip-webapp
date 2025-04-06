// store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Reducers
import globalReducer from '@/app/(ui)/(root)/slice';
import skeletonReducer from '@/components/Skeleton/slice';
import vehiclesReducer from '@/components/Vehicles/slice';

const rootReducer = combineReducers({
  global: globalReducer,
  skeleton: skeletonReducer,
  vehicles: vehiclesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
