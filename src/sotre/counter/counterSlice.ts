import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
  initCount: boolean;
}

const initialState: CounterState = {
  count: 5,
  initCount: false,
};

const counterSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    initializeCounter(state, action: PayloadAction<number>) {
      if (state.initCount) return;
      state.count = action.payload;
      state.initCount = true;
    },
    addOne(state) {
      state.count += 1;
    },
    substractionOne(state) {
      if (state.count === 0) {
        return;
      }
      state.count -= 1;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, substractionOne, resetCounter,initializeCounter } = counterSlice.actions;

export default counterSlice.reducer;
