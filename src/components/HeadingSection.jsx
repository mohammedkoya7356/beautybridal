import React, { useEffect, useState } from "react";
import illustrationImg from "../assets/weddingimage.png";
import ScrollReveal from "scrollreveal";
import "./HeadingSection.css";

const texts = [
  "Your Happiness Is Our Greatest Achievement",
  "നിങ്ങളുടെ സന്തോഷമാണ് ഞങ്ങളുടെ ഏറ്റവും വലിയ നേട്ടം."
];

const HeadingSection = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      easing: "ease",
      reset: false,
    });

    sr.reveal(".heading", { origin: "top", delay: 200 });
    sr.reveal(".subheading", { origin: "left", delay: 400 });
    sr.reveal(".left-image", { origin: "left", delay: 300 });

    const interval = setInterval(() => {
      setVisible(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true); // fade in
      }, 1200); // slow fade duration
    }, 5000); // text visible time

    return () => {
      clearInterval(interval);
      sr.destroy();
    };
  }, []);

  return (
    <section style={{ backgroundColor: "maroon", color: "white", padding: "60px 0" }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
           <img
  src={illustrationImg}
  alt="Illustration"
  className="img-fluid left-image rounded"
/>

          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="heading fw-bold">Trusted Wedding Rentals</h2>

            <p className={`subheading transition-text ${visible ? "show" : "hide"}`}>
              {texts[index]}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
