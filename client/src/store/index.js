import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./UserSlicer"
import ToDoReducer from './TodoSlicer'
export default configureStore({
    reducer: {
        user: userReducer,
        ToDo: ToDoReducer,
        [API.reducerPath]: API.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(API.middleware)
})
