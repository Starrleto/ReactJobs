import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import picture from '../../assets/art.png';

const JobFiveComponent = () => {
  return (
    <div className='body'>
      <div>
  
      <h1 className="header">SJCOE</h1>
      <Container className='parag'>
        <Row>
          <Col lg={6} className="space">
            <h5 className="bold">Why I want to Work Here</h5>
            <p>In the same ballpark as TUSD pretty much, I like the idea of becoming a teacher and SJCOE has a couple opportunities for teaching especially in the STEM field. Obviously Codestack is one, but there's another department I might actually intern or volunteer at for a STEM summer program my Mom told me about.</p>
            <h5 className="bold">Perks</h5>
            <p>
              I'm not sure what benefits come with SJCOE and I'm mostly trying to go for an elementary school right now but I assume it's similar to benefits you'd get teaching elsewhere. There's at least some leeway on breaks and stuff so that's cool.
            </p>
            <h5 className="bold">Goals</h5>
            <p>
              I just like teaching folks, especially about a subject I have interest in. My goal is hopefully to become a teacher that can be easily understood and well enjoyed. 
            </p>
          </Col>
          <Col lg={6} className="space">
          <h5 className="bold">Required Knowledge</h5>
            <p>
              Depending which part of SJCOE I work at, I'll be teaching different stuff that I'd have to learn. In that other STEM program I'm pretty sure they work with things more involved with robotics, engineering, and modeling. It wouldn't be too complex as those programs are generally meant for younger kids but I'd still have to learn it. 
            </p>
            <p>
              If I taught at Codestack or something I'd have to become better at thsi web development stuff because I'd have to know it so I could actually teach it.
            </p>
          </Col>
          <Col lg={12}>

          </Col>
        </Row>
      </Container>
      </div>
      <hr></hr>
    </div>
  )
}

export default JobFiveComponent