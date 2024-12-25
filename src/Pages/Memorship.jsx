import React from "react";

function Memorship() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$20/month",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Open gym access",
      ],
    },
    {
      name: "Standard Plan",
      price: "$40/month",
      features: [
        "Everything in Basic Plan",
        "2 Personal training sessions",
        "Access to group classes",
      ],
    },
    {
      name: "Premium Plan",
      price: "$60/month",
      features: [
        "Everything in Standard Plan",
        "Unlimited personal training",
        "Custom nutrition plan",
      ],
    },
  ];

  return (
    <section className="membership-section py-5" id="membership">
    <div className="container">
      <h2 className="text-center mb-4">Membership Plans</h2>
      <div className="row">
        {plans.map((plan, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.name}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{plan.price}</h6>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
}

export default Memorship;
