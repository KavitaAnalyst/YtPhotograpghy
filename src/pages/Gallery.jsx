// src/pages/GalleryPage.js
// import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./Gallery.css";

function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="gallery">
          <h1>Photo Gallery</h1>
          <div className="photo-grid">
            <img src="https://via.placeholder.com/300" alt="Nature 1" />
            <img src="https://via.placeholder.com/300" alt="Nature 2" />
            <img src="https://via.placeholder.com/300" alt="Nature 3" />
            <img src="https://via.placeholder.com/300" alt="Nature 4" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;
