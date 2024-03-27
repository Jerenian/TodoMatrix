import { useRef, useState } from 'react'
import classes from './Login.module.scss'
import { IUSER } from '../../Types/types'

const Login = ():JSX.Element => {
    const [user, setUser] = useState<IUSER>({"name": "", "email":"", "password":""})
    const Ref = useRef(null)
    // const redirect = async() => {
    //     const response = await fetch('http://localhost:8002/')
    //     const {id} = await response.json()
    //     return id
    // }
    const Auth = async() => {
        console.log('work')
         await fetch('http://localhost:8002', {
            method:"POST", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow", // manual, *follow, error
              referrerPolicy: "no-referrer",
              body: JSON.stringify(user),
              
              
        })
        const request = await fetch('http://localhost:8002')
        const data = await request.json()
        console.log(data)
    }
    return (
    <div className={classes.Login}>
        <div className={classes.container}>
            <form onSubmit={(e) => e.target.preventDefault()} ref={Ref} action = "" method="POST" className={classes.form}>

                {/* <div className={classes.userName}> */}
                        <label htmlFor="username">Name</label>
                        <input
                        onChange={(e) => setUser({...user, "name": e.target.value})}
                         id={classes['username']} type="text" />
                {/* </div> */}

                {/* <div className={classes.userEmail}> */}
                        <label htmlFor="emailInput">Email</label>
                        <input 
                         onChange={(e) => setUser({...user ,"email": e.target.value})}
                        id={classes['emailInput']} type="text" />
                {/* </div> */}

                {/* <div className={classes.userPassword}> */}
                        <label htmlFor="password">Password</label>
                        <input
                         onChange={(e) => setUser({...user ,"password": e.target.value})}
                         id={classes['password']} type="text" />
                {/* </div> */}
            </form>
                <button onClick={Auth}>Sing Up</button>
        </div>
    </div>
  )
}

export default Login