import { Link } from "react-router-dom";
import NavBarLogo from "/public/assets/NavBarSection/NavBarLogo.svg";
import NavBarWords from "/public/assets/NavBarSection/NavBarWords.svg";

import React, { useState } from "react";
import LinesIcon from "../Icons/LinesIcon";
import CloseIcon from "../Icons/CloseIcon";

function NavBar() {
  const [minu, setMinu] = useState(true);
  const [disply, setDisplay] = useState("hidden");

  const displayMinuHandle = () => {
    setMinu(!minu);

    if (minu) {
      setDisplay("w-full h-screen");
    } else {
      setDisplay("hidden");
    }
  };

  return (
    <nav>
      <div className="bg-[#FFFFFF]/10 backdrop-blur-sm fixed w-full z-20 top-0 start-0 md:h-[126.43px]">
        <div className="pt-10 flex mx-auto p-4 justify-between flex-wrap md:justify-around md:items-start">
          <ul className="flex">
            <li>
              <Link to={"/"}>
                <img
                  src={NavBarLogo}
                  alt="Logo"
                  className="w-14 md:w-[83px] md:h-[50px]"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <img
                  src={NavBarWords}
                  alt="Words"
                  className="w-40 md:w-[188px] md:h-[49.63px]"
                />
              </Link>
            </li>
          </ul>

          <div
            onClick={displayMinuHandle}
            className="ml-3 mt-2 md:hidden flex justify-end cursor-pointer"
          >
            {minu ? <LinesIcon /> : <CloseIcon />}
          </div>

          <ul
            className={`flex flex-col justify-evenly pb-40 text-[#FFFFFF]/70 text-[30px] md:text-[25px] font-Bolds font-[700] items-center ${disply}  md:h-auto text-center  md:flex md:flex-row md:justify-end md:items-center md:gap-[50px]`}
          >
            <li>
              {""}
              <Link
                to={"/"}
                href=""
                className="underline underline-offset-2  decoration-primary hover:decoration-[#FFFFFF]/70 md:no-underline focus:text-primary hover:text-primary"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <a
                href=""
                className="underline underline-offset-2 decoration-primary hover:decoration-[#FFFFFF]/70 md:no-underline focus:text-primary hover:text-primary"
              >
                من نحن{" "}
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline underline-offset-2  decoration-primary hover:decoration-[#FFFFFF]/70 md:no-underline focus:text-primary hover:text-primary"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline underline-offset-2  decoration-primary hover:decoration-[#FFFFFF]/70 md:no-underline focus:text-primary hover:text-primary"
              >
                المشاريع
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline underline-offset-2  decoration-primary hover:decoration-[#FFFFFF]/70 md:no-underline focus:text-primary hover:text-primary"
              >
                أخبارنا
              </a>
            </li>
            <li>
              <a
                href=""
                className="border-2 p-4 px-9 rounded-full hover:border-hidden focus:bg-primary hover:bg-primary"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
