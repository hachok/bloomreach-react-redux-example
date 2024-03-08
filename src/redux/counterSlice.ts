import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  count2: number;
}

const initialState: CounterState = {
  count: 0,
  count2: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state): void => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    increment2: (state): void => {
      state.count2 += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, increment2 } = counterSlice.actions;

export default counterSlice.reducer;
