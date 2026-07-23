import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import classes from '../assets/css/About.module.css'
import About_img from '../assets/images/About_img.webp'

const About = () => {
  return (
   <Container>
     <div className={classes.main} style={{padding:'120px 0 0 30px'}}>
        <h3 className='heading  fw-bolder fs-1 mb-3'>About</h3>
        <div className={classes.line} style={{background:'var(--text)',height:'1px', width:'120px'}}>
            <div className='rounded-pell' style={{background:'var(--green)',height:'3px', width:'50px'}}></div>
        </div>
        <p className='mt-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>


        <Row>
            <Col>
                <b style={{color:'var(--green)'}}><i class="bi bi-stars"></i>Built For Modern Teams</b>
                <h3 className='heading mt-4 fw-bolder' style={{fontSize:'40px'}}>Ship Beautiful Products at Lightning Speed</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                ``
            </Col>
            <Col>
            <div className={classes.mac_parent}>
                <div className={classes.mac_btn}>
                    <div className='rounded-pill' style={{width:'15px',height:'15px', background:'red'}}></div>
                    <div className='rounded-pill' style={{width:'15px',height:'15px', background:'yellow'}}></div>
                    <div className='rounded-pill' style={{width:'15px',height:'15px', background:'green'}}></div>
                  
                </div>
                <img src={About_img} alt=""style={{width:'100%'}} />
            </div>
            </Col>
        </Row>

      
    </div>

   </Container>
  )
}

export default About
