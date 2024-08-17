import { API } from "../../API/API";
import { IUSER } from "../../Types/types";
import { TResponse } from "./auth";


export const userAPI = API.injectEndpoints({
    endpoints : (builder) => ({
        update : builder.mutation<TResponse, IUSER >({
            query: (user) => ({
                url: `/user/${user.id}`,
                method: 'PUT',
                body: user
            })
        }),
        remove : builder.mutation <TResponse, IUSER>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            })
        })
    })
})
export const {useUpdateMutation, useRemoveMutation} = userAPI
export const {endpoints: {update, remove}} = userAPI