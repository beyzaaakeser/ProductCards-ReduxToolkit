import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data:[],
    keyword:""
}

const dataSlice = createSlice({

    name: "data",
    initialState: initialState,
    reducers:{
        createDataFunc: (state, action)=>{
            state.data= [...state.data, action.payload];
        },

        sortingDataFunc: (state, action)=>{
            state.data= [...state.data.sort((a,b)=> action.payload === "asc"
                ? a.price - b.price
                : action.payload === "desc"
                    ? b.price - a.price
                    : null) ];
        },

        deleteDataFunc: (state, action)=>{
            state.data= [...state.data.filter(item=>item.id !== action.payload)];
        },

        updateDataFunc: (state, action)=>{
            state.data= [...state.data.map(item=>item.id == action.payload.id
                ? ({...item, ...action.payload}) : item)];
        },
        searchDataFunc: (state, action)=>{
            state.keyword= action.payload
        }
    }
})

export default dataSlice.reducer;

export const {createDataFunc, deleteDataFunc, updateDataFunc, sortingDataFunc, searchDataFunc} = dataSlice.actions;