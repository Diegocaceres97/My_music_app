import {  createSlice } from '@reduxjs/toolkit';

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        items: null
    },
    reducers: {
        SET_ITEMS: (state, action)=>{
            state.items = action.payload;
        }
    }
})

export const {SET_ITEMS} = FavoriteSlice.actions;
export const selectITEMS= state => state.items.items;
export default FavoriteSlice.reducer;