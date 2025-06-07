import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllEducations } from '../../sanity/sanityService';

interface EducationState {
  educations: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EducationState = {
  educations: [],
  status: 'idle',
  error: null,
};

export const fetchAllEducationsData = createAsyncThunk(
  'educations/fetchAll',
  async () => {
    const response = await fetchAllEducations();
    console.log("response from educationSlice", response);
    return response;
  }
);

const educationSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEducationsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllEducationsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.educations = action.payload;
      })
      .addCase(fetchAllEducationsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch educations';
      });
  },
});

export default educationSlice.reducer;