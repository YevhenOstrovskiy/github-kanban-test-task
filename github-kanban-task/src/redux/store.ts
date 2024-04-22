import { configureStore } from '@reduxjs/toolkit';
import issuesSlice from './slices/issuesSlice';
import repoInfo from './slices/repoInfoSlice';


export const store = configureStore({
  reducer: {
    issues: issuesSlice,
    repoInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
