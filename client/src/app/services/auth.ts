import { IUSER } from "../../Types/types";
import { API } from "../../API/API";
export type TResponse = IUSER & {token: string} | null
export const authAPI = API.injectEndpoints({
    endpoints: (builder) =>({
        register: builder.mutation <TResponse, IUSER>({
            query: (data) => ({
                url: '/user',
                method: 'POST',
                body: data
            })
        }),
        login: builder.mutation <TResponse, IUSER>({
            query: (data) => ({
                url: 'user/auth',
                method: 'POST',
                body: data
            })
        }),
        getOne: builder.query <TResponse, IUSER>({
            query: (id) => ({
                url: `user/${id}`,
                method: 'POST',
            })
        }),
        current: builder.query <TResponse, IUSER>({
            query: () =>({
                url: 'user/current',
                method: 'GET'
            })
        }),
    })
})
export const {
    useCurrentQuery,
    useGetOneQuery, 
    useLoginMutation, 
    useRegisterMutation, 
} = authAPI
export const {
    endpoints: {
        register, 
        login,
        getOne,
        current,
    }
} = authAPI