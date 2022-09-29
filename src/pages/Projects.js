import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { foreverHome_url, strongerTomorrow_url, pokemonAcademy_url } from '../resources/videos/youtube_links';


const Projects = () => {
    return (
        <div id="portfolio-page">
            <Container>
                <h1 id="technical-projects-header">Technical Projects</h1>
                <Container id="technical-skills">
                    <h6>Technical Skills: JavaScript, React, Redux, TypeScript, Node, SQL, Git/GitHub, HTML, CSS, Ruby on Rails</h6>
                </Container>
                <hr />
                <div id="technical-project-cards">
                    <Card id="forever-home-card" className="project-card">
                        <iframe
                            src={foreverHome_url}
                            allowFullscreen
                            title='forever-home-video'
                        />
                        <Card.Body>
                            <Card.Title><em>Forever Home</em> - <a href="https://github.com/AlexCooksey2651/phase-5-final-project-forever-home">GitHub</a></Card.Title>
                            <p><em>Multi-interface web application connecting pet adoption shelters and customers</em></p>
                            <ul>
                                <li>Built using React, HTML, CSS frontend; Ruby on Rails backend with PostgreSQL database managed through Active Record</li>
                                <li>Utilizes polymorphic associations and conditional frontend rendering to allow multiple classes of users</li>
                                <li>Incorporates Active Storage gem to incorporate image upload of pets in listings</li>
                                <li>Extensive use of custom routes and methods on backend to update listings and applications programmatically</li>
                            </ul>
                        </Card.Body>
                    </Card>

                    <Card id="stronger-tomorrow-card" className="project-card">
                        <iframe src={strongerTomorrow_url}
                            allowfullscreen
                            title='stronger-tomorrow-video'
                        />
                        <Card.Body>
                            <Card.Title><em>Stronger Tomorrow</em> - <a href="https://github.com/AlexCooksey2651/phase-4-project-stronger-tomorrow">GitHub</a></Card.Title>
                            <p><em>Single-page web application allowing convenient tracking of strength training progress</em></p>
                            <ul>
                                <li>Built using React, HTML, CSS frontend; Ruby on Rails backend with PostgreSQL database managed through Active Record</li>
                                <li>Integrates Recharts.js to provide graphic display of user progress alongside tabulated performance records</li>
                                <li>UI styled using React-Bootstrap</li>
                                <li>Session handling and user authentication performed through BCrypt password encryption</li>
                            </ul>
                        </Card.Body>

                    </Card>

                    <Card id="pokemon-academy-card" className="project-card">
                        <iframe 
                            src={pokemonAcademy_url}
                            allowfullscreen
                            title='pokemon-academy-video'
                        />
                        <Card.Body>
                            <Card.Title><em>Office of the Registrar: Pokemon Academy</em> - <a href="https://github.com/AlexCooksey2651/phase-3-sinatra-react-project">GitHub</a></Card.Title>
                            <p><em>Web application designed to mimic administrator management of academic course catalog and student enrollment</em></p>
                            <ul>
                                <li>Built using React, HTML, and CSS for frontend; backend developed with Ruby, Sinatra, SQLite and Active Record</li>
                                <li>Integrates multiple many-to-many associations to simulate relationships of students, courses, and departments in academic setting</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>

            </Container>

            <hr />


        </div>
    )
}

export default Projects