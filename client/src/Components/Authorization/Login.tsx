import classes from './Login.module.scss'
import {useDispatch} from "react-redux"
import {addUser} from "../../store/TodoSlicer"
import {useState } from 'react'
import {IUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'
const Login = ():JSX.Element => {
    const [userAuth, setuserAuth] = useState <IUSER>({name: '' , email: '', password: ''})
	const navigate = useNavigate()
    const dispatch = useDispatch()
    const HendleClick = () => {
		dispatch(addUser({...userAuth}))
		navigate('/user/1')
	}
    return (
    <div className={classes.Login}>
        <div className={classes.container}>
          <label htmlFor="username">Name</label>
              <input
              onChange={(e) => setuserAuth({...userAuth, name: e.currentTarget.value})}
              id={classes['username']} type="text" />

              <label htmlFor="emailInput">Email</label>
              <input 
              onChange={(e) => setuserAuth({...userAuth, email: e.currentTarget.value})}
              id={classes['emailInput']} type="text" />

              <label htmlFor="password">Password</label>
              <input
              onChange={(e) => setuserAuth({...userAuth, password: e.currentTarget.value})}
              id={classes['password']} type="text" />
              <button onClick={() => HendleClick()}>Sing Up</button>
        </div>
    </div>
  )
}

export default Login