import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./MapSection.css"; // optional if you want extra styling

const MapSection = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "ease-in-out",
      reset: false, // animations only once
    });

    // Animate both map and image together
    sr.reveal(".map-left", { origin: "left", interval: 200, opacity: 0 });
    sr.reveal(".map-right", { origin: "right", interval: 200, opacity: 0 });
    sr.reveal(".map-heading", { origin: "top", delay: 100, opacity: 0 });
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#800000",
        padding: "60px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2
          className="map-heading"
          style={{
            marginBottom: "30px",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "700",
            background: "linear-gradient(180deg, #ffffff, #777777)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Visit Our Shop
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE — MAP */}
          <div
            className="map-left"
            style={{
              flex: "1 1 450px",
              borderRadius: "15px",
              overflow: "hidden",
              height: "450px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28138.701314095277!2d75.89391960845268!3d11.044997918700957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64deac87e3c8d%3A0x5723d373cd2500ce!2sBeauty%20Bridal!5e1!3m2!1sen!2sin!4v1764203303594!5m2!1sen!2sin"
            ></iframe>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div
            className="map-right"
            style={{
              flex: "1 1 350px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/src/assets/shop1.jpeg"
              alt="Chemmad Beauty Bridal"
              style={{
                width: "70%",
                maxWidth: "450px",
                borderRadius: "15px",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
