import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./ButtonStyle.module.scss"
const MyButton = ({props, children}: any ) => {
  return (
    <div className={classes.Link}>
        <Link to={props}>{children}</Link>
    </div>
  )
}

export default MyButton