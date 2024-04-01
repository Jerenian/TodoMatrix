import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'reset-css'
import Login from './Components/Authorization/Login.js'
import { Provider } from 'react-redux'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import store from './store/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
  </Provider>
)
