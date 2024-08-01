'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
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
                                        <Image src={droneImg} alt='Drone Project' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Drone Project</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={cnImg} alt='Communication Networks' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Communication Networks</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={skitImg} alt='SKIT' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>SKIT Project</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={internationalwebniarImg} alt='International Webinar' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>International Webinar</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={fkcciImg} alt='FKCCI' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>FKCCI</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={codsoftImg} alt='Codsoft Internship' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Codsoft Internship</h5>
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
                                        <Image src={hackImg} alt='Hackathon' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Hackathon Participation</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='project_slide pb-5'>
                                    <div className='project_img'>
                                        <Image src={webImg} alt='Web Development' width={500} height={300} />
                                    </div>
                                    <div className='content pt-2 px-5'>
                                        <h5>Web Development Project</h5>
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
