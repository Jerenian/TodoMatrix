import classes from './Todo.module.scss'
import { Link } from 'react-router-dom'



const TodoList = () => {
    return (
        <div className={classes.container}>
            <div className={classes.TodoList}>
                <ul className={classes.LinkItem}>
                    <Link className={classes.ui} to="/UI" > Urgent & Important </Link>
                    <Link className={classes.nui} to="/NUI" > No Urgent & Important </Link>
                    <Link className={classes.uni} to="/UNI" > Urgent & No Important </Link>
                    <Link className={classes.nuni} to="/NUNI" >No Urgent & No Important</Link>
                </ul>
            </div>
        </div>
    )
}

export default TodoList