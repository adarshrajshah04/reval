import React from "react";
import hero from "../../assets/images/hero.svg";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../assets/css/Hero.module.css";
import Hcards from "./Hcards";



const Hero = () => {
    const cardinfo = [
        {
            number: "280+",
            text: "Campaigns Delivered",
        },
        {
            number: "98%",
            text: "Retention Rate",
        },
        {
            number: "280+",
            text: "Creative Experts",
        },

    ];
    return (
        <Container className="" style={{ padding: "150px 0 0 30px" }}>
            <Row  className="g-4 sx-1 md-3">
                <Col>
                    <b className=" d-block mb-3 text ">Digital Studio</b>
                    <h3 className="heading fw-bolder  mb-5" style={{ fontSize: "50px" }}>
                        Elevate Your Brand Through Powerful Digital Craft
                    </h3>
                    <p>
                        Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo,
                        lacinia eget consectetur sed, convallis at tellus. Nulla porttitor
                        accumsan tincidunt.
                    </p>
                </Col>
                <Col>
                    <img src={hero} alt="" className={classes.image} />
                </Col>
            </Row>

            <hr className=" text my-5" />
            
            
           <Row className="mt-5">
             {cardinfo.map((a)=><Hcards number={a.number} text={a.text} />)}
           </Row>
        </Container>
    );
};

export default Hero;
