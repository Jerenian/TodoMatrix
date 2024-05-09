import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Todo = (props: Props) => {
    const data = useSelector(state => state.ToDo)
    return 
}

export default Todo