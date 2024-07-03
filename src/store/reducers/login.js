// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

import storageService from 'src/utils/storage-service';

import { REDUCER_NAME } from '../types';

const resetAppUserState = () => {
  storageService.clearToken();
  return initialState;
};

const checkValidAccessToken = () => {
  const token = storageService.getAccessToken();
  if (token === null || token === undefined || token === 'undefined' || token === '') {
    return false;
  }
  return true;
};

// Define the initialState for the slice
const initialState = {
  isLoggedIn: checkValidAccessToken() || false,
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
    reset: (state) => {
      resetAppUserState();
      state.isLoggedIn = false;
    },
  },
});

// Export the action creators
export const { logIn, logOut } = loginSlice.actions;

// Export the reducer
export default loginSlice.reducer;
