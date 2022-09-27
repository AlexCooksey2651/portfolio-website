import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div className="main-header">
        <Nav fill variant="tabs" id="main-header__nav" className="justify-content-end">
            <Nav.Item>
                <Nav.Link className="main-header__item" eventKey="/projects" href="/projects">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/coaching" href="/coaching" className="main-header__item">Coaching</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/" variant="light" className="main-header__item" href="/">Bio</Nav.Link>
            </Nav.Item>
            
            
            {/* <ul className="main-header__item-list">
                <li className="main-header__item"><a href="/projects">Portfolio</a></li>
                <li className="main-header__item"><a href="/coaching">Coaching</a></li>
                <li className="main-header__item"><a href="/">About</a></li>
            </ul> */}
        </Nav>
    </div>
  )
}

export default Header;