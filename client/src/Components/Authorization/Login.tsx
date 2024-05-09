import classes from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {AuthUser} from "../../store/UserSlicer"
import {useEffect, useState } from 'react'
import {IUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'
const Login = ()  => {
    const [userAuth, setuserAuth] = useState <IUSER>({email: '', password: ''})
    const {error, status} = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(status)
        if(status !== 'resolved'){
             setuserAuth({email: '', password: ''})
        }
        else{
            navigate('/todo')
        }
    }, [status])
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