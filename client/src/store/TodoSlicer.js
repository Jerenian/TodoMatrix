import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, Navigate } from 'react-router-dom';
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async ({rejectWithValue}) => {
        try {
            const response = await fetch('http://localhost:8002')
            if(!response.ok){
                throw Error("Server not Okay :(")
            }
            const  data = await response.json()
            return data
            
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const AuthUser = createAsyncThunk(
    'todo/newTodo',
    async (userAuth, {rejectWithValue, dispatch}) => {
        try {
            const NewUser = {
                username : userAuth.username,
                email: userAuth.email,
                password: userAuth.password
            }
            const response = await fetch('http://localhost:8002/authorization',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(NewUser)
            })
            if (!response.ok) {
                throw new Error('Cant\'t add task. Server error.')
            }
            const data = await response.json()
            dispatch(addUser(data[0]))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const Slicer = createSlice({
    name: 'user',
    initialState: {
        user: [],
        status: null,
        error: null
    },
    reducers : {
        addUser(state, action) {
            console.log(state)
            console.log(action)
            state.user.push({
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending , (state, action) => {
            state.status = "Loading"
        })
        builder.addCase(fetchTodos.fulfilled , (state, action) => {
            state.status = "resolved"
            state.user = action.payload
            console.log('extra' + state.user)
        })
    }

})
const ToDo = createSlice({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers : {
        addTodo(state, action) {
            state.todo.push({
                text: action.payload.text,
                type: action.payload.type,
                complited: action.payload.complited
            })
        },
        removeTodo(state, action) {
            state.todo.filter(todo => todo.id !== action.payload.id)
        },
        CompleteTodo(state,action){
            const toggledTodo = state.todo.find(todo => todo.id === action.payload.id) 
            toggledTodo.complited = !toggledTodo.complited
        }
    },
})

export const {addUser} = Slicer.actions
export default Slicer.reducer
