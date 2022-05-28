import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice';
import carsReducer from '../slice/carsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carsReducer,
    }
})