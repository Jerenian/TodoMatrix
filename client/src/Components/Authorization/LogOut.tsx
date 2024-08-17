import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <button onClick={handleclick}>Log Out</button>
    )
}
export default LogOut