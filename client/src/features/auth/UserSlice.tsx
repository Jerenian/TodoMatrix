import { createSlice } from "@reduxjs/toolkit";
import { IUSER } from "../../Types/types";
import { authAPI } from "../../app/services/auth";
import { userAPI } from "../../app/services/user";

interface IinitialState {
    user: IUSER & {token: string} | null,
    isAuth: boolean | null
}
const initialState : IinitialState = {
    user: null,
    isAuth : false
}
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addMatcher(authAPI.endpoints.register.matchFulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
        }),
        builder.addMatcher(authAPI.endpoints.login.matchFulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
        }),
        builder.addMatcher(authAPI.endpoints.current.matchFulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
        }),
        builder.addMatcher(userAPI.endpoints.remove.matchFulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = false
        })
        builder.addMatcher(userAPI.endpoints.update.matchFulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
        })
    }
})

export default UserSlice

export const {logout} = UserSlice.actions