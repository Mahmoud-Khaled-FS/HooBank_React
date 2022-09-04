import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<{}>> = ({ className, children }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient ${className} font-poppins font-medium text-[18px] text-primary outline-none cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
