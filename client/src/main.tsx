import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'reset-css'
import Login from './Components/Authorization/Login.js'
import Todo from './Components/TodoPage/Todo.js'
import {BrowserRouter,Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route index element = {<Login/>}/>
        <Route path='/user:id' element = {<Todo/>}/>
    </Routes>
  </BrowserRouter>,
)
