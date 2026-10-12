import {createSlice} from "@reduxjs/toolkit";

// Immer: New Draft create krta h
// Original Object: Draft(Duplicate Object) : Update maarega
//      {count:0}           {count:1}             {count:1}
// New Object return kro poora || Draft diya h usko update kro      


const reactslicer = createSlice({
    name:"slice1",
    initialState:{count:0},  ///state = {count:0}
    reducers: {
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count=0},
        customIncreaser: (state,action)=>{state.count+=action.payload}
    }
})

//action contains --> {type:"slice1/CustomIncreaser",payload:(arguments)}
export const {Increment,Decrement,Reset,customIncreaser} = reactslicer.actions;

export default reactslicer.reducer;