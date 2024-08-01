'use client'
import Image from 'next/image';
import aboutimg from '../public/about_secimg.png';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap';

const Aboutme = () => {
  return (
    <>

    <Container className='pt-5' id="aboutme">
        <div className='section_header d-flex justify-content-start align-items-center pt-5'>
          <span>Get to know me!</span>
          <h4>About me</h4>
        </div>
        <div className='underline mt-3' />
        <Row className=' align-items-center'>
          <Col md={6}>
            <p className='light'>I&apos;m a proficient MERN Stack Developer with expertise in Python and Java. I specialize in building websites and web applications that drive the success of overall products. Check out some of my work in the Projects section.
I also have experience as a freelancer, developing projects for BCA and Diploma students..</p>

            <p className='light'>
              I&apos;m open to Job opportunities where I can contribute, learn and grow.
              If you have a good opportunity that matches my skills and experience
              then don&apos;t hesitate to contact me.
            </p>

            <div className='pt-5 mt-3'>
              <Link href="#contact" className="section-btn px-4 py-3">Let&apos;s Connect
                &nbsp;
                <MdArrowRightAlt style={{ fontSize: '30px' }} />
              </Link>
            </div>
          </Col>
          <Col md={1} />
          <Col md={5}>
            <div className='section_img-resp'>
              <Image src={aboutimg} alt='about-coder' />
            </div>
          </Col>
        </Row>

      </Container>
      
    </>
  )
}

export default Aboutme;
