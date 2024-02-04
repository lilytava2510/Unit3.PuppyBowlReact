import { puppyBowlApi } from "../Api/puppyBowlApi";
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({ 
    reducer: {
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,

    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});