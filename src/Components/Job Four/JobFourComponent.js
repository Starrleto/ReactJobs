import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../../assets/entr.png';

const JobFourComponent = () => {
  return (
    <div className='body'>
      <div>
  
      <h1 className="header">Entrepreneur</h1>
      <Container className='parag'>
        <Row>
          <Col lg={6} className="space">
            <h5 className="bold">Why I want to Work Here</h5>
            <p>Specifically this tab is for me making like. A really small game dev group with some folks I know- kind of like the company OMOCAT who made Omori. They're pretty successful so I want to do something like that.</p>
            <h5 className="bold">Perks</h5>
            <p>
              I know that it's not exactly viable for like, a full-time job, but the good part is that if I do something else (like Teaching) I can just work on this while doing that.
              I can make fun games that I like with my friends and maybe make money out of it. So yeah. Sounds cool.
            </p>
            <h5 className="bold">Goals</h5>
            <p>
              Hopefully one of my games gets lucky and people play it then I dunno I'll make like a website for my funny game dev company/group thing and sell official merch of the game because that's how OMOCAT makes most of their money.
            </p>
          </Col>
          <Col lg={6} className="space">
          <h5 className="bold">Required Knowledge</h5>
            <p>
              I've done a lot of learning and am able to make lots of different things function, although I'm still not done perfecting my craft and there's a lot of C# concepts I have yet to learn. I guess most of that will come from experience and studying other folks' games, since making games is how I taught myself this far.
            </p>
            <p>
              I need to learn like, game design though. Making good and balanced game mechanics and knowing what's good or not is a pretty difficult skill. I think that most folks can't really make an amazing idea first try and they need other people to play and test the game to ensure the mechanics are good, but still, it's good to have some sense of judgement yourself. Also I need to learn how to do marketing because I'm gonna have to market myself.
            </p>
          </Col>
          <Col lg={12}>
            <img src={picture} alt="ok" className='pic img-fluid'></img>
          </Col>
        </Row>
      </Container>

      <a href="https://www.omocat-shop.com/" className='link'>Also Visit OMOCAT (They aren't hiring but they're part of my inspiration so)</a>
      </div>
      <hr></hr>
    </div>
  )
}

export default JobFourComponent