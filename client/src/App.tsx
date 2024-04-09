import {  useEffect, useState } from "react"
import { TODO } from "./Types/types"
import Header from "./Components/Header/Header"
import { useSelector } from "react-redux"
import Todo from "./Components/TodoPage/Todo"
import Layout from "./Components/Layout"
import Login from "./Components/Authorization/Login"
import { Route, Routes } from "react-router-dom"


const App = ()  => {
	const ID = useSelector(state => state.user.user)
	useEffect(() =>{
	}, [ID])
	return(
	<>
	    <Routes>
        <Route index element = {<Login/>}/>
        
		<Route path="/" element ={<Layout/>}>
			<Route path = '/todo' element = {<Todo/>}/>
		</Route>
    </Routes>
	</>
	)
}

export default App
