import { configureStore } from '@reduxjs/toolkit';

// reducers
import loginReducer from './reducers/login';
import loadingReducer from './reducers/loading';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    loading: loadingReducer,
  },
});
