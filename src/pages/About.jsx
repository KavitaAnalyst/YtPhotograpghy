// src/pages/AboutPage.js
// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="about">
          <h1>About Me</h1>
          <p>
            Hi! I am a passionate nature photographer. Capturing the beauty of
            nature is my greatest joy. I hope my photos inspire you to connect
            with the world around you.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
