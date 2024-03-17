import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../../assets/freelance.jpg';

const JobTwoComponent = () => {
  return (
    <div className='body'>
      <div>
  
      <h1 className="header">Freelancer</h1>
      <Container className='parag'>
        <Row>
          <Col lg={6} className="space">
            <h5 className="bold">Why I want to Work Here</h5>
            <p>I like having some sort of freedom and choice, especially with jobs that require creativity like design work or things like that.</p>
            <h5 className="bold">Perks</h5>
            <p>
              I can choose which jobs I want to take and I can choose when I want to take them. I can set my own workload pretty much because I'll just take jobs that I can do. Plus, freelance jobs in web or game development which is what I'm planning for are generally just work from home things so I can go do my work at a library or my friend's house and chill.
            </p>
            <h5 className="bold">Goals</h5>
            <p>
              I'd like to get my name out there and become more well known for my work on projects, so maybe people end up asking me to work on their projects and I can charge more lol.
            </p>
          </Col>
          <Col lg={6} className="space">
          <h5 className="bold">Required Knowledge</h5>
            <p>
              I'd have to know whatever they need for the job, so I can work with my current skillset. I can do art and design jobs, I can use HTML and make APIs and stuff like that so that's a few jobs that are on the table for me.
            </p>
            <p>
              I can continue to learn more languages or technologies to use or just expand my skillset so more possible jobs are available to me. There's not like a certain threshold where I have to be to work at all but if I know more stuff i'll have more jobs. So.
            </p>
          </Col>
          <Col lg={12}>
            <img src={picture} alt="ok" className='pic img-fluid'></img>
          </Col>
        </Row>
      </Container>
      </div>
      <hr></hr>
    </div>
  )
}

export default JobTwoComponent