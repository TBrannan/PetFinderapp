import React, { Component } from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      Submit
    </button>
  );
};

export default Button;
