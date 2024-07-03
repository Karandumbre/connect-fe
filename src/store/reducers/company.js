import { createSlice } from '@reduxjs/toolkit';

import { REDUCER_NAME } from '../types';

const initialState = {
  name: '',
  description: '',
  address: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    zipcode: '',
    countryCode: '',
  },
};

const companySlice = createSlice({
  name: REDUCER_NAME.COMPANY,
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.address = {
        ...action.payload.address,
      };
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { setCompany, reset } = companySlice.actions;

export default companySlice.reducer;
