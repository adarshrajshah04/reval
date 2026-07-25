import React from 'react'


import TopHeading from './TopHeading'
import {Row, Col, Container } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import Button from './Button';

const Services = () => {
  const service = [
  {
    id: "01",
    title: "Brand Identity Design",
    description:
      "Donec vel sapien augue integer urna vel turpis cursus porta aliquam ligula eget ultricies sed magna.",
    buttonText: "Discover more",
    popular: true,
    Icon:FaArrowRight,
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum tellus pellentesque eu feugiat.",
    buttonText: "Discover more",
    popular: false,
    Icon:FaArrowRight,
  },
  {
    id: "03",
    title: "Web Development",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae sed viverra.",
    buttonText: "Discover more",
    popular: false,
    Icon:FaArrowRight,
  },
  {
    id: "04",
    title: "Mobile App Design",
    description:
      "Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu.",
    buttonText: "Discover more",
    popular: false,
    Icon:FaArrowRight,
  },
  {
    id: "05",
    title: "Digital Marketing",
    description:
      "Sed porttitor lectus nibh donec sollicitudin molestie malesuada proin eget tortor risus nunc.",
    buttonText: "Discover more",
    popular: false,
    Icon:FaArrowRight,
  },
  {
    id: "06",
    title: "SEO Optimization",
    description:
      "Curabitur arcu erat accumsan id imperdiet et porttitor at sem pellentesque habitant morbi tristique.",
    buttonText: "Discover more",
    popular: false,
    Icon:FaArrowRight,
  },
];
  return (
    <div className='py-5'>
      <TopHeading heading='Services' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>

    <Container>
      <Row>
        {service.map(({id,title,description,buttonText,popular,Icon})=>(
          <Col  xs={12} sm={6} md={4} className='d-flex mb-3'>
            <div className='me-3'>
              <p className='fw-bolder'>{id}</p>
            </div>

            <div>
              <h3 className='fw-bold'style={{color:'var(--h-text)'}}>{title}</h3>
              <p>{description}</p>

              {popular?<button className='rounded-pill px-2 py-1 fw-bold fs-6 me-3'  style={{border:'1px solid var(--green)', background:'transparent',color:'var(--green)'}}>most popular</button>:<></>}

              <button>{buttonText} <span>{Icon && <Icon/>}</span> </button>
               
              <hr className='my-5' style={{border:"1px solid gray"}} />
            </div>
            
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
        <hr style={{border:'1px solid gray', marginBottom:'20px'}} />
        <h3 className='fs-3 fw-semibold my-3' style={{color:'white'}}>Ready to elevate your digital presence?</h3>
        <p className='w-75'>Let's collaborate on your next project and craft something remarkable together.</p>
        
        </Col>
        <Col>
         <div className='d-flex justify-content-end'>
          <Button  text='Start a project' />
         </div>
         </Col>

      </Row>
    </Container>
    </div>
  )
}

export default Services
