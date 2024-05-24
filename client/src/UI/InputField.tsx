import React, { useEffect, useState } from 'react'
import { ITODO } from '../Types/types'
import { useDispatch } from 'react-redux'
import classes from "./UI.module.scss"
import {AddNewTodo} from "../store/TodoSlicer"
const InputField = (data: any) => {
    const [Todo, setTodo] = React.useState<ITODO>({
        text: '', type: 'Choose type', complited: false, id: null,
    })
    const [chooseType, setchooseType] = React.useState<any>({
        IsAcitve: false,
        UI: "Urgent & Important",
        UNI: "Urgent & NO important",
        NUI: "NO Urgent & Importan",
        NUNI: "NO Urgent & NO important"
    })
    const dispatch = useDispatch()
    const Hendleclick = () => {
        const user_id = data.data.user_id
        console.log(data.data)
        dispatch(AddNewTodo(user_id, Todo))
    }
  return (
    <div className={classes.Input__container} >
        <div className={classes.InputItem}>
            <textarea
            className={classes.TodoInput}
            name='text'
            value={Todo.text}
            required
            onChange={(e) => setTodo({...Todo, text: e.target.value})}
            />    
            <div onClick={() => setchooseType({...chooseType, IsAcitve: !chooseType.IsAcitve})} className={classes.select} >
                <ul  className={classes.select__header}> 
                    <li value={"Choose type"} className={classes.select__current}>{Todo.type}</li>
                </ul>
                <div data-selector={chooseType.IsAcitve} className={classes.select__body}>
                        <label className={classes.labelUI} htmlFor="UI"></label>
                        <input
                        id='UI'
                        type='submit'
                        onClick={(e) => setTodo({...Todo, type: e.target.value}) } 
                        value={chooseType.UI} className={classes.select__item}/>

                        <label className={classes.labelUNI} htmlFor="UNI"></label>
                        <input 
                        id='UNI'
                        type='submit'
                        onClick={(e) => setTodo({...Todo, type: e.target.value}) }
                        value={chooseType.UNI} className={classes.select__item}/>

                        <label className={classes.labelNUI} htmlFor="NUI"></label>
                        <input
                        id='NUI'
                        type='submit'
                        onClick={(e) => setTodo({...Todo, type: e.target.value}) } 
                        value={chooseType.NUI} className={classes.select__item}/>
                        <label className={classes.labelNUNI} htmlFor="NUNI"></label>

                        <input
                        id='NUNI'
                        type='submit'
                        onClick={(e) => setTodo({...Todo, type: e.target.value}) }
                        value={chooseType.NUNI} className={classes.select__item}/>

                </div>
            </div>
        </div>
        <button onClick={Hendleclick}>Add Todo</button>
     </div>        
  )
}

export default InputField