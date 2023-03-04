import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../reducers/reducer';

const store = configureStore ({
    reducer: {
        shop: shopReducer,
    },
});

export default store;
