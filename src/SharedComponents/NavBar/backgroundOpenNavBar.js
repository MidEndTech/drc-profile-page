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