import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../../assets/tusd.png';

const JobOneComponent = () => {
  return (
    <div className='body'>
      <div>
  
      <h1 className="header">Turlock Unified School District</h1>
      <Container className='parag'>
        <Row>
          <Col lg={6} className="space">
            <h5 className="bold">Why I want to Work Here</h5>
            <p>I want to become a Teacher because I enjoy working with kids. I work with elementary schoolers right now, so being an elementary school teacher wouldn't be that different.</p>
            <h5 className="bold">Perks</h5>
            <p>
              It's 10 minutes away from my home at maximum, and I get the same vacations as the kids do while being paid, so I can still freelance and do my fun creative things on the side. My Mom also works in education and says the benefits are really good.
            </p>
            <h5 className="bold">Goals</h5>
            <p>
              I want to be a good teacher and teach kids stuff and possibly how to code I guess
            </p>
          </Col>
          <Col lg={6} className="space">
          <h5 className="bold">Required Knowledge</h5>
            <p>
              It depends on the ciriculum, but I definitely have more than enough basic knowledge for multiple languages that I can use. I don't think coding knowledge would be much of a problem for me here. I used to go to a coding club in elementary school and took computer science classes in high school so I know what they teach, at least for now.
            </p>
            <p>
              However, I need to get better at public speaking, and my teaching skills in general. There's a difference between understanding something and being able to teach it, especially to someone who's never seen a program before, and is also probably 12 years old at maximum.
            </p>
          </Col>
          <Col lg={12}>
            <img src={picture} alt="ok" className='pic img-fluid'></img>
          </Col>
        </Row>
      </Container>

      <a href="https://www.turlock.k12.ca.us/" className='link'>Visit TUSD</a>
      </div>
      <hr></hr>
    </div>
  )
}

export default JobOneComponent