import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        user:null,
        loading:true,
        error:false
    },
    reducers:{
        onPending:(state)=>{
            state.user=null,
            state.loading=true,
            state.error=false
        },
        onRejected:(state, params)=>{
            state.user=null,
            state.loading=true,
            state.error=params.payload
        },
        onFulfiled:(state, params)=>{
            state.user=params.payload,
            state.loading=false,
            state.error=false
        }
    }
})

const userActions = userSlice.actions;

export {userActions};
export default userSlice;