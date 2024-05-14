import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './Todo.module.scss'
import { ITODO } from '../../Types/types'
import InputField from '../../UI/InputField'
import UrgentlyImportant from './UrgentNoImportant'
type Props = {}

const TodoList = (props: Props) => {
    const data = useSelector(state => state.ToDo.todo)
//     const Label = data.map((item) => {
//         <UrgentlyImportant item = {item} />
// })
    useEffect(()=> {
        console.log(data[0])

    },[data])

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <div className={classes.createTodo} >
                <InputField/>
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