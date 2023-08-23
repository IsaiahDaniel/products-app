import React from "react";

type ButtonProps = {
  buttonName: string;
};

const Button = ({ buttonName }: ButtonProps) => {
  return (
    <button 
        className="border px-10 py-5 rounded-md mt-3 cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {buttonName}
    </button>
  );
};

export default Button;
