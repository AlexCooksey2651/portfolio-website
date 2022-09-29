import React from 'react';
import { Nav, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Nav fill class="main-footer">
            <Nav.Link href="aecooksey2651@gmail.com">
                <img align="left" alt="email" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/alex-cooksey2651/">
                <img align="left" alt="linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
            </Nav.Link>
            <Nav.Link href="https://github.com/AlexCooksey2651">
                <img align="left" alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
            </Nav.Link>
            <Nav.Link href="https://medium.com/@aecooksey2651">
                <img align="left" alt="medium" src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/aecooksey2651/">
                <img align="left" alt="GitHub" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
            </Nav.Link>
        </Nav>
    )
}

export default Footer