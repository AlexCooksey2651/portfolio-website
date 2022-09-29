import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="main-header" variant="dark">
      <Container>
        <Navbar.Brand className="main-header__logo" href="/bio"><code>{`< AlexCooksey />`}</code> </Navbar.Brand>
        <Nav align="end" className="ml-auto">
          <Nav.Link className="main-header__nav-link" href="/projects">Portfolio</Nav.Link>
          <Nav.Link className="main-header__nav-link" href="/coaching" >Coaching</Nav.Link>
          <Nav.Link className="main-header__nav-link" href="/bio">Bio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header;