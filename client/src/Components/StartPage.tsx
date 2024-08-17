import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
type Props = {children: React.ReactNode}
const StartPage = ({children}:Props) => {
    // const token = localStorage.getItem('token')
    // if(token){
    //    return children
    // }
    let a = 5 
    if(a > 6) {
        return <div>{children}</div>
    }
    else{
    return (

    <>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
        <div className='StartPage'>
            <div className="StartPage-item">
                <h2>Welcome 👋</h2>
                <p>Already have an account?</p>
                <div className='btn'><Link to={'/authorization'}>Log in</Link></div>
                <p>Or no</p>
                <div className='btn'><Link to={'/regestration'}>Sing Up</Link></div>
            </div>
        </div>
    
    </>
  )
}}

export default StartPage