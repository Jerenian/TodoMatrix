import {createBrowserRouter} from "react-router-dom"
import { Paths } from "./Paths"

import Register from "./Components/Authorization/Register"
import Login from "./Components/Authorization/Login"
import UrgentImportant from "./Pages/UrgentImportant"
import UrgentNoImportant from "./Pages/UrgentNoImportant"
import NoUrgentImportant from "./Pages/NoUrgentImportant"
import NoUrgentNoImportant from "./Pages/NoUrgentNoImportant"
import User from "./Pages/User"
import TodoList from "./Pages/Todo"
import Layout from "./Components/Layout"
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children : [
            {
                path: Paths.home,
                element: <TodoList/>
            },
            {
                path: Paths.register,
                element: <Register/>
            },
            {
                path: Paths.login,
                element: <Login/>
            },
            {
                path: Paths.UI,
                element: <UrgentImportant/>
            },
            {
                path: Paths.UNI,
                element: <UrgentNoImportant/>
            },
            {
                path: Paths.NUI,
                element: <NoUrgentImportant/>
            },
            {
                path: Paths.NUNI,
                element: <NoUrgentNoImportant/>
            },
            {
                path: Paths.user,
                element: <User/>
            }
        ]
    }
])