import classes from './Login.module.scss'
import {useEffect, useState } from 'react'
import {INEWUSER} from "../../Types/types"
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const [userReg, setuserReg] = useState<INEWUSER>({username: '' , email: '', password: ''})
    const navigate = useNavigate()
	const dispatch = useDispatch()
    const HendleClick = async () => {
		const user = await setNewUser({...userReg, username: userReg.username, email: userReg.email, password: userReg.password}).unwrap()
		error ? '' : navigate('/todo')
	}

	console.log()
	useEffect(() =>{

	},[error])
    return (
    <div className={classes.Login}>
        <div className={classes.container}>
		<h2>Registration</h2>
			<div>
	            <label htmlFor="username">Name</label>
	            <input
				required
	            onChange={(e) => setuserReg({...userReg, username: e.currentTarget.value})}
	            id={classes['username']} type="text" />
			</div>
			<div>
	            <label htmlFor="emailInput">Email</label>
	            <input
				required 
	            onChange={(e) => setuserReg({...userReg, email: e.currentTarget.value})}
	            id={classes['emailInput']} type="text" />
			</div>
			<div>
	            <label htmlFor="password">Password</label>
	            <input
				required
	            onChange={(e) => setuserReg({...userReg, password: e.currentTarget.value})}
	            id={classes['password']} type="text" />
			</div>
            <button style={{cursor: 'pointer'}} onClick={() => HendleClick()}>Sing Up</button>
        </div>

    </div>
  )
}

export default Register