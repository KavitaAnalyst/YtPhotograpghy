// AboutMe.js
//import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import myPhoto from "../assets/web/yogi.JPG"; // Replace with the actual path to your image file

const AboutMe = () => {
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <div style={styles.row}>
        {/* Image Section */}
        <div style={styles.column}>
          <img src={myPhoto} alt="Photographer" style={styles.image} />
        </div>

        {/* Content Section */}
        <div style={styles.column}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.text}>
            Hello! I'm <strong>Yogesh Tripathi</strong>, an engineer with a passion for photography, based
            in the scenic city of Corbett City , Nainital, Uttarakhand. My journey into photography began
            with a fascination for candid moments—be it the vibrant expressions of humans, the graceful
            movements of animals, the serene beauty of birds, or the breathtaking landscapes of nature.
          </p>
          <p style={styles.text}>
            Each photograph I capture tells a story, preserving moments that might otherwise fade away.
            Through my lens, I aim to showcase the world’s beauty in its most unfiltered and authentic
            form. Whether it's the delicate flutter of a bird's wing or the subtle smile on someone's
            face, I believe there's magic in every frame waiting to be discovered.
          </p>
          <p style={styles.text}>
            When I’m not immersed in the world of photography, I enjoy exploring new perspectives and
            blending my engineering mindset with the creative art of photography.
          </p>
          <p style={styles.text}>Thank you for visiting my page!!</p>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.formHeading}>Contact Me</h2>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    paddingTop: "100px", // Adjust this value based on your navbar height
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
  },
  column: {
    flex: "1",
    minWidth: "300px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "10px",
    
  },
  formContainer: {
    marginTop: "60px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  formHeading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  /* Responsive Styles */
  '@media (max-width: 768px)': {
    row: {
      flexDirection: "column",
    },
    heading: {
      fontSize: "1.8rem",
    },
    text: {
      fontSize: "1rem",
    },
    button: {
      width: "100%", // Make buttons take full width on smaller screens
    },
    form: {
      width: "100%", // Form spans full width
    },
  }
};


export default AboutMe;
