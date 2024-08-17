import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom"
import StartPage from "./Components/StartPage"
import { router } from "./Root"
// import {useGetTodoQuery, useAuthUserMutation} from "./API/API"
import NoUrgentNoImportant from './Pages/NoUrgentNoImportant'
import UrgentNoImportant from './Pages/UrgentNoImportant'
import UrgentlyImportant from './Pages/UrgentImportant'
import NoUrgentImportant from './Pages/NoUrgentImportant'

import "./App.scss"
const App = ()  => {
	// const { data, error, isLoading, refetch } = useGetTodoQuery()
	// const UI = data?.filter((item)=> item.type == "Urgent & Important")
	// const UNI = data?.filter((item)=> item.type == "Urgent & NO important")
	// const NUI = data?.filter((item)=> item.type == "NO Urgent & Importan")
	// const NUNI = data?.filter((item)=> item.type == "NO Urgent & NO Importan")
	
	return(
	<div className="wrapper">
		 {/* <StartPage>
			<RouterProvider router = {router} />
		</StartPage>  */}
	    <Routes>
		{/* <Route index path="/" element = {<StartPage/>}></Route>
        <Route path="/regestration" element = {<NewLogin/>}/>
        <Route path="/authorization" element = {<Login/>} ></Route>
		<Route element ={<Layout/>}>
			<Route path="/user" element = {<TodoList/>}/> */}
			<StartPage>
			<Route path="/UI" element = {<UrgentlyImportant  />}/>
			<Route path="/UNI" element = {<UrgentNoImportant  />}/>
			<Route path="/NUI" element = {<NoUrgentImportant  />}/>
			<Route path="/NUNI" element = {<NoUrgentNoImportant />}/>
			</StartPage>
		{/* </Route> */}
    </Routes>
	</div>
	)
}

export default App
