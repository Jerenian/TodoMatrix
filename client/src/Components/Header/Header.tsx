import classes from './Header.module.scss'
import LogOut from '../Authorization/LogOut'
const Header = ()=> {
 /// const links = {UI : "UrgentlyImportant", UNI : "UrgentNoImportant", NUI: "NoUrgentImportant" , NUNI: "NoUrgentNoImportant", All: "AllTodos"}
  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
        <LogOut></LogOut>   
        <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
        <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
      </div>
    </div>
  )
  
}

export default Header