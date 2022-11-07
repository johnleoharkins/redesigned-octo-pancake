import {createSlice} from "@reduxjs/toolkit";


const NewLogSlice = createSlice({
    name: "newLog",
    initialState: {
        title: "",
        body: "",
        newLogOverlayOpen: false,
        error: ''
    },
    reducers: {
        updateTitle(state, action){
            state.title = action.payload
        },
        updateBody(state, action){
            state.body = action.payload
        },
        openLogOverlay(state, action){
            state.newLogOverlayOpen = true
        },
        closeLogOverlay(state, action){
            state.newLogOverlayOpen = false
        },
        postLogError(state, action){
            state.error = action.payload.errorMessage
        }
    }
})

export const newLogActions = NewLogSlice.actions

export default NewLogSlice;