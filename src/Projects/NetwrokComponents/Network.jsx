  import React from "react";
  import { useState } from "react";
  import NetworkDetails from "./NetworkDetails";
  import data from "./data.json";
  import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
  import "./style.css";
  import { useNavigate } from "react-router";

  function Network() {
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    const handleClick = (key) => {
      const project = data[key];
      setSelected(project);
      navigate(`/projects/${project.id}`);

    };

    return (
      <>
        {selected ? (
          <NetworkDetails
            image={selected.image}
            heading={selected.heading}
            text={selected.text}
          />
        ) : (
          <div className="grid grid-cols-5  gap-2 md:gap-4 p-2 lg:grid-cols-5 justify-items-center ">
            <div className="relative w-full col-start-2">
              <img src={data["TopRight"].image} className="w-full" />
              <div
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
                onClick={() => handleClick("TopRight")}
              >
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[4px] sm:text-[10px] md:text-[13px] md:p-1 lg:text-[16px] ">
                  محافظة الجموم
                </span>
                <span className="block text-[5px] sm:text-[13px] md:text-[13px] lg:text-[18px]  \">
                  مجمعات الخدمات الحكومية
                </span>
              </div>
            </div>
            <div className="relative w-full">
              <img src={data["TopMiddle"].image} className="w-full " />
              <div
                onClick={() => handleClick("TopMiddle")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[4px] sm:text-[10px] md:text-[13px] md:p-1 lg:text-[16px] ">
                  مركز الترحيب{" "}
                </span>
                <span className="block text-[5px] sm:text-[13px] md:text-[13px] lg:text-[18px]  \">
                  بالمدينة المنورة{" "}
                </span>
              </div>
            </div>

            <div className="relative w-full row-start-1 row-end-3 col-start-4">
              <img src={data["TopLeft"].image} className="w-full " />
              <div
                onClick={() => handleClick("TopLeft")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[6px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[25px] ">
                  فندق البدر
                </span>
              </div>
            </div>
            <div className="relative w-full  col-span-2 row-start-2 row-end-4 col-start-2">
              <img src={data["Center"].image} className="w-full " />
              <div
                onClick={() => handleClick("Center")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[7px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[30px] ">
                  جامع العباس
                </span>
              </div>
            </div>
            <div className="relative w-full col-start-4 row-start-3 row-end-5">
              <img
                src={data["MiddleLeft"].image}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div
                onClick={() => handleClick("MiddleLeft")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[7px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[20px] ">
                  عنوان المشروع الخامس{" "}
                </span>
              </div>
            </div>

            <div className="relative w-full col-start-2 row-start-4 row-end-6">
              <img
                src={data["BottomRight"].image}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div
                onClick={() => handleClick("BottomRight")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[7px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[25px] ">
                  فندق دار القصبي
                </span>
              </div>
            </div>
            <div className="relative w-full row-start-4 row-end-6 col-start-3">
              <img
                src={data["BottomCenter"].image}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div
                onClick={() => handleClick("BottomCenter")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[7px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[20px] ">
                  فيلا سكنيه خاصة{" "}
                </span>
              </div>
            </div>
            <div className="relative w-full col-start-4 row-start-5 row-end-5 ">
              <img src={data["BottomLeft"].image} className="w-full h-full" />
              <div
                onClick={() => handleClick("BottomLeft")}
                className="absolute  cursor-pointer inset-0 hover:bg-dark-green/80 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl"
              >
                {" "}
                <FaArrowLeft className="text-white absolute border md:border-2 p-1 border-white rounded-full flex items-start md:top-10 md:left-10 md:text-[30px] left-2 top-1  text-[15px] " />
              </div>
              <div className="absolute bottom-2 right-1 md:right-5 text-white font-bold">
                <span className="block text-[7px] sm:text-[10px] md:text-[17px] md:p-1 lg:text-[20px] ">
                  حديقة الحمراء
                </span>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  export default Network;
