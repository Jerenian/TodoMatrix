import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
//import { addTodo } from "../../../server/controller/TodoController"
export const fetchToDo = createAsyncThunk(
    'todo/fetchToDo',
    async (id, {dispatch}) => {
        const response = await fetch(`http://localhost:8002/api/gettodo/${id}`)
        const data = await response.json()
        dispatch(addTodo(data))
    }
)
const ToDo = createSlice({
    name: 'todo',
    initialState: {
        todo: []
    },
    reducers : {
        addTodo(state, action) {
            console.log(action.payload)
            state.todo.push({
                user_id: action.payload.user_id,
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
    extraReducers: (builder) => {
        builder.addCase(fetchToDo.fulfilled, (state, action) => {
        })
    }
})
export const {addTodo} = ToDo.actions
export default ToDo.reducer
