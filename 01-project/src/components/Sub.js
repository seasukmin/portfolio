import React from "react";
import { Link, Outlet } from "react-router-dom";

function Sub(props) {
  return (
    <div>
      <Link to="01">
        <div>1.</div>
      </Link>
      <Link to="02">
        <div>2.</div>
      </Link>
      <Link to="03">
        <div>2.</div>
      </Link>
      <Link to="04">
        <div>2.</div>
      </Link>
      <Link to="05">
        <div>2.</div>
      </Link>
      <Link to="06">
        <div>2.</div>
      </Link>
    </div>
  );
}

export default Sub;
