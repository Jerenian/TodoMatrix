import {  useState } from "react"
import { TODO } from "./Types/types"
import Header from "./Components/Header/Header"
import Todo from "./Components/TodoPage/Todo"
import Layout from "./Components/Layout"
import Login from "./Components/Authorization/Login"
import { Route, Routes } from "react-router-dom"
import { useSelector} from "react-redux"


const App = ()  => {
	let ID:any
	return(
	<>
	    <Routes>
        <Route index element = {<Login ID = {ID} />}/>
        
		<Route path="/" element ={<Layout/>}>
			<Route path = {`/${ID}`} element = {<Todo/>}/>
		</Route>
    </Routes>
	</>
	)
}

export default App
