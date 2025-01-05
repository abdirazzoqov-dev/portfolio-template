import React from 'react';

import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";


const Partner = () => {
  const logos = [
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,

  ]; // Replace with your actual image URLs

  return (
    <div className="flex justify-between items-center flex-wrap gap-4 mt-14">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-36 h-24 transition-transform"
        >
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition duration-100"
          />
        </div>
      ))}
    </div>
  );
};

export default Partner;
