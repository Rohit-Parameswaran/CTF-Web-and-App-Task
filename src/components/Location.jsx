import React from "react";
import Navigation from "./Navigation";

const Location = () => {
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
        <h1>LOCATION</h1>
      </main>
    </>
  );
};

export default Location;
