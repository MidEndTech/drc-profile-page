import { Link } from "react-router-dom";
import NavBarLogo from "/assets/NavBarSection/NavBarLogo.svg";
import NavBarWords from "/assets/NavBarSection/NavBarWords.svg";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import LinesIcon from "../Icons/LinesIcon";
import CloseIcon from "../Icons/CloseIcon";

function NavBar() {
  const [minu, setMinu] = useState(false);
  const [disply, setDisplay] = useState("hidden");
  const [count, setCounter] = useState(0);
  const size = useWindowSize();

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

  //this hokkes for update a width of page to toggle a minu whene return the size ofa page
  useEffect(() => {
    if (size.width > 1026) {
      displayMinuHandle();
    }
  }, [size.width]);

  //this functions for updateing the background color whine the burger icon open or close
  const backgroundOpenNavBar = () => {
    if (minu && size.width < 1026) {
      return "bg-dark-green lg:bg-[#FFFFFF]/10";
    } else if (
      window.location.pathname === "/aboutus" ||
      window.location.pathname === "/services"||
      window.location.pathname === "/founder-info"
    ) {
      return "bg-dark-green/30";
    } else {
      return "bg-[#FFFFFF]/10";
    }
  };

  return (
    <nav data-testid="browser" className="browser">
      <div
        className={`${backgroundOpenNavBar()} backdrop-blur-sm  w-full z-20 top-0 start-0 lg:h-[126.43px] ${!minu && "absolute"}`}
      >
        <div className="lg:pt-10 flex mx-auto p-4 justify-between flex-wrap lg:justify-around lg:items-start">
          <Link to={"/"}>
            <ul className="flex">
              <li>
                <img
                  src={NavBarLogo}
                  alt="Logo"
                  className="w-14 lg:w-[83px] lg:h-[50px]"
                />
              </li>
              <li>
                <img
                  src={NavBarWords}
                  alt="Words"
                  className="w-40 lg:w-[188px] lg:h-[49.63px]"
                />
              </li>
            </ul>
          </Link>

          <div
            onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
            className="ml-3 mt-2 lg:hidden flex justify-end cursor-pointer"
          >
            {minu && size.width < 1026 ? <CloseIcon /> : <LinesIcon />}
          </div>

          <ul
            className={`${backgroundOpenNavBar()} flex flex-col justify-evenly text-[#FFFFFF]/70 text-[30px] lg:text-[25px] font-[700] items-center ${disply}  lg:h-auto text-center  lg:flex lg:flex-row lg:justify-end lg:items-center lg:gap-[50px] lg:bg-inherit`}
          >
            <li>
              {""}
              <Link
                to={"/"}
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                className="underline underline-offset-2 decoration-primary  lg:no-underline focus:text-primary hover:text-primary"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to={"/aboutus"}
                className="lg:no-underline focus:text-primary hover:text-primary"
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                >
                من نحن{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                المشاريع
              </Link>
            </li>
            <li>
              <Link
                to={"/news"}
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                className="lg:no-underline focus:text-primary hover:text-primary"
              >
                أخبارنا
              </Link>
            </li>
            <li>
              <Link
                to={"/contactus"}
                onClick={() => {displayMinuHandle(),setCounter(prev => prev + 1)}}
                className="border-2 p-4 px-9 rounded-full hover:border-hidden focus:bg-primary hover:bg-primary"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;