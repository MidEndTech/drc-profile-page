import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// import {displayMinuHandle} from './NavBar/displayMinuHandle'
// import {backgroundOpenNavBar} from './NavBar/backgroundOpenNavBar'

import LinesIcon from "../Icons/LinesIcon";
import CloseIcon from "../Icons/CloseIcon";
import LogoNavBar from "./NavBar/LogoNavBar";

function NavBar() {
  const [minu, setMinu] = useState(false);
  const [disply, setDisplay] = useState("hidden");
  const [updateComp, setUpdateComp] = useState(0);

  const [item, setItem] = useState([
    { nameOfItem: "الرئيسية", linkOfItem: "/" },
    { nameOfItem: "من نحن", linkOfItem: "/aboutus" },
    { nameOfItem: "خدماتنا", linkOfItem: "/services" },
    { nameOfItem: "المشاريع", linkOfItem: "/projects" },
    { nameOfItem: "أخبارنا", linkOfItem: "/news" },
    {nameOfItem: "تواصل معنا",linkOfItem: "/contactus"},
  ]);

  const size = useWindowSize();

  //this hokkes for update a width of page to toggle a minu whene return the size ofa page
  useEffect(() => {
    if (size.width > 1026) {
      displayMinuHandle();
    }
  }, [size.width]);

  // this functions for toggle a minu to appear the burger icon of responseve page
  const displayMinuHandle = () => {
    setMinu(!minu);

    if (!minu && size.width < 1026) {
      setDisplay("w-full h-screen");
      document.body.classList.add("no-scroll");
    } else {
      setMinu(false);
      setDisplay("hidden");
      document.body.classList.remove("no-scroll");
    }
  };

  //this functions for updateing the background color whine the burger icon open or close
  const backgroundOpenNavBar = () => {
    if (minu && size.width < 1026) {
      return "bg-dark-green lg:bg-[#FFFFFF]/10";
    } else if (
      window.location.pathname === "/aboutus" ||
      window.location.pathname === "/services" ||
      window.location.pathname === "/founder-info"
    ) {
      return "border-b";
    } else {
      return "bg-[#FFFFFF]/10";
    }
  };

  const borderDisplay = () => {
    if (
      (window.location.pathname === "/aboutus" ||
      window.location.pathname === "/services" ||
      window.location.pathname === "/founder-info") && size.width >= 1024
    ) {
      return "border-2 p-4 px-9 rounded-full border-[#BE894A] text-[#BE894A] hover:border-hidden focus:bg-primary hover:bg-primary hover:text-[#cccccc]";
    } else {
      return "border-2 p-4 px-9 rounded-full hover:border-hidden focus:bg-primary hover:bg-primary";
    }
  };

  return (
    <nav data-testid="browser" className="browser">
      <div
        className={`${backgroundOpenNavBar()} backdrop-blur-sm  w-full z-20 top-0 start-0 lg:h-[126.43px] ${
          !minu && "absolute"
        }`}
      >
        <div className="lg:pt-10 flex mx-auto p-4 justify-between flex-wrap lg:justify-around lg:items-start">
          <Link to={"/"} onClick={() => setUpdateComp((prev) => prev + 1)}>
            <LogoNavBar />
          </Link>

          <div
            onClick={() => {
              displayMinuHandle(), setUpdateComp((prev) => prev + 1);
            }}
            className="ml-3 mt-2 lg:hidden flex justify-end cursor-pointer"
          >
            {minu && size.width < 1026 ? <CloseIcon /> : <LinesIcon />}
          </div>

          <ul
            className={`${backgroundOpenNavBar()} border-none flex flex-col justify-evenly text-[#cccccc] text-[30px] lg:text-[25px] font-[700] items-center ${disply} lg:h-auto text-center lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-[50px] lg:bg-inherit`}
          >
            {item.map((el, index) => {
              return (
                <li key={index}>
                  {""}
                  <Link
                    to={el.linkOfItem}
                    onClick={() => {
                      displayMinuHandle(), setUpdateComp((prev) => prev + 1);
                    }}
                    className={
                      index === 5
                        ? borderDisplay()
                        : "underline underline-offset-2 decoration-primary lg:no-underline focus:text-primary hover:text-primary"
                    }
                  >
                    {el.nameOfItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;