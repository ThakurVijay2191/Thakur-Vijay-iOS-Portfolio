import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import experienceReducer from './features/experienceSlice';
import projectReducer from './features/projectSlice';
import skillReducer from './features/skillSlice';
import educationReducer from './features/educationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    experiences: experienceReducer,
    projects: projectReducer,
    skills: skillReducer,
    educations: educationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;