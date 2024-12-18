// src/pages/LandingPage.js
// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h1>Welcome to My Nature Photography</h1>
          <p>Explore the beauty of nature through my lens.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
