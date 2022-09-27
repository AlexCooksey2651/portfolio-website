import React from 'react'
import { foreverHome_url, strongerTomorrow_url, pokemonAcademy_url } from '../resources/videos/youtube_links'

const Projects = () => {
    return (
        <div>
            <div>
                <h1>Technical Projects</h1>
                <div>
                    <iframe src={foreverHome_url}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        muted
                        title='video'
                    />
                    <h4><em>Forever Home</em> - <a>GitHub</a></h4>
                    <p>Multi-interface web application connecting pet adoption shelters and customers</p>
                    <ul>
                        <li>Built using React, HTML, CSS frontend; Ruby on Rails backend with PostgreSQL database managed through Active Record</li>
                        <li>Utilizes polymorphic associations and conditional frontend rendering to allow multiple classes of users</li>
                        <li>Incorporates Active Storage gem to incorporate image upload of pets in listings</li>
                        <li>Extensive use of custom routes and methods on backend to update listings and applications programmatically</li>
                    </ul>
                </div>
                <div>
                <iframe src={strongerTomorrow_url}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        muted
                        title='video'
                    />
                    <h4><em>Stronger Tomorrow</em> - <a>GitHub</a></h4>
                    <p>Single-page web application allowing convenient tracking of strength training progress</p>
                    <ul>
                        <li>Built using React, HTML, CSS frontend; Ruby on Rails backend with PostgreSQL database managed through Active Record</li>
                        <li>Integrates Recharts.js to provide graphic display of user progress alongside tabulated performance records</li>
                        <li>UI styled using React-Bootstrap</li>
                        <li>Session handling and user authentication performed through BCrypt password encryption</li>
                    </ul>
                </div>
                <div>
                <iframe src={pokemonAcademy_url}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        muted
                        title='video'
                    />
                    <h4><em>Office of the Registrar: Pokemon Academy</em> - <a>GitHub</a></h4>
                    <p>Web application designed to mimic administrator management of academic course catalog and student enrollment</p>
                    <ul>
                        <li>Built using React, HTML, and CSS for frontend; backend developed with Ruby, Sinatra, SQLite and Active Record</li>
                        <li>Integrates multiple many-to-many associations to simulate relationships of students, courses, and departments in academic setting</li>
                    </ul>
                </div>
            </div>

            <div>
                <h5>Technical Skills: JavaScript, React, Redux, TypeScript, Node, SQL, Git/GitHub, HTML, CSS, Ruby on Rails</h5>
            </div>
        </div>
    )
}

export default Projects