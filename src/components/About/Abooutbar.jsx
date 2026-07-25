import React from 'react'
import classes from '../../assets/css/Aboutbar.module.css'

const Abooutbar = () => {
    const bar=[
        {
            number:"15+",
            text:'Years Innovating'
        },
        {
            number:"830+",
            text:'Products Launched'
        },
        {
            number:"99.9%",
            text:'Uptime Guarantee'
        },
        {
            number:"4.9/5",
            text:'Customer Rating'
        },
        
    ]
  return (
    <div className={`d-flex align-items-center justify-content-around ${classes.main}`}    >
      {bar.map(({number,text})=>(
        <div className='text-center'>
            <h3 className='fs-1 fw-bolder' style={{color:'var(--green)'}}>{number}</h3>
            <p className='fw-bolder'>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default Abooutbar
