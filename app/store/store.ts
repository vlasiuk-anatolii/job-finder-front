import { configureStore } from '@reduxjs/toolkit';
import { jobsReducer } from './slices/jobsSlice';
import { userReducer } from './slices/userSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      jobs: jobsReducer,
      user: userReducer,
    },
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
