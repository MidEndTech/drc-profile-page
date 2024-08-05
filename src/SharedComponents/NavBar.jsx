import { Link } from "react-router-dom";
import NavBarLogo from "/assets/NavBarSection/NavBarLogo.svg";
import NavBarWords from "/assets/NavBarSection/NavBarWords.svg";

import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import LinesIcon from "../Icons/LinesIcon";
import CloseIcon from "../Icons/CloseIcon";

function NavBar() {
  const [minu, setMinu] = useState(true);
  const [disply, setDisplay] = useState("hidden");
  const size = useWindowSize();

  const displayMinuHandle = () => {
    setMinu(!minu);

    if (minu && size.width < 1026) {
      setDisplay("w-full h-screen");
      document.body.classList.add("no-scroll");
    } else {
      setDisplay("hidden");
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    if (size.width > 1026) {
      displayMinuHandle();
    }
  }, [size.width]);

  return (
    <nav data-testid="browser" className="browser">
      <div className="bg-[#FFFFFF]/10 backdrop-blur-sm  w-full z-20 top-0 start-0 lg:h-[126.43px]">
        <div className="pt-10 flex mx-auto p-4 justify-between flex-wrap lg:justify-around lg:items-start">
          <ul className="flex">
            <li>
              <Link to={"/"}>
                <img
                  src={NavBarLogo}
                  alt="Logo"
                  className="w-14 lg:w-[83px] lg:h-[50px]"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <img
                  src={NavBarWords}
                  alt="Words"
                  className="w-40 lg:w-[188px] lg:h-[49.63px]"
                />
              </Link>
            </li>
          </ul>

          <div
            onClick={() => displayMinuHandle()}
            className="ml-3 mt-2 lg:hidden flex justify-end cursor-pointer"
          >
            {!minu && size.width < 1026 ? <CloseIcon /> : <LinesIcon />}
          </div>

          <ul
            className={`flex flex-col justify-evenly pb-40 text-[#FFFFFF]/70 text-[30px] lg:text-[25px] font-Bolds font-[700] items-center ${disply}  lg:h-auto text-center  lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-[50px]`}
          >
            <li>
              {""}
              <Link
                to={"/"}
                href=""
                className="underline underline-offset-2 decoration-primary  lg:no-underline focus:text-primary hover:text-primary"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <a
                href=""
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                من نحن{" "}
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                المشاريع
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:no-underline focus:text-primary hover:text-primary"
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