import TodoList from "./Components/TodoPage/Todo"
import Layout from "./Components/Layout"
import NewLogin from "./Components/Authorization/NewLogin"
import { Route, Routes, useParams } from "react-router-dom"
import Login from "./Components/Authorization/Login"
import StartPage from "./Components/StartPage"
import "./App.scss"
const App = ()  => {
	return(
	<div className="wrapper">
	    <Routes>
		<Route index element = {<StartPage/>}></Route>
        <Route path="/regestration" element = {<NewLogin/>}/>
        <Route path="/authorization" element = {<Login/>} ></Route>
		<Route path="/" element ={<Layout/>}>
			<Route path = 'todo' element = {<TodoList/>}/>
		</Route>
    </Routes>
	</div>
	)
}

export default App
