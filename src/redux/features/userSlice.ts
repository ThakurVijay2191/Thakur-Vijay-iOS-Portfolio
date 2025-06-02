import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSingleUser } from '../../sanity/sanityService';

interface UserState {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const fetchUserData = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await fetchSingleUser();
    console.log("response from userSlice", response);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch user';
      });
  },
});

export default userSlice.reducer; 