import { createSlice } from '@reduxjs/toolkit';

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

export const getCount = (state) => {
    return state.value
}

export default counterSlice.reducer;
