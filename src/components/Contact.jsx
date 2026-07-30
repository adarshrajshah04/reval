import React from 'react'
import TopHeading from './TopHeading'
import styles from "../assets/css/Contact.module.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
        
const Contact = () => {
  return (
   <Container>
     <div>
      <TopHeading heading='Contact' text='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'/>

      <Row className="gy-5">

          {/* LEFT SIDE */}

          <Col lg={6}>
            <span className={styles.tag}>Get in touch</span>

            <h1 className={styles.heading}>
              We'd love to hear about your
              <br />
              next project
            </h1>

            <p className={styles.desc}>
              Curabitur aliquet quam id dui posuere blandit.
              Nulla quis lorem ut libero malesuada feugiat
              proin eget tortor risus vivamus magna justo.
            </p>

            <div className={styles.infoBox}>

              <div className={styles.item}>
                <div className={styles.icon}>
                  <FiMail />
                </div>

                <div>
                  <small>Drop us a line</small>
                  <h5>reach@example.com</h5>
                </div>

                <FiArrowRight className={styles.arrow} />
              </div>

              <div className={styles.item}>
                <div className={styles.icon}>
                  <FiPhone />
                </div>

                <div>
                  <small>Give us a ring</small>
                  <h5>+1 (555) 720-4831</h5>
                </div>

                <FiArrowRight className={styles.arrow} />
              </div>

              <div className={styles.item}>
                <div className={styles.icon}>
                  <FiMapPin />
                </div>

                <div>
                  <small>Come say hello</small>
                  <h5>
                    2917 Maple Avenue,
                    Austin, TX 73301
                  </h5>
                </div>

                <FiArrowRight className={styles.arrow} />
              </div>

            </div>
          </Col>

          {/* RIGHT SIDE */}

          <Col lg={6}>

            <div className={styles.formCard}>

              <h2>Start a conversation</h2>

              <p>
                Pellentesque in ipsum id orci porta dapibus.
                Quisque velit nisi pretium ut lacinia in elementum.
              </p>

              <Form>

                <Row>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Your Name</Form.Label>

                      <Form.Control
                        placeholder="Jane Doe"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Email Address</Form.Label>

                      <Form.Control
                        placeholder="jane@example.com"
                      />
                    </Form.Group>
                  </Col>

                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Subject</Form.Label>

                  <Form.Control
                    placeholder="Project Inquiry"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Share some details about your project..."
                  />
                </Form.Group>

                <Button
                  className={styles.btn}
                >
                  Send Message
                </Button>

              </Form>

            </div>

          </Col>

        </Row>
    </div>
   </Container>
  )
}

export default Contact
