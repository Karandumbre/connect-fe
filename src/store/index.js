import { configureStore } from '@reduxjs/toolkit';

// reducers
import userReducer from './reducers/user';
import loginReducer from './reducers/login';
import loadingReducer from './reducers/loading';
import companyReducer from './reducers/company';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    loading: loadingReducer,
    user: userReducer,
    company: companyReducer,
  },
});
