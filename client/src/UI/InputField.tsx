import React, { useEffect, useState, useRef } from 'react'
import { ITODO } from '../Types/types'
import { useDispatch, useSelector } from 'react-redux'
import classes from "./UI.module.scss"
import {AddNewTodo} from "../store/TodoSlicer"
import {FocusClick} from '../store/FocusSlicer'

const InputField = () => {
//     const [Todo, setTodo] = React.useState<ITODO>({
//         text: '', type: 'Choose type', complited: false
//     })
//     const [SetNewTodo] = useSetTodoMutation()
//     const [chooseType, setchooseType] = React.useState<any>({
//         IsAcitve: false,
//         UI: "Urgent & Important",
//         UNI: "Urgent & NO important",
//         NUI: "NO Urgent & Importan",
//         NUNI: "NO Urgent & NO important"
//     })
//     const [focus, setfocus] = React.useState<boolean>(true)
//     const data = useSelector(state => state.focus)
//     console.log(data)
//     const InputRef = React.useRef<HTMLTextAreaElement>()
//     const Hendleclick = ():void => {
//         SetNewTodo(Todo)
//         setfocus(false)
//     }
//     useEffect(() => {
//         focus ? InputRef.current.focus() : InputRef.current.blur()
//     },[])
    
//   return (
//     <div className={classes.Input__container} >
//         <div className={classes.InputItem}>
//             <textarea
//             className={classes.TodoInput}
//             name='text'
//             value={Todo.text}
//             ref={InputRef}
//             required
//             onChange={(e) => setTodo({...Todo, text: e.target.value})}
//             onClick={() => setfocus(true)}
//             />    
//             <div onClick={() => setchooseType({...chooseType, IsAcitve: !chooseType.IsAcitve})} className={classes.select} >
//                 <ul  className={classes.select__header}> 
//                     <li value={"Choose type"} className={classes.select__current}>{Todo.type}</li>
//                 </ul>
//                 <div data-selector={chooseType.IsAcitve} className={classes.select__body}>
//                         <label className={classes.labelUI} htmlFor="UI"></label>
//                         <input
//                         id='UI'
//                         type='submit'
//                         onClick={(e) => setTodo({...Todo, type: e.target.value}) } 
//                         value={chooseType.UI} className={classes.select__item}/>

//                         <label className={classes.labelUNI} htmlFor="UNI"></label>
//                         <input 
//                         id='UNI'
//                         type='submit'
//                         onClick={(e) => setTodo({...Todo, type: e.target.value}) }
//                         value={chooseType.UNI} className={classes.select__item}/>

//                         <label className={classes.labelNUI} htmlFor="NUI"></label>
//                         <input
//                         id='NUI'
//                         type='submit'
//                         onClick={(e) => setTodo({...Todo, type: e.target.value}) } 
//                         value={chooseType.NUI} className={classes.select__item}/>
//                         <label className={classes.labelNUNI} htmlFor="NUNI"></label>

//                         <input
//                         id='NUNI'
//                         type='submit'
//                         onClick={(e) => setTodo({...Todo, type: e.target.value}) }
//                         value={chooseType.NUNI} className={classes.select__item}/>
//                 </div>
//             </div>
//         </div>
//         <button onClick={Hendleclick}>Add Todo</button>
//      </div>        
//   )
}

export default InputField