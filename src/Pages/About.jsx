import React from 'react'

const About = () => {
  return (
    <section className="about-section py-5" id="about">
    <div className="container">
    <h2 className="mb-3 d-flex justify-content-center">About Us</h2>
      <div className="row align-items-center">

        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="about.jpg"
            alt="Gym About"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          
          <p>
            Welcome to our gym! We are dedicated to helping you achieve your fitness goals.
            With state-of-the-art equipment, certified trainers, and a supportive environment,
            we ensure that your journey towards health and fitness is both enjoyable and effective.
          </p>
          <p>
            Join us to unlock your potential and become the best version of yourself!
          </p>
        </div>
      </div>
    </div>
  </section>
   
  )
}

export default About