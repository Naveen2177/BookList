import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      let userName = e.target.value;
      console.log("userName", userName);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="container-fluid">
      <div className="">
        <ul className="row text-center nav-tabs p-3 bg-dark">
          <li className="col-1 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              Home
            </a>
          </li>

          <li className="col-2 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              categories
            </a>
          </li>

          <li className="col-2 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              Book Lists
            </a>
          </li>

          <li className="col-2 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              Shirt Lists
            </a>
          </li>

          <li className="col-2 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              New Arrivals
            </a>
          </li>

          <li className="col-1 list-unstyled">
            <a href="/" className="text-decoration-none text-white">
              Cart
            </a>
          </li>

          <li className="col-2 list-unstyled">
            <form className="d-flex" id="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
                name="name"
              />
              <button className="btn btn-outline-success" type="submit">
                submit
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
