import {createSlice} from "@reduxjs/toolkit";

const FoodSlicer = createSlice()({
    name:"slice2",
    initialState:{count:0},
    reducers:{
        addItems:(state) => {state.count++},
        RemoveItems:(state) => {state.count--},
    }
})

export const {addItems,RemoveItems} = FoodSlicer.actions;

export default FoodSlicer.reducer;