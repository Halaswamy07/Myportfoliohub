'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import enggpxoImg from '../public/website-screenshoot/enggpxo.png';
import dippxoImg from '../public/website-screenshoot/dippxo.png';
import pythonImg from '../public/website-screenshoot/python.png';
import dipinternImg from '../public/website-screenshoot/dipintern.png';
import droneImg from '../public/website-screenshoot/drone.png';
import cnImg from '../public/website-screenshoot/cn.png';
import skitImg from '../public/website-screenshoot/skit.png';
import internationalwebniarImg from '../public/website-screenshoot/internationalwebniar.png';
import fkcciImg from '../public/website-screenshoot/fkcci.png';
import codsoftImg from '../public/website-screenshoot/codsoft.png';
import digitalmarketingImg from '../public/website-screenshoot/digitalmarketing.png';
import hackImg from '../public/website-screenshoot/hack.png';
import webImg from '../public/website-screenshoot/web.png';

const MyProjects = () => {
    return (
        <div className='bg_dark_project py-5 position-relative overflow-hidden' id="project">
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md={4}>
                        <div className="recent-project">
                            <h2 style={{ color: "white" }}>My Certifications</h2>
                            <div className='project-underline' />
                            <p style={{ color: "gray" }} className='mt-4'>
                                I have successfully completed several professional courses and internships, and achieved notable certifications that showcase my dedication to continuous learning and skill development. These accomplishments reflect my expertise in areas such as Python for data science, web development, digital marketing, and more.
                                <br /> <br /> Each certification represents a significant milestone in my journey, demonstrating my commitment to staying at the forefront of technological advancements and enhancing my capabilities as a proficient developer.
                            </p>
                        </div>
                    </Col>

                    <Col md={8}>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 40,
                                stretch: 2,
                                depth: 150,
                                modifier: 5,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            breakpoints={{
                                640: {
                                    spaceBetween: 5,
                                },
                                768: {
                                    spaceBetween: 10,
                                },
                                1024: {
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={pythonImg} alt='Python for Datascience' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Python for Datascience</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={enggpxoImg} alt='Project Expo' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>2nd Place Award: Academic Project</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={dippxoImg} alt='Diploma Project Expo' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>I secured a spot in the state-level project exhibition</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={dipinternImg} alt='DIP Internship' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>DIP Internship</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={droneImg} alt='BE-Internship' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>BE-Internship</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={cnImg} alt='Technical Paper Presentation' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>1st Place Winner - Technical Paper Presentation</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={skitImg} alt='SKIT' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Winner of 1st Place in Cultural Skit Play</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={internationalwebniarImg} alt='International Webinar' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Python for Datascience workshop</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={fkcciImg} alt='FKCCI' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>we have secured a place among the top 75 teams in FKCCI Manthan</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={codsoftImg} alt='Codsoft Internship' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Interned in Artificial Intelligence</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={digitalmarketingImg} alt='Digital Marketing' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Digital Marketing Course</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={hackImg} alt='Hacka' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Learn Windows Ethical Hacking and Security</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={webImg} alt='Web Development' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Web Development From The Scratch</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
            <div className='circle' />
            <div className='rectangle' />
        </div>
    );
}

export default MyProjects;
