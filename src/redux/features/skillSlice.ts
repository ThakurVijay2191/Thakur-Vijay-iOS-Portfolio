import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllSkills } from '../../sanity/sanityService';

interface SkillState {
  skills: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SkillState = {
  skills: [],
  status: 'idle',
  error: null,
};

export const fetchAllSkillsData = createAsyncThunk(
  'skills/fetchAll',
  async () => {
    const response = await fetchAllSkills();
    console.log("response from skillSlice", response);
    return response;
  }
);

const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSkillsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllSkillsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.skills = action.payload;
      })
      .addCase(fetchAllSkillsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch skills';
      });
  },
});

export default skillSlice.reducer;