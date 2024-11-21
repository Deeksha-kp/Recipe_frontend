import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" style={{color:"white"}}>
      <i className="fa-solid fa-bowl-food fa-bounce"  style={{color: "#0a0a0a",}} />
      {' '}
        RECIPEE
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header
