import {createSlice} from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        newMenuItem: {
            category: 'appetizer',
            name: '',
            price: "00.00",
            description: '',
            imageURL: null
        }
    },
    reducers: {
        updateNewMenuItemCategory(state, action){
            state.newMenuItem.category = action.payload
        },
        updateNewMenuItemName(state, action){
            state.newMenuItem.name = action.payload
        },
        updateNewMenuItemPrice(state, action){
            state.newMenuItem.price = action.payload
        },
        updateNewMenuItemDescription(state, action){
            state.newMenuItem.description = action.payload
        },
        updateNewMenuItemImageFile(state, action){
            state.newMenuItem.imageURL = action.payload
        },
        resetFormField(state){
            state.newMenuItem.category = 'appetizer'
            state.newMenuItem.name = ''
            state.newMenuItem.price = '00.00'
            state.newMenuItem.description = ''
            state.newMenuItem.imageURL = null
            state.newMenuItem.error = null

        },
        setError(state, action){
            state.newMenuItem.error = action.payload
        }
    }
})

export const RestaurantActions = RestaurantSlice.actions;

export default RestaurantSlice;