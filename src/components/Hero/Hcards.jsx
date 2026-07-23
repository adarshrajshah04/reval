import React from 'react'
import { Row,Col } from 'react-bootstrap'
Row

const Hcards = ({ number, text }) => {
    // console.log(props);

    return (

        
            <Col>
                <h3 className="green fw-bolder fs-2">{number}</h3>
                <p className="text">{text}</p>
            </Col>
       
    )
}

export default Hcards
