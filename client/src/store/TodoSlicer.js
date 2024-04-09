import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const FetchTodo = createAsyncThunk(
    'todo/Fetch',
    async ({rejectWithValue}) => {
        try {
            const response = await fetch('http://localhost:8002/authorization')
            if(!response.ok){
                throw Error('server Error :(')
            }
            const data = await response.json()
        } catch (error) {
            
        }
    }
)

export const AuthUser = createAsyncThunk(
    'todo/AuthUser',
    async (userAuth) => {
        try {

            const response = await fetch('http://localhost:8002/authorization'
            , {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userAuth)})
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
        user: [{id:'', name: '', email: '', password: ''}],
        status: null,
        error: null
    },
    reducers : {
        addUser(state, action) {
            state.user.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.email
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(AuthUser.pending , (state, action) => {
            state.status = "Loading"
        })
        builder.addCase(AuthUser.fulfilled , (state, action) => {
            state.status = "resolved"
            state.user = action.payload
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
                id: new Date().toISOString(),
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

// name: 'todos',
// initialState: {
//     todos: []
// },
//  reducers: {
//     addTodo(state, action) {
//         console.log(state)
//         console.log(action)
//             state.todos.push({
//                 id: new Date().toISOString(),
//                 text: action.payload.text, // В payload всегда то что мы передаем через функции внутри dispatch
//                 complited: false
//             })
//     },
//     removeTodo(state, action) {
//         state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
//     },
//     toggleTodoComplete(state, action) {
//         const toggledTodo = state.todos.find(todo => todo.id === action.payload.id) 
//         toggledTodo.complited = !toggledTodo.complited
//     }
//  },
// })