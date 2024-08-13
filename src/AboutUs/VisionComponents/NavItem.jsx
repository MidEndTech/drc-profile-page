function NavItem({ handleSwitch, active, title }) {
  return (
    <li
      onClick={handleSwitch}
      className={`w-[16%] md:w-[10%] 2xl:w-[6%] py-2 px-2 bg-[#E7E7E7] rounded-full text-center text-lg md:text-xl xl:text-2xl font-medium transition-all transition-width duration-500 cursor-pointer hover:bg-secondary hover:text-white ${
        active
          ? "bg-secondary text-white w-[39%] md:w-[61%] lg:w-[40%] 2xl:w-[40%] cursor-auto"
          : ""
      } `}
    >
      {title}
    </li>
  );
}

export default NavItem;
