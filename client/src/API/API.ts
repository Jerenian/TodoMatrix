import {RootState, createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import { IUSER } from '../Types/types'
import { RootState } from '../store'
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8002/api',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState as RootState).auth.token || localStorage.getItem('token')

        token ? headers.set("authorization", `Berear ${token}`) : null
        return headers
    }
})

export const API = createApi({
    reducerPath: "auth",
    baseQuery,
    endpoints: () => ({})
})





// const URL = 'http://localhost:8002/api/' 
// export const userApi = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: URL,
//     }),
//     prepareHeaders: (headers, {getState}) => {
//         const token = getState().auth.token
//         if(token) {
//             headers.set('authorization', `Bearer ${token}`)
//         }
//         return headers
//     },
//     endpoints : (builder) => ({
//         RegUser: builder.mutation({
//             query: (body) => ({
//                 url: "user",
//                 method: "POST",
//                 body
//             }),
//         }),
//         AuthUser: builder.mutation({
//             query: (body) => ({
//                 url: "userAuth",
//                 method: "POST",
//                 body
//             }),
//             invalidatesTags: ['id', 'LIST'],
//         }),        
//     })
// })
// export const todoApi = createApi({
//     reducerPath: 'todoapi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `http://localhost:8002/api/${userId}/`,
//     }), 
//     endpoints : (builder) => ({
//         GetTodo: builder.query({
//             query: () => 'gettodo/'
//         }),
//         SetTodo: builder.mutation({
//             query: (body) => ({
//                 url: 'addtodo/',
//                 method: 'POST',
//                 body
//             })
//         }),
//         DeleteTodo: builder.mutation({
//             query : (body) => ({
//                 url: `deletetodo/${body}`,
//                 method : 'DELETE',
//                 body : body
//             })
//         }),
//         CompliteTodo: builder.mutation({
//             query : (body) => ({
//                 url: `complited/${body}`,
//                 method : 'PUT',
//                 body : body
//             })
//         }),
//     })
// })

// export const {useRegUserMutation, useAuthUserMutation} = userApi
// export const {useGetTodoQuery, useSetTodoMutation, useDeleteTodoMutation, useCompliteTodoMutation} = todoApi


// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/api",
//   prepareHeaders: (headers, { getState }) => {
//     const token =
//       (getState() as RootState).auth.user?.token ||
//       localStorage.getItem("token");

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

// export const api = createApi({
//   reducerPath: "splitApi",
//   baseQuery: baseQueryWithRetry,
//   refetchOnMountOrArgChange: true,
//   endpoints: () => ({}),
// });
// */