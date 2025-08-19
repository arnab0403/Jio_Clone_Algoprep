import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slice/UserSlice"


const store = configureStore({
    reducer: {
        userSlice:userSlice.reducer
    }
})


export default store;