import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import counter3Reducer from './counter3Slice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // state => state.counter1
    counter3: counter3Reducer, // state => state.counter1
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store.dispatch;
