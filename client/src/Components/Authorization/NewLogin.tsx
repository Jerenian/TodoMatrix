import classes from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux"
import {RegUser} from "../../store/TodoSlicer"
import {useEffect, useState } from 'react'
import {INEWUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'
import Tests from './test'
const NewLogin = ()  => {
	const {error, status} = useSelector(state => state.user)
    const [userAuth, setuserAuth] = useState <INEWUSER>({username: '' , email: '', password: ''})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const NewUser = useSelector(state => state.user.user)
    const HendleClick = () => {
		dispatch(RegUser(userAuth))
		
	}
	useEffect(() =>{
		if(status === "resolved") {navigate('/todo')}
	},[status])
	
    return (
    <div className={classes.Login}>
        <div className={classes.container}>
		<h2>Registration</h2>
			<div>
	            <label htmlFor="username">Name</label>
	            <input
				required
	            onChange={(e) => setuserAuth({...userAuth, username: e.currentTarget.value})}
	            id={classes['username']} type="text" />
			</div>
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
            <button style={{cursor: 'pointer'}} onClick={() => HendleClick()}>Sing Up</button>
			{status === 'Loading' && <p>Loading...</p>} 
			{error && <p>{error}</p>}
        </div>

    </div>
  )
}

export default NewLogin