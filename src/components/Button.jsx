import React from "react";

const Button = ({ className = '', text = 'Get Started' }) => (
  <button type="button" className={`py-4 px-6 font-medium text-lg text-primary bg-blue-gradient rounded-lg outline-none transition-all hover:scale-105 ${className}`}>
    {text}
  </button>
);

export default Button;
