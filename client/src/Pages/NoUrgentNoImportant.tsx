import React from 'react'
import classes from './Todo.module.scss'
import { Link } from 'react-router-dom'
const NoUrgentNoImportant = () => {
//   const [setDeleteId] = useDeleteTodoMutation()
//   const [setComplite] = useCompliteTodoMutation()
//   const Deleteclick = (id:number) => {
//       setDeleteId(id)
//   }
//   const Compliteclick = (id) => {
//       setComplite(id)
//   }
//   const style = item.complited ? classes.complited : classes.NoComplited
//   return (
//       <div className={classes.TodoContainer}>
//       <h2 className={classes.title}>No Urgent No Important</h2>
//       <div className={classes.TodoItem}>
//           {item && item.map((item, i) => (
//               <div  className={classes.TodoRow} key={item.id}>
//                   <input onClick={() => Compliteclick(item.id)} type="checkbox" />
//                   <p className={style} key={item.id}>{item.text}</p>
//                   <button onClick={() => Deleteclick(item.id)}>Drop it</button>
//               </div>
//           ))}
//           {item?.length === 0 && <p>There are no tasks of this type yet</p>}
//       </div>
//       <ul data-selector = {false} className={classes.LinkItem}>
//             <Link className={classes.ui} to="/UI" > Urgent & Important </Link>
//             <Link className={classes.nui} to="/NUI" > No Urgent & Important </Link>
//             <Link className={classes.uni} to="/UNI" > Urgent & No Important </Link>
//         </ul>
//   </div>
//   )
}

export default NoUrgentNoImportant