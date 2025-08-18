import { configureStore } from "@reduxjs/toolkit";

import counterInputSlice from "./slice/CounterInputSlice";

const store = configureStore({
    reducer:{
        counterInputState: counterInputSlice.reducer
    }
});

export default store;