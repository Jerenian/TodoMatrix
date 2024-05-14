import classes from './Header.module.scss'
// import { Link} from 'react-router-dom'
// import MyButton from '../../UI/MyButton'
const Header = ()=> {
 /// const links = {UI : "UrgentlyImportant", UNI : "UrgentNoImportant", NUI: "NoUrgentImportant" , NUNI: "NoUrgentNoImportant", All: "AllTodos"}
  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
     <h2 className='Start-header'>TODOLIST/TODOLIST</h2>
        {/* <MyButton props = {links.UI} >Urgent & Important</MyButton>
        <MyButton props = {links.UNI} >Urgent & NO important</MyButton>
        <MyButton props = {links.All} >All TODOS</MyButton>
        <MyButton props = {links.NUI} >NO Urgent & Important</MyButton>
        <MyButton props = {links.NUNI} >NO Urgent & NO important</MyButton> */}

      </div>
    </div>
  )
  
}

export default Header