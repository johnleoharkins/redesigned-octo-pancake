import {createSlice} from "@reduxjs/toolkit";

const grey_scale = {
    backgroundColor: "",
    color: ""
}

const themeSlice = createSlice({
    name: 'content',
    initialState: {

    },
    reducers: {

    }
})

export const themeActions = themeSlice.actions;

export default themeSlice;