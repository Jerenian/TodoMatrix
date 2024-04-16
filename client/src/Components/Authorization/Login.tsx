import classes from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {AuthUser} from "../../store/TodoSlicer"
import {useEffect, useState } from 'react'
import {IUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'
import Tests from './test'
const Login = ()  => {
    const [userAuth, setuserAuth] = useState <IUSER>({username: '' , email: '', password: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const HendleClick = () => {
		dispatch(AuthUser(userAuth))
	}

    return (
    <div className={classes.Login}>
        <div className={classes.container}>
          <label htmlFor="username">Name</label>
              <input
              onChange={(e) => setuserAuth({...userAuth, username: e.currentTarget.value})}
              id={classes['username']} type="text" />

              <label htmlFor="emailInput">Email</label>
              <input 
              onChange={(e) => setuserAuth({...userAuth, email: e.currentTarget.value})}
              id={classes['emailInput']} type="text" />

              <label htmlFor="password">Password</label>
              <input
              onChange={(e) => setuserAuth({...userAuth, password: e.currentTarget.value})}
              id={classes['password']} type="text" />
              <button style={{cursor: 'pointer'}} onClick={() => HendleClick()}>Sing Up</button>

        </div>
    </div>
  )
}

export default Login