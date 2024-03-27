import {  useState } from "react"
import { TODO } from "./Types/types"
import Header from "./Components/Header/Header"
import Login from "./Components/Authorization/Login"
import RenderComponent from "./Components/RenderComponent.tsx/RenderComponent"
import classes from './App.module.scss'



const App = () : JSX.Element  => {
const [Todo, setTodo] = useState<Array<TODO>>()
const [visible, setVisible] = useState(false)
const arr = [{id: '4', description: 'aaaa'}, {id:'1', description: 'yyyyy'}]
const url = 'http://localhost:8001/todos'
	const Render = arr.map(todo => (
		<RenderComponent todo = {todo.id} />
	))
	const todoList = async () => {
		try{
			const response = await fetch(url)
			const body = await response.json()
			setTodo(body)
			setVisible(!visible)
		}
		catch(error){
			console.log(error)
		}
	}

	return(
	<>
	<Header></Header>
   	{/* <div onClick={todoList}>Задачи */}
	   	<div>	
			<Login></Login>
		</div>
		
		{/* <div className="render">{Render}</div>  */}
	{/* </div> */}
	<button onClick={() => console.log(Todo)}></button>
	</>
	)
}

export default App
