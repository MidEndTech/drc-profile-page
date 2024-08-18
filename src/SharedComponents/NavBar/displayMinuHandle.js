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

  export default displayMinuHandle;