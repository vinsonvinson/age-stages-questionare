import { configureStore } from "@reduxjs/toolkit";
import childReducer from "./childSlice";

export const store = configureStore({
    reducer: {
        child: childReducer,
    },
});
