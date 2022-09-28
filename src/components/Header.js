import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="main-header" variant="dark">
      <Container>
        <Navbar.Brand className="main-header__logo"><code>{`< AlexCooksey />`}</code> </Navbar.Brand>
        <Nav align="end" className="ml-auto">
          <Nav.Link className="main-header__nav-link" href="/projects">Portfolio</Nav.Link>
          <Nav.Link href="/coaching" className="main-header__nav-link">Coaching</Nav.Link>
          <Nav.Link variant="light" className="main-header__nav-link" href="/">Bio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header;