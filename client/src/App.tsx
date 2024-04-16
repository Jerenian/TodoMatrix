import Todo from "./Components/TodoPage/Todo"
import Layout from "./Components/Layout"
import Login from "./Components/Authorization/Login"
import { Route, Routes, useParams } from "react-router-dom"


const App = ()  => {
	const {id} = useParams
	return(
	<>
	    <Routes>
        <Route index element = {<Login/>}/>
        
		<Route path="/" element ={<Layout/>}>
			<Route path = 'user/:id/todo' element = {<Todo/>}/>
		</Route>
    </Routes>
	</>
	)
}

export default App
