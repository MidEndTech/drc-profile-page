import React from "react";
import NavBarLogo from "/assets/NavBarSection/NavBarLogo.svg";
import NavBarWords from "/assets/NavBarSection/NavBarWords.svg";
import GreenLogo from "/assets/NavBarSection/GreenLogo.svg";

function LogoNavBar() {
  const logoHandle = () => {
    if (
      window.location.pathname === "/aboutus" ||
      window.location.pathname === "/services" ||
      window.location.pathname === "/founder"
    ) {
      return "green";
    }
  };

  return (
    <ul className="flex">
      {logoHandle() === "green" ? (
        <li>
          <img src={GreenLogo} className="w-[215px] lg:w-auto" alt="Logo" />
        </li>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
}

export default LogoNavBar;
