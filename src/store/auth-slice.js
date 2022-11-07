import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        user_id: 0,
        isAdmin: 0,
        isAuthd: false,
        loginModalOpen: false,
        loginError: {
            errorMessage: '',
            statusCode: 0
        },
        showSideNav: false
    },
    reducers: {
        login(state, action){        },
        loginSuccessful(state, action){
            localStorage.setItem("access_token", action.payload.access_token)
            localStorage.setItem("refresh_token", action.payload.refresh_token)
            state.username = action.payload.username
            state.user_id = action.payload.user_id
            state.isAuthd = true
        },
        loginFailed(state, action){
            state.username = ''
            state.isAuthd = false
            state.loginError = action.payload

        },
        logout(state, action){
            state.username = ''
            state.user_id = 0
            state.isAdmin = 0
            state.isAuthd = false
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        },
        openLoginModal(state){
            state.loginModalOpen = true;
        },
        closeLoginModal(state){
            state.loginModalOpen = false;
        },
        toggleSideNav(state){
            state.showSideNav = !state.showSideNav;
        }
    }
})

export const AuthActions = AuthSlice.actions;

export default AuthSlice;