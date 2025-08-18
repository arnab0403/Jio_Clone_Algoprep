import { createSlice } from "@reduxjs/toolkit"

const counterInputSlice = createSlice({
    name:"counterInputSlice",
    initialState:{
        count:0,
        delta:1
    },
    reducers:{
        increament:(state)=>{
            state.count=state.count+state.delta;
        },
        decreament:(state)=>{
            state.count=state.count-state.delta;
        },
        updateDelta:(state,params)=>{
            const delta = params.payload;
            state.delta = delta;
        }
    }
})

export default counterInputSlice;