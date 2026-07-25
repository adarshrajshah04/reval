import React from 'react'
import classes from '../assets/css/Button.module.css'

const Button = ({text}) => {
    console.log(text);
    
  return (
    <button className={classes.btn}>{text}</button>
  )
}

export default Button
