
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import heroImage from "../assets/heroImage.jpg";
import "./LandingPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-image"/>
      <div className="hero-text">
        <h1>Welcome to Our Website</h1>
        <p>Your journey starts here!</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
      <Footer />
    </>
  );
}

export default LandingPage;
