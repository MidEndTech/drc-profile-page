import React from "react";

function ButtonsTitle(props) {


  return (
    <div className="z-10 font-[400] text-[22px] md:font-[400] md:text-[28px]" onChange={()=>{}}>
      <button
        onClick={props.function1}
        className={`ml-10 ${
          props.activeBtn === "LensesAnd_dimensions"
            ? "text-[#BE894A]"
            : "text-[#8080808C]"
        } hover:text-[#BE894A]`}
      >
        عدسات/ أبعاد
      </button>
      <button
        onClick={props.function2}
        className={`ml-10 ${
          props.activeBtn === "features" ? "text-[#BE894A]" : "text-[#8080808C]"
        } hover:text-[#BE894A]`}
      >
        سمات
      </button>
      <button
        onClick={props.function3}
        className={`ml-10 ${
          props.activeBtn === "Internal_values"
            ? "text-[#BE894A]"
            : "text-[#8080808C]"
        } hover:text-[#BE894A]`}
      >
        القيم الداخلية
      </button>
    </div>
  );
}

export default ButtonsTitle;
