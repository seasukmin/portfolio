import React from "react";
import Sub from "./Sub";
import { Outlet } from "react-router-dom";
import Container from "./Container";

function Home(props) {
  return (
    <Container>
      <Sub />
    </Container>
  );
}

export default Home;
