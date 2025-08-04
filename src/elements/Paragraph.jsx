import React from "react";

const ParagraphElement = ({ text, className = "" }) => {
  return (
    <p style={{ whiteSpace: "pre-line", margin: 0 }} className={className}>
      {text}
    </p>
  );
};

export default ParagraphElement;
