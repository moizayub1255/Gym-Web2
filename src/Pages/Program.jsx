import React from "react";

const Program = () => {
  const offers = [
    {
      title: "Personal Training",
      description: "Get one-on-one training sessions with certified trainers.",
      image: "gym1.jpg",
    },
    {
      title: "Group Classes",
      description: "Join our group fitness classes for yoga, Zumba, and more.",
      image: "gym2.jpg",
    },
    {
      title: "Nutrition Plans",
      description: "Customized nutrition plans to match your fitness goals.",
      image: "gym3.jpg",
    },
  
  ];

  return (
    <section className="offers-section py-5" id="offers">
      <div className="container">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row">
          {offers.map((offer, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <img
                  src={offer.image}
                  className="card-img-top"
                  alt={offer.title}
                  height={250}
                />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
