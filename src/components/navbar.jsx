import React, { Component } from "react";

//Statles Functional Component

//object destruction with props.totalCounters
const NavBar = ({totalCounters}) => {
    <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge bg-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
};

export default NavBar;
