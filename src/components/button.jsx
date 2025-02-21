// write button card here
import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="px-4 py-2 bg-white-500 text-white rounded-md hover:bg-red-600 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button