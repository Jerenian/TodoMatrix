import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authAPI } from "../app/services/auth";

export const ApiMiddleware = createListenerMiddleware()
ApiMiddleware.startListening({
    matcher: authAPI.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners()

        if(action.payload.token) {
            localStorage.setItem('token', action.payload.token)
        }
    }
})