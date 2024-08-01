import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Myexp = () => {
  return (
    <>
      <Container className='py-5'>
        <div className='section_header d-flex justify-content-start align-items-center py-md-5 py-2'>
          <h4>My Specialization and Projects</h4>
        </div>
        <div className='underline mt-3' />

        <Row className="pt-5 align-items-center">
          <Col md={7}>
            <div id="accordion">
              <div className="shadow mb-3 b-radius-5">
                <div className="card-header py-3">
                  <div className="btn" data-bs-toggle="collapse" href="#collapseOne">
                    <p className='margin-0 light'>
                      Candidate Application Form{' '}
                      <a href='https://vyzen1.netlify.app/' target='_blank' rel='noopener noreferrer' className='link_heightlight bold'>Company Task</a>
                    </p>
                  </div>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                  <hr />
                  <div className="card-body p-3">
                    <p className='light'>
                      Utilizing my expertise in Frontend HTML5, CSS3, Bootstrap5, JavaScript, React.js, and
                      Backend node.js, express.js and Database using MongoDB, I actively contribute to website development projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="shadow mb-3 b-radius-5">
                <div className="card-header py-3">
                  <div className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                    <p className='margin-0 light'>
                      My All Projects{' '}
                      <a href='https://github.com/halaswamy07/' target='_blank' rel='noopener noreferrer' className='link_heightlight bold'>GitHub</a>
                    </p>
                  </div>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                  <hr />
                  <div className="card-body p-3">
                    <p className='light'>
                      Engaging with cross-functional teams, I prioritize creating user-friendly and visually appealing web solutions.
                      Moreover, I am committed to continuously learning and adapting to emerging
                      trends and technologies in web development, and programming languages such as Python, Java ensuring that my skills remain
                      current and relevant in the ever-evolving landscape of the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={1} />
          <Col md={4}>
            <h5>Technical Skill&apos;s</h5>
            <div className="d-flex gap-2 flex-wrap">
              <p className='skil_card light px-3 py-2'>HTML5</p>
              <p className='skil_card light px-3 py-2'>CSS3</p>
              <p className='skil_card light px-3 py-2'>BootStrap (v5)</p>
              <p className='skil_card light px-3 py-2'>JavaScript</p>
              <p className='skil_card light px-3 py-2'>React.js (v18)</p>
              <p className='skil_card light px-3 py-2'>React Router</p>
              <p className='skil_card light px-3 py-2'>Next.js (v14)</p>
              <p className='skil_card light px-3 py-2'>Rest API&apos;s</p>
              <p className='skil_card light px-3 py-2'>Node.js and Express.js</p>
              <p className='skil_card light px-3 py-2'>MongoDB, MySQL</p>
              <p className='skil_card light px-3 py-2'>NPM</p>
              <p className='skil_card light px-3 py-2'>SEO Basic Concepts</p>
              <p className='skil_card light px-3 py-2'>Webpack</p>
              <p className='skil_card light px-3 py-2'>Responsive Design</p>
              <p className='skil_card light px-3 py-2'>Web Optimization</p>
              <p className='skil_card light px-3 py-2'>Python</p>
              <p className='skil_card light px-3 py-2'>Java</p>
            </div>

            <hr />

            <h5>Tools And Technologies</h5>
            <div className='d-flex gap-2 flex-wrap'>
              <p className='skil_card light px-3 py-2'>Visual Studio Code</p>
              <p className='skil_card light px-3 py-2'>Jupyter</p>
              <p className='skil_card light px-3 py-2'>Postman</p>
              <p className='skil_card light px-3 py-2'>GitHub Version Control</p>
              <p className='skil_card light px-3 py-2'>Agile/Scrum methodology</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Myexp;
