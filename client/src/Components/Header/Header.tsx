import classes from './Header.module.scss'
import { Link} from 'react-router-dom'
import MyButton from '../../UI/MyButton'
const Header = ()=> {
  const links = {UI : "UrgentlyImportant", UNI : "UrgentNoImportant", NUI: "NoUrgentImportant" , NUNI: "NoUrgentNoImportant", All: "AllTodos"}
  return (
    <div className={classes.wrapper}>
      <ul className={classes.row}>
        <MyButton props = {links.UI} >Urgent & Important</MyButton>
        <MyButton props = {links.UNI} >Urgent & NO important</MyButton>
        <MyButton props = {links.All} >All TODOS</MyButton>
        <MyButton props = {links.NUI} >NO Urgent & Important</MyButton>
        <MyButton props = {links.NUNI} >NO Urgent & NO important</MyButton>
      </ul>
    </div>
  )
  
}

export default Header