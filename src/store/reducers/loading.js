// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

import { REDUCER_NAME } from '../types';

// Define the initialState for the slice
const initialState = {
  isLoading: false,
};

// Create a slice for the isLoading state with reducers to handle actions
const loadingSlice = createSlice({
  name: REDUCER_NAME.LOADING,
  initialState,
  reducers: {
    // Action to set isLoading to true
    startLoading: (state) => {
      state.isLoading = true;
    },
    // Action to set isLoading to false
    stopLoading: (state) => {
      state.isLoading = false;
    },
    reset: (state) => {
      state.isLoading = false;
    },
  },
});

// Export the action creators
export const { startLoading, stopLoading } = loadingSlice.actions;

// Export the reducer
export default loadingSlice.reducer;
