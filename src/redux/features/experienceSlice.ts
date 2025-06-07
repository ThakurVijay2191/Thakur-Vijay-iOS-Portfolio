import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllExperiences } from '../../sanity/sanityService';

interface ExperienceState {
  experiences: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ExperienceState = {
  experiences: [],
  status: 'idle',
  error: null,
};

export const fetchAllExperiencesData = createAsyncThunk(
  'experiences/fetchAll',
  async () => {
    const response = await fetchAllExperiences();
    console.log("response from experienceSlice", response);
    return response;
  }
);

const experienceSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllExperiencesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllExperiencesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experiences = action.payload;
      })
      .addCase(fetchAllExperiencesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch experiences';
      });
  },
});

export default experienceSlice.reducer;