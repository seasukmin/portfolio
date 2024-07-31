import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "./Container";
import "./Sub.css";

function Sub(props) {
  return (
    <Container>
      <Link to="01" className="SubNav">
        <div>1</div>
      </Link>
      <Link to="02" className="SubNav">
        <div>2</div>
      </Link>
      <Link to="03" className="SubNav">
        <div>3</div>
      </Link>
      <Link to="04" className="SubNav">
        <div>4</div>
      </Link>
      <Link to="05" className="SubNav">
        <div>5</div>
      </Link>
      <Link to="06" className="SubNav">
        <div>6</div>
      </Link>
      <Outlet />
    </Container>
  );
}

export default Sub;
