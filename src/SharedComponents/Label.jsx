import React from "react";

function Label({ className, children }) {
  return (
    <label className={`text-[24px] font-[400] my-6 mr-[3%] md:my-8 ${className}`}>{children}</label>
  );
}

export default Label;
