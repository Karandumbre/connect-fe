import { createSlice } from '@reduxjs/toolkit';

import { REDUCER_NAME } from '../types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  logo: '',
  language: '',
  designation: '',
  experience: '',
  id: 0,
  phone: '',
};

const userSlice = createSlice({
  name: REDUCER_NAME.USER,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.logo = action.payload.imageUrl;
      state.language = action.payload.language;
      state.designation = action.payload.designation;
      state.experience = action.payload.experience;
      state.id = action.payload.id;
      state.phone = action.payload.phone;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
