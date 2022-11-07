import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: counterReducer,
});

export default store;
