import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappMessage = `Hello, I am ${name}.\nEmail: ${email}\nMessage: ${message}`;


    const whatsappURL = `https://wa.me/923366190190?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">

          <div className="col-lg-6 ">
            <img src="contact.jpg" alt="Contact" className="img-fluid" />
          </div>

          <div className="col-12 col-lg-6 mt-4">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
