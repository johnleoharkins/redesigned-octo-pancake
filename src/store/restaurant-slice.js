import {createSlice} from "@reduxjs/toolkit";


const a = async () => {
    const fetchInit = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: "cors",
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
    }
    const res = await fetch(`http://localhost:5000/restaurant/menu`, fetchInit)
    const json = await res.json()
    return json
}


const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        newMenuItem: {
            id: '',
            category: 'appetizer',
            name: '',
            price: "00.00",
            description: '',
            imageURL: ''
        },
        menuItems: []
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
        },
        updateMenuItems(state, action){
            // const fetchInit = {
            //     method: "GET",
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     mode: "cors",
            //     cache: 'no-cache',
            //     referrerPolicy: 'no-referrer',
            // }
            // const res = await fetch(`http://localhost:5000/restaurant/menu`, fetchInit)
            // const json = await res.json()
            // state.menuItems = json
            state.menuItems = action.payload
        }
    }
})

export const RestaurantActions = RestaurantSlice.actions;

export default RestaurantSlice;