import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './Todo.module.scss'
import { ITODO } from '../../Types/types'
import InputField from '../../UI/InputField'
import UrgentlyImportant from './UrgentNoImportant'

const TodoList = () => {
    const data = useSelector(state => state.ToDo.todo)
//     const Label = data.map((item) => {
//         <UrgentlyImportant item = {item} />
// })
    useEffect(()=> {
    },[data])

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <div className={classes.createTodo} >
                <InputField data = {data[0]}/>
                </div>
            </div>
            <div className={classes.TodoList}>
                 {/* {data && data.map((item) => {
                    <div>
                        хуй
                        <p>{item.user_id}</p>
                        <p>{item.text}</p>
                    </div>

                    
                })}   */}
                {/* {data && <p>{data[0].text}</p>} */}

            </div>
        </div>
    )
}

export default TodoList