'use client'

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Contact = () => {
    return (
        <>
            <section className='bg-common py-5' id='contact'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='contact-form-body'>
                                <h5>Contact me</h5>
                                <p>
                                    Feel free to contact me via email or LinkedIn.
                                </p>
                                <div className='pt-4'>
                                    <p>
                                        <a href="mailto:halaswamyg07@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <FaEnvelope size={60} style={{ marginRight: '20px' }} /> Email
                                        </a>
                                    </p>
                                    <p>
                                        <a href="https://www.linkedin.com/in/halaswamy-g-0b3a11257/?trk=public_profile_browsemap&originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin size={60} style={{ marginRight: '20px' }} /> LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
