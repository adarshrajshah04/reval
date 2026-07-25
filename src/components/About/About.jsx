import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../../assets/css/About.module.css";
import About_img from "../../assets/images/About_img.webp";
import TopHeading from "../TopHeading";
import Button from "../Button";
import Aboutbar from "./Abooutbar";
import { FaArrowRight } from "react-icons/fa";

import { FaBoltLightning } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  const arr = [
    {
      text: "Instant Deployment",
      para: "Temporibus autem quibusdam debitis rerum necessitatibus saepe eveniet.",
      Icon: FaBoltLightning,
    },
    {
      text: "Enterprise-Grade Security",
      para: "Itaque earum rerum hic tenetur a sapiente delectus reiciendis voluptatibus.",
      Icon: IoShieldCheckmarkOutline,
    },
    {
      text: "Actionable Analytics",
      para: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet adipisci.",
      Icon: BsGraphUpArrow,
    },
  ];

  return (
    <Container>
      <div className={classes.main} style={{ padding: "120px 0 0 30px" }}>
        <TopHeading
          heading="About"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Row>
          <Col>
            <b style={{ color: "var(--green)" }}>
              <i className="bi bi-stars"></i>Built For Modern Teams
            </b>
            <h3 className="heading mt-4 fw-bolder" style={{ fontSize: "40px" }}>
              Ship Beautiful Products at Lightning Speed
            </h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <div>
              {arr.map(({ text, para, Icon }) => (
               <>
                <div className={classes.box}>
                  <div
                    className={classes.icon_div} >
                    <Icon
                      className={classes.icon}
                      style={{ fontSize: "30px" }}
                    />
                  </div>

                  <div>
                    <h3 className=" fs-5 bolder " style={{color:'var(--h-text)'}}>{text}</h3>
                    <p>{para}</p>

                    
                  </div>
                  
                </div>
                <hr  style={{ borderColor: "gray" }} />
               </>
              ))}
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div className={classes.mac_parent}>
              <div className={classes.mac_btn}>
                <div
                  className="rounded-pill"
                  style={{ width: "15px", height: "15px", background: "red" }}
                ></div>
                <div
                  className="rounded-pill"
                  style={{
                    width: "15px",
                    height: "15px",
                    background: "yellow",
                  }}
                ></div>
                <div
                  className="rounded-pill"
                  style={{ width: "15px", height: "15px", background: "green" }}
                ></div>
              </div>
              <img src={About_img} alt="" style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>

       
      </div>
      <div className="d-flex mb-5">
         <Button  text='Start Free Trial' Icon={FaArrowRight}/>
       <button className={classes.btn}><FaRegPlayCircle style={{color:'var(--green)',fontSize:'25px'}} /> Watch Demo</button>
      </div>

       <Aboutbar/>
    </Container>
  );
};

export default About;
