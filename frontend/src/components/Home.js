import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h2>Welcome to BetaMart</h2>
        <div className="text-center" style={{ maxWidth: "600px" }}>
          <p>
            Welcome to BetaMart, your ultimate destination for online shopping!
            Dive into a world of convenience and choice with our wide range of
            products, from tech gadgets to fashion essentials, all at your
            fingertips. Discover unbeatable deals, seamless shopping
            experiences. Join us at BetaMart and redefine your online shopping
            journey today!
          </p>
        </div>
        <div className="mt-4 text-center">
          <Link to="/ProductPage" className="btn btn-primary">
            Proceed to Shopping
          </Link>
        </div>
      </div>
      <footer className="footer py-3 bg-primary text-white">
        <div className="container text-center">
          <p>&copy; 2024 BetaMart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
