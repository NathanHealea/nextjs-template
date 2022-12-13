import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReduxState {
  value: number;
}

const initialState: ReduxState = {
  value: 0,
};

export const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const actions = reduxSlice.actions;

export const reduces = reduxSlice.reducer;
