import React from 'react'
import Container from 'react-bootstrap/Container'
import profilePic from '../resources/images/alexcooksey_profilepic.jpg'
import noodleImg from '../resources/images/chongqing_noodles.jpeg'
import icelandImg from '../resources/images/iceland.jpg'


const About = () => {
    return (
        <div id="bio">
            <Container className="about-page">
                <h5 id="about-page__header">Hi, my name is Alex Cooksey. Welcome to my page!</h5>
                <Container id="about-page__bio">
                    <div id="about-page__bio-text">
                        <p>
                            For nearly 10 years, I've relished the opportunity to help busy professionals improve their health and well-being as a personal trainer and nutrition coach. Wanting my career to positively touch the lives of (many!) more people, I made the decision last year to pivot into software engineering.
                        </p>
                        <p>
                            In November 2021, I enrolled in the Flatiron School full-stack software engineering program. I appreciate that engineering feels less like a job and more like a set of tools that can be applied to solving complex and meaningful problems in innovative ways and at tremendous scale. Please head over to the <a href="/projects">Portfolio</a> page to check out some of the recent projects I've worked on!
                        </p>
                    </div>
                    <Container id="profile-image-div">
                        <img src={profilePic} alt="profile-picture" id="profile-image" />
                    </Container>
                </Container>
                <Container id="about-page__bio-text-pt2">
                    <p>
                        In my next role, I'd love to continue developing and implementing strategies that help people lead happier, healthier lives. I'm also deeply passionate about animal protection and, more broadly, sustainability. I can think of no better use of my skills than to find creative solutions that will ensure a better future for our planet and everyone on it.
                    </p>

                    <p>
                        I continue to operate a small, (mostly) remote personal training business, Coaching With Cooksey. If you'd like to work together or want to learn more, please visit the <a href="/coaching">Coaching</a> page. In my spare time, I enjoy working out, reading, cooking, playing piano, and spending time in nature.
                    </p>
                </Container>

                <hr />

                <div id="fun-facts">
                    <h3 id="fun-facts__header">Fun Facts!</h3>
                    <Container id="fun-facts-pt1">
                        <Container id="noodle-image-div">
                            <img src={noodleImg} alt="chongqing-noodle-image" id="chongqing-noodle-img" />
                        </Container>
                        <ul id="fun-facts-list-pt1">
                            <li>Born and raised near Denver, CO; East Coast transplant since 2008.</li>
                            <li>Steve Irwin is a lifelong hero of mine. I love animals...all of them. Don't ask me to kill a fly, I don't want to.</li>
                            <li>Wanted to be a zoologist of some sort when I was young. Then I fell in love with playing piano...then math and chemistry. I majored in East Asian Studies at Princeton, so naturally I became a personal trainer. Now I'm a software engineer. Life is full of surprises!</li>
                            <li>I have perfect pitch - it hasn't carried over to singing ability. At all.</li>
                            <li>I have a hard time showing my goofy side, which means I sometimes come across a little bit cerebral or serious. Just takes me some time to open up. My sense of humor is silly with a dash of crazy - Jim Carrey and Robin Williams crack me up.</li>
                        </ul>
                    </Container>
                    <Container id="fun-facts-middle">
                        <ul>
                            <li>Love cooking and eating food from all around the world - I'm down to try anything. Some favorites: rack of lamb, ramen (the legit stuff, but instant is great too), and all different sorts of curries...Jamaican curry goat might be the winner. Or Japanese katsu curry with omurice. Or the incredible crab curry I had at Kalaya in Philly (best Thai food I've ever had!). I could happily live off of Chongqing Xiao Mian, the cheap and delicious street noodles in the city where Jenny's family is from. Oh, and peanut butter. Peanut butter is life. Ok, yeah, I love food.</li>
                        </ul>
                    </Container>
                    <Container id="fun-facts-pt2">
                        <ul>
                            <li>I don't intrinsically enjoy working out <em>that</em> much, most of the time. Still, heavy lifting is therapy for me. Especially deadlifting.</li>
                            <li>I still enjoy playing the Gen 1 & Gen 2 Pokemon video games. Pokemon Yellow was the first video game I owned, and I don't plan on getting rid of it anytime soon.</li>
                            <li>Among the countless things I have to be grateful for in this life, none matters more than the love of my life, Jenny Liu. Besides being a total boss, she's as kind and authentic a person as you're likely to meet in this world. We live in Jersey City, NJ with our cat, Piglet (aka Babe/Booboo), and dog, Sadie. It hardly seems possible, but I think they like eating even more than we do.</li>
                        </ul>
                        <Container id="iceland-image-div">
                            <img src={icelandImg} alt="iceland-image" id="iceland-img" />
                        </Container>
                    </Container>
                </div>
            </Container >
        </div>

    )
}

export default About