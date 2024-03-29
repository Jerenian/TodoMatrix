import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'reset-css'
import Login from './Components/Authorization/Login.js'
import Todo from './Components/TodoPage/Todo.js'
import { Provider } from 'react-redux'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>

    <Routes>
        <Route index element = {<Login/>}/>
        <Route path='/user/1' element = {<Todo/>}/>
    </Routes>
   
  </BrowserRouter>,
  </Provider>
)
