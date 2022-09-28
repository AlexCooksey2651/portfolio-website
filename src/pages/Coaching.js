import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Coaching = () => {
  return (
    <Container id="coaching-page">
      <div>
        <img src="coaching-image" alt="coaching with cooksey logo" />
        <h1>Coaching With Cooksey</h1>
        <h5>NSCA-CPT, StrongFirst Elite Instructor, Precision Nutrition Level 2 Certified Nutrition Coach</h5>
      </div>
      <div id="coaching-page-bio">
        <p>Interested in working together to improve your fitness and well-being? You've come to the right place!</p>

        <p>I started my training career in 2013 at Equinox, where I ultimately had the pleasure of serving as a Tier X Coach and Master Instructor for fellow trainers and coaches. In 2020, I founded Coaching With Cooksey to help my clients develop the skills and habits necessary to lead healthier lives on their own terms. My clients' goals range from losing fat and building muscle to injury rehabilitation and ultramarathon training. Personally, I enjoy a nice mix of heavy barbell and kettlebell work alongside a healthy dose of good ol' bodybuilding training.</p>

        <p>Currently, I can be found working out at <a href="https://www.ironboundperformance.com">Ironbound Performance Athletics</a>, where I also coach a couple classes each week. It's a fantastic, tight-knit community; the fact that I've gotten in much better shape since joining just feels like a bonus. Come visit us in Jersey City, NJ!</p>
      </div>

      <hr/>

      <Container id="coaching-services-section">
        <div id="coaching-services-header">
          <h2 id="coaching-services-header-h2">Services</h2>
          <p><b>Please send all training inquiries to <a href="mailto:acooksey.hp@gmail.com?subject=Coaching With Cooksey Personal Training Inquiry">acooksey.hp@gmail.com</a>. Thank you!</b></p>
        </div>

        <Container id="coaching-service-cards">
          <Card id="online-programming-card" className="coaching-service-card">
            <h3>Online Programming</h3>
            <p>Would you like help putting together a training program that makes sense for your needs? I’ve got you covered. Fully individualized training programs based on your goals, equipment, and available time to train along with text/email check-ins and monthly video calls.</p>
            <div className="coaching-service-pricing">
              <h5>Pricing:</h5>
              <ul>
                <li>4-week program: $275</li>
                <li>12-week program: $750 ($250/4 weeks)</li>
              </ul>
            </div>
          </Card>

          <Card id="online-training-card" className="coaching-service-card">
            <h3>Online Training</h3>
            <p>Live, one-on-one training from the comfort of your living room, hotel room, or anywhere else you bring your screen. Progressive, customized training based on your goals, available equipment, and space.</p>
            <div className="coaching-service-pricing">
              <h5>Pricing:</h5>
              <p>Single Session: $125</p>
              <p>Packages:</p>
              <ul>
                <li>4 Sessions: $440 ($110/session)</li>
                <li>8 Sessions: $840 ($105/session)</li>
                <li>12 Sessions: $1200 ($100/session)</li>
              </ul>
            </div>
          </Card>

          <Card id="inperson-training-card" className="coaching-service-card">
            <h3>In-Person Training</h3>
            <h6><em>*Available in Jersey City, NJ</em></h6>
            <p>Looking for the personal touch? Maybe you just need the change of scenery or prefer the atmosphere of the gym. We can get together to perfect exercise technique, work around injuries or discomfort, or simply push a bit harder than you otherwise might.</p>
            <div className="coaching-service-pricing">
              <h5>Pricing:</h5>
              <p>Single Session: $140</p>
              <p>Packages:</p>
              <ul>
                <li>4 Sessions: $520 ($130/session)</li>
                <li>8 Sessions: $1000 ($125/session)</li>
                <li>12 Sessions: $1440 ($120/session)</li>
              </ul>
            </div>
          </Card>
        </Container>
      </Container>

      <hr/>

      <Container id="coaching-philosophy-section">
        <h2 id="coaching-philosophy-header">Coaching Philosophy</h2>
        
        <h3 className="coaching-philosophy-section-header">You're In the Driver's Seat</h3>
        <p>My aim is to simplify fitness for busy professionals through collaborative coaching relationships. I believe you understand yourself - what you like, the unique challenges you face, your priorities in life - better than I ever will.</p>
        <p>I don’t want to imitate the clichéd drill sergeant who just tells you what to do. Instead, I’d like to offer my education and experience alongside your input as we work together toward your goals. </p>


        <h3 className="coaching-philosophy-section-header">An Integrative Approach</h3>
        <p>
          It’s critical to spend time in introspection. Why are your goals important to you? How do they stack up relative to other priorities in your life? What systems do you have in place to manage your fitness aspirations alongside the other demands on your time and energy? The first step toward lasting change lies in developing clear and realistic goals that are genuinely meaningful to you.
        </p>
        <p>
          We’ll promote sustainable progress by complementing your exercise with proper nutrition, adequate sleep, physical recovery, and stress management. Keep these elements in harmony and combine them with a positive, growth-oriented mindset, and you’ll be well on the way toward long-term success.
        </p>

        <h3 className="coaching-philosophy-section-header">Skill Development Over Quick Fixes</h3>
        <p>
          When trying to make decisions for your health and wellness, it’s easy to get overwhelmed and lose the forest for the trees. Which diet is best for losing body fat? What workout program is ideal for building muscle? We’ll work together to cut through the confusion and learn solid principles so you can put your best foot forward.
        </p>

        <p>
          At the end of the day, most people don’t need complex solutions; they need help developing strategies to <em>execute the basics consistently</em>. Our focus will be on building skills and habits that help you care for your body and mind throughout your life.
        </p>
      </Container>
    </Container>
  )
}

export default Coaching