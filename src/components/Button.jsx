import React from 'react'
import classes from '../assets/css/Button.module.css'

const Button = ({text ,Icon,}) => {
    
    
  return (
    <button className={classes.btn}>{text} <span className={classes.icon}>{Icon && <Icon/>}</span></button>
  )
}

export default Button
