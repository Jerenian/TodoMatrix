import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const userApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002/api/'}),
    endpoints : (builder) => ({
        RegUser: builder.mutation({
            query: (body) => ({
                url: "user",
                method: "POST",
                body
            })
        }),
        AuthUser: builder.mutation({
            query: (body) => ({
                url: "userAuth",
                method: "POST",
                body
            })
        })
    })
})
export const {useRegUserQuery, useAuthUserQuery} = userApi