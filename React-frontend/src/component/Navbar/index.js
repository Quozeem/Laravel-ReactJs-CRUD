import React from "react";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      {/* <Nav>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blogs
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
      </Nav> */}
    </>
  );
};

export default Navbar;
