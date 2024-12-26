
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import heroImage from "../assets/web/view2.JPG";
import "./LandingPage.css";
import image1 from "../assets/flowers/flower1.JPG";
import image2 from "../assets/flowers/flower2.JPG";
import image3 from "../assets/web/buddha.JPG";
import image4 from "../assets/flowers/flower6.JPG";
import image5 from "../assets/web/view10.JPG";
import image6 from "../assets/web/sunset.JPG";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



function LandingPage() {
  const imageList = [
    { src: image1, alt :"Image 1"},
    { src:image2, alt:"Image 2"},
    { src:image3, alt: "Image 3"},
    { src:image4, alt: "Image 4"},
    { src:image5, alt: "Image 5"},
    { src:image6, alt: "Image 6"},

  ]
  return (
    <>
      <Navbar />
      <section className="hero">
        <LazyLoadImage src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Embrace the Wild, Capture the Moment</h1>
        <p>Candid Shots of Nature in Its Purest Form</p>
        {/* <button className="hero-button">Get Started</button> */}
      </div>
    </section> 
    <section className="image-gallery">
      {imageList.map((image, index) => (
        <div key = {index} className="image-column">
         <LazyLoadImage src={image.src} alt={image.alt} className="gallery-image"/> 
        </div>
      ))}
    </section>
      <Footer />
    </>
  );
}

export default LandingPage;
