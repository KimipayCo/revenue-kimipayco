import React from "react";

const HorizontalLineText = ({ text }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <p className="text-lg font-bold">{text}</p>
      <div className="flex-grow border-b-2 border-gray-500 mx-4"></div>
    </div>
  );
};

export default HorizontalLineText;
