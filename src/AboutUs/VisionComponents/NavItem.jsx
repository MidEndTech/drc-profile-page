function NavItem({ handleSwitch, active, title }) {
  return (
    <li
      onClick={handleSwitch}
      className={`w-[20%] md:w-[15%] 2xl:w-[15%] py-2 px-2 bg-[#E7E7E7] rounded-full text-center text-lg md:text-xl xl:text-2xl font-medium transition-all transition-width duration-500 cursor-pointer hover:bg-secondary hover:text-white ${
        active
          ? "bg-secondary text-white !w-[80%] md:!w-[70%] lg:!w-[85%] 2xl:!w-[85%] cursor-auto"
          : ""
      } `}
    >
      {title}
    </li>
  );
}

export default NavItem;
