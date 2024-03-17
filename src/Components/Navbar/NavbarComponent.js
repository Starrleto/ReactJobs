import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import './style.css'

const NavbarComponent = () => {
  return (
    <Nav variant="pills" defaultActiveKey="/" className='justify-content-center pad'>
      <Nav.Item className='ok'>
        <Nav.Link className='ok' as={Link} to='/' eventKey="link-1" href='/'>TUSD</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/free' className='ok' eventKey="link-2">Freelancer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/riot" eventKey="link-3" className='ok'>Riot Games</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/entr" eventKey="link-4" className='ok'>Entrepreneur</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/sjcoe" eventKey="link-5" className='ok'>SJCOE</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavbarComponent