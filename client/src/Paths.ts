import { register } from "./app/services/auth";

export const Paths = {
    home: '/',
    register : '/register',
    login: '/login',
    UI: '/UrgentImportant',
    UNI: '/UrgentNoImportant',
    NUI: '/NoUrgentImportant',
    NUNI: '/NoUrgentNoImportant',
    user: '/user'
} as const