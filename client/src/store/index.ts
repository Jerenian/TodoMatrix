import {configureStore} from '@reduxjs/toolkit'
import { API } from '../API/API'
import UserSlice from '../features/auth/UserSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { ApiMiddleware } from '../Middleware/auth'
const RootReducer = combineReducers({
    [API.reducerPath] : API.reducer,
    UserSlice
})
export const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(API.middleware).prepend(ApiMiddleware.middleware)
})


export type RootState = ReturnType<typeof store.getState>