import React from 'react'
import classes from '../assets/css/TopHeading.module.css'

const TopHeading = ({heading='heading...',text="text...."}) => {
  return (
    <div className={classes.para} >
         <h3 className='heading  fw-bolder fs-1 mb-3'>{heading}</h3>
        <div className={classes.line} style={{background:'var(--text)',height:'1px', width:'120px'}}>
            <div className='rounded-pell' style={{background:'var(--green)',height:'3px', width:'50px'}}></div>
        </div>
        <p className='mt-3  ' style={{marginBottom:'80px'}}>{text}</p>

    </div>
  )
}

export default TopHeading
