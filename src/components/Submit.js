import React from "react";
import Content from "./Content";

const Submit = ({ color, text, onClick }) => {
  const handleClick = () => {
    console.log(Content.defaultProps.title);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn">
        Submit
      </button>
    </div>
  );
};

export default Submit;
