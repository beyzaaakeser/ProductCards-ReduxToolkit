import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    modal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        modalFunction: (state) => {
            state.modal = !state.modal;
        }
    }
})

export default modalSlice.reducer;

export const {modalFunction} = modalSlice.actions;