import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import {useNavigate} from "react-router-dom"
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

export const RegUser = createAsyncThunk(
    'user/newUser',
    async (userAuth, {rejectWithValue, dispatch}) => {
        try {
            const NewUser = {
                username : userAuth.username,
                email: userAuth.email,
                password: userAuth.password
            }
            const response = await fetch('http://localhost:8002/api/user',{
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
            if(data.indexOf("unique_email") !== -1){
                throw new Error('email already used')
            }               
            //useNavigate('/todo')
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const AuthUser = createAsyncThunk(
    "user/Authuser", 
    async(userAuth, {rejectWithValue}) => {
        try {
            const user = {
                email: userAuth.email,
                password: userAuth.password
            }
            const response = await fetch('http://localhost:8002/api/userAuth', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error.message)
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
            state.error = null
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = "reject"
            state.error = "Server error"
        })
        builder.addCase(RegUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
              } else {
                state.error = action.error.message;
              }
        })
        builder.addCase(RegUser.fulfilled, (state, action) => {
            state.status = "resolved"
            state.user = action.payload
            state.error = null
        })
        builder.addCase(AuthUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
              } else {
                state.error = action.error.message;
              }
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
