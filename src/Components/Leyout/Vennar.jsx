import React from "react";
import Container from "../Container";

const Vennar = () => {
  return (
    <>
      <Container>
        <div
          className=" h-[100px] md:h-[400px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url(/vennar.jpg)" }}></div>
      </Container>
    </>
  );
};

export default Vennar;
