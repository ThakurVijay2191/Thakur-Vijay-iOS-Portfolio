import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProjects } from '../../sanity/sanityService';

interface ProjectState {
  projects: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  status: 'idle',
  error: null,
};

export const fetchAllProjectsData = createAsyncThunk(
  'projects/fetchAll',
  async () => {
    const response = await fetchAllProjects();
    console.log("response from projectSlice", response);
    return response;
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjectsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProjectsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchAllProjectsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch projects';
      });
  },
});

export default projectSlice.reducer;