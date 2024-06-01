// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

import storageService from 'src/utils/storage-service';

import { REDUCER_NAME } from '../types';

const resetAppUserState = () => {
  storageService.clearToken();
  return initialState;
};

// Define the initialState for the slice
const initialState = {
  isLoggedIn: storageService.getAccessToken() || true,
};

// Create a slice for the isLoggedIn state with reducers to handle actions
const loginSlice = createSlice({
  name: REDUCER_NAME.LOGIN,
  initialState,
  reducers: {
    // Action to set isLoggedIn to true
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    // Action to set isLoggedIn to false
    logOut: (state) => {
      resetAppUserState();
      state.isLoggedIn = false;
    },
  },
});

// Export the action creators
export const { logIn, logOut } = loginSlice.actions;

// Export the reducer
export default loginSlice.reducer;
