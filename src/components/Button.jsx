import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`ss:py-4 ss:px-6 font-poppins font-medium ss:text-[18px] py-[2.5vw] px-[3.5vw] text-[1.4 vw]  text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
