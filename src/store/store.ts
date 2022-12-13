import { configureStore } from '@reduxjs/toolkit';
import { reduces as reduxReducers } from '../modules/Redux';

const store = configureStore({
  reducer: {
    redux: reduxReducers,
  },
});

export default store;
