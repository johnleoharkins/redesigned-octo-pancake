import {configureStore} from "@reduxjs/toolkit";
import NewLogSlice from "./new-log-slice";
import AuthSlice from "./auth-slice";
import themeSlice from "./theme-slice";
import RestaurantSlice from "./restaurant-slice";



const store = configureStore({
    reducer: {
        newLog: NewLogSlice.reducer,
        auth: AuthSlice.reducer,
        theme: themeSlice.reducer,
        restaurant: RestaurantSlice.reducer,
    }
})

export default store;