
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


function LandingPage() {
  const imageList = [
    { src: image1, alt :"Image 1"},
    { src:image2, alt:"Image 2"},
    { src:image3, alt: "Iamge 3"},
    { src:image4, alt: "Iamge 4"},
    { src:image5, alt: "Iamge 5"},
    { src:image6, alt: "Iamge 6"},

  ]
  return (
    <>
      <Navbar />
      <section className="hero">
       <img src={heroImage} alt="Hero" className="hero-image"/>
      <div className="hero-text">
        <h1>Embrace the Wild, Capture the Moment</h1>
        <p>Candid Shots of Nature in Its Purest Form</p>
        {/* <button className="hero-button">Get Started</button> */}
      </div>
    </section> 
    <section className="image-gallery">
      {imageList.map((image, index) => (
        <div key = {index} className="image-column">
         <img src={image.src} alt={image.alt} className="gallery-image"/> 
        </div>
      ))}
    </section>
      <Footer />
    </>
  );
}

export default LandingPage;
