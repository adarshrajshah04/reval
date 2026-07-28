import React from "react";
import TopHeading from "./TopHeading";
import classes from "../assets/css/Team.module.css";
import Sliderteam from "./Sliderteam";

import { Row, Col, Container } from "react-bootstrap";

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

import t_1 from "../assets/images/team_images/t_1.webp";
import t_2 from "../assets/images/team_images/t_2.webp";
import t_3 from "../assets/images/team_images/t_3.webp";
import t_4 from "../assets/images/team_images/t_4.webp";

const Team = () => {
  const member = [
    {
      image: t_1,
      title: "Olivia Park",
      text: "Design Lead",
      Icon: [FaLinkedin, FaSquareXTwitter],
    },
    {
      image: t_2,
      title: "Nathan Cole",
      text: "Engineering Lead",
      Icon: [FaGithub, FaLinkedin],
    },
    {
      image: t_3,
      title: "Priya Sharma",
      text: "Brand Strategist",
      Icon: [FaDribbble, FaInstagram],
    },
    {
      image: t_4,
      title: "Leo Tanaka",
      text: "Creative Director",
      Icon: [FaBehance, FaLinkedin],
    },
  ];
  return (
    <Container>
      <div className="py-5">
        <TopHeading
          heading="Team"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Row>
          <Col>
            <b>Our People</b>
            <h3>The Minds Behind Every Project</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>

            <hr style={{ border: "0.5px solid gray" }} />
          </Col>
          <Col className="d-flex gap-2">
            {member.map(({ image, title, text, Icon }) => (
              <div>
                <div className="position-relative">
                  <img
                    src={image}
                    alt=""
                    className={`w-100  ${classes.image}`}
                  />
                  <div className={classes.icon_div}>
                    {Icon.map((I) => (
                      <span className={classes.icon}>
                        <I />
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="fs-5" style={{color:'var(--h-text)'}}>{title}</h4>
                  <p className="fs-6">{text}</p>
                </div>
              </div>
            ))}

          </Col>
          <hr style={{ border: "0.5px solid gray" }} />
        </Row>

           <Sliderteam/> 

      </div>
    </Container>
  );
};

export default Team;
