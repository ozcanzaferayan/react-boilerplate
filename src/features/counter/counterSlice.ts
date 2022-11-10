import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export const getCount = (state: RootState) => {
    return state.counter.value;
};

export default counterSlice.reducer;
