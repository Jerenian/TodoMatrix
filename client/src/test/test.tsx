import React, { useState, useEffect } from 'react'
import Rendertest from './rendertest'

const Test = () => {
const [todo, setTodo] = useState([])

// const Render = todo.map(todo => (
//     <Rendertest todo = {todo} />
// ))
const Render = <Rendertest todo = {todo}/>
    

    
    useEffect(()=>{},[todo])
    const arr2 = async () => {
        try{
        const response = await fetch('http://localhost:8001/todos/4')
        const data = await response.json()
        return setTodo(data)

        }
        catch(error){
            console.log(error)
        }
    }
    const arr3 = async () => {
        try{
        const response = await fetch('http://localhost:8001/todos/13')
        const data = await response.json()
        return setTodo(data)

        }
        catch(error){
            console.log(error)
        }
    }


  return (
<>
        <button onClick={arr2}>rkbr</button>
        <button onClick={arr3}>rkbr</button>
        <div>
            {Render}
        </div>
</>
  )
}

export default Test