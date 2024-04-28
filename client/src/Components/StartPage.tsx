import React from 'react'
import { Link } from 'react-router-dom'
const StartPage = () => {
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
}

export default StartPage