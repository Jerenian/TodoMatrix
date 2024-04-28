import classes from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {AuthUser} from "../../store/TodoSlicer"
import {useEffect, useState } from 'react'
import {IUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'
const Login = ()  => {
    const [userAuth, setuserAuth] = useState <IUSER>({email: '', password: ''})

    const dispatch = useDispatch()
    const HendleClick = () => {
		dispatch(AuthUser(userAuth))
	}

    return (
    <div className={classes.Login}>
    
    <div className={classes.container}>
        <h2>Authorization</h2>
        <div>
            <label htmlFor="emailInput">Email</label>
            <input
            required 
            onChange={(e) => setuserAuth({...userAuth, email: e.currentTarget.value})}
            id={classes['emailInput']} type="text" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
            required
            onChange={(e) => setuserAuth({...userAuth, password: e.currentTarget.value})}
            id={classes['password']} type="text" />
        </div>
            <button style={{cursor: 'pointer'}} onClick={() => HendleClick()}>Log in</button>
    </div>
    </div>
  )
}

export default Login