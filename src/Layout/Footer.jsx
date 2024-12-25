import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container-fluid ">
        <div className="row text-white d-flex justify-content-around">
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Contact US</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> +92 123-456-7890
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> moizayub401@gmial.com
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>  Mesa, New
                Jersey 45463
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Subscribe Our Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-danger" type="button">
                  <i className="bi bi-send"></i>
                </button>
              </div>
            </form>
            <p className="mt-3">Never miss an update & news to your email.</p>
          </div>
        </div>

        <div className="text-center border-top pt-4 text-light">
          <div className="mb-3">
            <span className="fw-bold">Moiz ka GYM</span>
          </div>
          <p className="mb-0">&copy; 2024 Moiz. All Copyrights reserved.</p>
          <div className="mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
