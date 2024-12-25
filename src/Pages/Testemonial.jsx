import React from "react";

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      image: "gym1.jpg",
      review: "This gym has helped me transform my body. The trainers are amazing and the equipment is top-notch!",
    },
    {
      name: "Jane Smith",
      image: "gym2.jpg",
      review: "I love the group classes and the friendly environment. It's a great place to work out!",
    },
    {
      name: "Mike Johnson",
      image: "gym3.jpg",
      review: "The personal training sessions have been a game-changer. Highly recommend this gym to anyone serious about fitness.",
    },
  ];

  return (
    <section className="testimonials-section py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center mb-4">What Our Members Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="testimonial-box p-4 text-center h-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h5>{testimonial.name}</h5>
                <p className="text-muted">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
