import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
        Go back to the main page
      </Link>
    </div>
  );
};

export default NotFound;
