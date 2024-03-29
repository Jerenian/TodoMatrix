import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./TodoSlicer"
export default configureStore({
    reducer: {
        user: userReducer
    }
})
