
import classes from './Todo.module.scss'
import { Link } from 'react-router-dom' 
const NoUrgentImportant = () => {
    // const [setDeleteId] = useDeleteTodoMutation()
    // const [setComplite] = useCompliteTodoMutation()
    // const Deleteclick = (id:number) => {
    //     setDeleteId(id)
    // }
    // const Compliteclick = (id: number) => {
    //     setComplite(id)
    // }
    // return (
    //     <div className={classes.TodoContainer}>
    //     <h2 className={classes.title}>No Urgent Important</h2>
    //     <div className={classes.TodoItem}>
    //         {item && item.map((item, i)  => ( 
                  
    //             <div className={classes.TodoRow} key={item.id}>
    //                 <input onClick={() => Compliteclick(item.id)} type="checkbox" />
    //                 <p className={item.complited ? classes.complited : classes.NoComplited} key={i}>{item.text}</p>
    //                 <button onClick={() => Deleteclick(item.id)}>Drop it</button>
    //             </div> 
    //         ))}
    //         {item?.length === 0 && <p>There are no tasks of this type yet</p>}
    //     </div>
    //         <ul data-selector = {false} className={classes.LinkItem}>
    //             <Link className={classes.ui} to="/UI" > Urgent & Important </Link>
    //             <Link className={classes.uni} to="/UNI" > Urgent & No Important </Link>
    //             <Link className={classes.nuni} to="/NUNI" >No Urgent & No Important</Link>
    //         </ul>
    // </div>
    // )
}

export default NoUrgentImportant 