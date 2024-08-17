import classes from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState } from 'react'
import {IUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom' 
import { jwtDecode } from 'jwt-decode'

const Login = ()  => {
    const [userAuth, setuserAuth] = useState <IUSER>({email: '', password: ''})
    const [setAuthUser, {error}] = useAuthUserMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const HendleClick = async () => {
        console.log(userAuth)
        const user = await setAuthUser({...userAuth, email: userAuth.email, password: userAuth.password}).unwrap()
        localStorage.setItem('token', user)
        dispatch(setCrenditalis(user))
        error ? '' : navigate('/user')
    }
    

    return (
    <div className={classes.Login}>
    
    <div className={classes.container}>
        <h2>Authorization</h2>
        <div>
            <label htmlFor="emailInput">Email</label>
            <input
            value={userAuth.email}
            required 
            onChange={(e) => setuserAuth({...userAuth, email: e.currentTarget.value})}
            id={classes['emailInput']} type="text" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
            value={userAuth.password}
            required
            onChange={(e) => setuserAuth({...userAuth, password: e.currentTarget.value})}
            id={classes['password']} type="text" />
        </div>
            <button style={{cursor: 'pointer'}} onClick={() => HendleClick()}>Log in</button>
            {error && <p>{error}</p>}
    </div>
    </div>
  )
}

export default Login