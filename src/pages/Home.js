import React from "react";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <section className="home-container">
        <h1>RANDOM USER GENERATOR</h1>
        <p>
          Click on the get user button on the Users Page to generate 5 users.
        </p>
      </section>
    </>
  );
}

export default Home;
