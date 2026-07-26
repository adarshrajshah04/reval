import React from "react";
import TopHeading from "./TopHeading";
import classes from "../assets/css/Portfolio.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";

import p_1 from "../assets/images/Portfolio/p_1.webp";
import p_2 from "../assets/images/Portfolio/p_2.webp";
import p_3 from "../assets/images/Portfolio/p_3.webp";
import p_4 from "../assets/images/Portfolio/p_4.webp";
import p_5 from "../assets/images/Portfolio/p_5.webp";
import p_6 from "../assets/images/Portfolio/p_6.webp";

const Portfolio = () => {
  const btn = [
    {
      text: "All",
    },
    {
      text: "Web Design",
    },
    {
      text: "Mobile Apps",
    },
    {
      text: "Branding",
    },
    {
      text: "UI/UX",
    },
  ];

  const portfolio = [
    {
      id: 1,
      image: p_1,
      category: "Branding",
      rating: 5.0,
      title: "Contemporary Visual Identity",
      description:
        "Quisque velit nisi pretium ut lacinia in elementum id enim sed porttitor lectus nibh.",
      technologies: ["Illustrator", "Figma", "Brand"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      image: p_2,
      category: "UI/UX",
      rating: 4.7,
      title: "Analytics Dashboard Interface",
      description:
        "Vivamus magna justo lacinia eget consectetur sed convallis at tellus curabitur non nulla.",
      technologies: ["Figma", "Prototyping", "UX"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      image: p_3,
      category: "E-commerce",
      rating: 4.6,
      title: "Online Retail Experience",
      description:
        "Donec sollicitudin molestie malesuada sed porttitor lectus nibh nulla quis lorem ut libero.",
      technologies: ["Shopify", "React", "API"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      image: p_4,
      category: "Fintech",
      rating: 4.8,
      title: "Banking App Reimagined",
      description:
        "Curabitur aliquet quam id dui posuere blandit nulla quis lorem ut libero malesuada feugiat.",
      technologies: ["Swift", "Kotlin", "Blockchain"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      image: p_5,
      category: "Web Design",
      rating: 4.8,
      title: "Digital Innovation Platform",
      description:
        "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi cras ultricies ligula.",
      technologies: ["React", "Node.js", "AWS"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
    {
      id: 6,
      image: p_6,
      category: "Mobile App",
      rating: 4.9,
      title: "Intelligent Task Manager",
      description:
        "Nulla porttitor accumsan tincidunt donec rutrum congue leo eget malesuada vivamus suscipit.",
      technologies: ["Flutter", "Firebase", "AI"],
      buttonText: "View Project",
      github: "#",
      live: "#",
    },
  ];
  return (
    <Container>
      <div className="py-5">
        <TopHeading
          heading="Portfolio"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Row>
          <Col>
            <p>
              Curated selection of recent projects spanning digital products,
              visual identity, and interactive experiences.
            </p>
          </Col>

          <Col>
            <div className={classes.btn_div}>
              {btn.map(({ text }) => {
                return <button>{text}</button>;
              })}
            </div>
          </Col>
        </Row>

        <div>
          <Row>
            {portfolio.map(
              ({
                image,
                category,
                rating,
                title,
                description,
                technologies,
                buttonText,
              }) => (
                <Col sx={12} md={6}>
                  <div>
                    <img className="w-100" src={image} alt="" />
                  </div>
                  <div>
                    <div className="d-flex gap-3">
                      <span>{category}</span>
                      <p>
                        {" "}
                        <FaStar /> {rating}
                      </p>
                    </div>

                    <h3>{title}</h3>
                    <p>{description}</p>

                    <div>
                      {technologies.map((a) => (
                        <button>{a}</button>
                      ))}
                    </div>

                    <button>
                      {buttonText} <FaArrowRight />
                    </button>

                    <hr style={{ border: "0.5px solid gray" }} />
                  </div>
                </Col>
              ),
            )}
          </Row>
        </div>

        <Row className="py-5">
          <hr style={{ border: "0.5px solid gray" }} />

          <Col>
          <h3>Have a project in mind?</h3>
          <p>Let's collaborate and craft something remarkable together.</p>
          </Col>
          <Col>
            <Button text=" Begin a conversation" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Portfolio;
