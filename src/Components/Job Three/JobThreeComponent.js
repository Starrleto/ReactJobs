import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../../assets/riot.png';

const JobThreeComponent = () => {
  return (
    <div className='body'>
      <div>
  
      <h1 className="header">Riot Games</h1>
      <Container className='parag'>
        <Row>
          <Col lg={6} className="space">
            <h5 className="bold">Why I want to Work Here</h5>
            <p>Riot games seems relatively normal and employees seem to leave good reviews, honestly I'm not extremely down to work at a big company like this but sure why not. They made some games i've played so why not. </p>
            <h5 className="bold">Perks</h5>
            <p>
              It's 10 minutes away from my home at maximum, and I get the same vacations as the kids do while being paid, so I can still freelance and do my fun creative things on the side. My Mom also works in education and says the benefits are really good.
            </p>
            <h5 className="bold">Goals</h5>
            <p>
              I don't remember who it was, but someone mentioned that after a few years experience you could move up the ladder and start making higher salary and eventually become a senior dev, so yeah if I worked here i'd do that.
            </p>
          </Col>
          <Col lg={6} className="space">
          <h5 className="bold">Required Knowledge</h5>
            <p>
              Looking up the Video Games Riot has already made, I would have to learn Unreal Engine 4 and C++ as most of their games are made using these. So that's gonna be a lot of work because I don't know either of those yet. I was thinking I should learn Unreal sometime anyway, though. Apparently they also use HTML5? And other things I don't know like Python and Java.
            </p>
            <p>
              Anyway, besides that I'd need a portfolio as it seems they look for talent more than anything, and being able to collaborate with others as well. I've heard the interview process is hard so I need extra studying for these things.
            </p>
          </Col>
          <Col lg={12}>
            <img src={picture} alt="ok" className='pic img-fluid'></img>
          </Col>
        </Row>
      </Container>

      <a href="https://www.riotgames.com/" className='link'>Visit Riot Games</a>
      </div>
      <hr></hr>
    </div>
  )
}

export default JobThreeComponent