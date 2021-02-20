import React from "react";
import Navigation from "./Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <main
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1>ABOUT</h1>
      </main>
    </>
  );
};

export default About;
