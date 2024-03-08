import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count3: number;
}

const initialState: CounterState = {
  count3: 0,
};

export const counter3Slice = createSlice({
  name: 'counter3',
  initialState,
  reducers: {
    increment3: (state): void => {
      state.count3 += 1;
    },
    decrement3: (state) => {
      state.count3 -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment3, decrement3 } = counter3Slice.actions;

export default counter3Slice.reducer;
