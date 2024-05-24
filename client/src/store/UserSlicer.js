import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { fetchToDo } from "./TodoSlicer"
import {jwtDecode} from "jwt-decode"
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
            console.log(data)
            fetchToDo(data[0].id)
            if(data.indexOf("unique_email") !== -1){
                throw new Error('email already used')
            }
            return jwtDecode(data)

        } catch (error) {
            
            return rejectWithValue(error.message)
            
        }
    }
)
export const AuthUser = createAsyncThunk(
    "user/Authuser", 
    async(userAuth, {rejectWithValue, dispatch}) => {
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
            if(!response.ok) {
                throw new Error('Cant\'t add task. Server error.')
            }
            const data = await response.json()
            localStorage.setItem('token', data)
            return jwtDecode(data)
        }
            catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message)
        }
    }
)
const UserSlicer = createSlice({
    name: 'user',
    initialState: {
        user: [],
        status: null,
        error: null
    },
    reducers : {
        addUser(state, action) {
            console.log(state.status)
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
            state.status = "rejected"
            if (action.payload) {
                if(action.payload === "Unexpected end of JSON input"){
                    state.error = "Неверный логин или пароль"
                }
                else{
                    state.error = "Проблемы на стороне сервера"
                }
              } else {
                state.error = action.error.message;
              }
        })
        builder.addCase(AuthUser.fulfilled, (state, action) => {
            state.status = "resolved"
            state.error = null
        })
    }

})


export const {addUser} = UserSlicer.actions
export default UserSlicer.reducer
