import { createSlice } from "@reduxjs/toolkit"

const Slicer = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers : {
        addUser(state, action) {
            console.log(action)
            state.user.push({
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.email
            })
        }
        

    }

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