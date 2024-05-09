import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./UserSlicer"
import ToDoReducer from './TodoSlicer'
export default configureStore({
    reducer: {
        user: userReducer,
        ToDo: ToDoReducer
    }
})
