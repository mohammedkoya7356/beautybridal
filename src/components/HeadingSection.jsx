import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const HeadingSection = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      easing: 'ease',
    });

    sr.reveal('.heading', { origin: 'top', delay: 200 });
    sr.reveal('.subheading', { origin: 'left', delay: 400 });
    sr.reveal('.left-image', { origin: 'left', delay: 300 }); // 👈 image animation
  }, []);

  return (
    <section style={{ backgroundColor: 'maroon', color: 'white', padding: '60px 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left image */}
          <div className="col-md-6 text-center text-md-start">
            <img
              src="/src/assets/Gemini_Generated_Image_vvg99uvvg99uvvg9 ss.png" // replace with your image
              alt="My illustrative"
              className="img-fluid left-image"
              style={{ borderRadius: '10px' }}
            />
          </div>

          {/* Right text */}
          <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
            <h2 className="heading fw-bold" style={{ fontSize: '2rem' }}>
              This is the Main Heading life is the bottom is scrare its  public reacction  so its made world its longest way is find out the managers low way in longest way in purpose the low interstand the national look hope the powerful way the pphasde in our hand when the scabable for enhangments and idea about the lowest way is bower make it hoeeible the national peaple the middle way so hard nature how it could possible its the longest purpose made its horrible
            </h2>
            <p className="subheading mt-3" style={{ fontSize: '1.2rem' }}>
              This is the Subheading with ScrollReveal animation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;

