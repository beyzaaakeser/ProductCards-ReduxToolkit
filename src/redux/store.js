import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice.js";
import modalSlice from "./slices/modalSlice.js";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        modal: modalSlice,
    }

})