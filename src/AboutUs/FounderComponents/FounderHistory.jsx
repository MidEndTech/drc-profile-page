import React from "react";

function FounderHistory() {
  return (
    <div className="flex flex-col items-start">
      {/* Line */}
      <div className=" h-64 w-[1px] bg-black relative z-0">
        {/* Circle */}
        <div className="absolute left-0 right-0 flex justify-center z-10">
          <div className="border-2 border-primary rounded-full p-1 ">
            <div className="p-2 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-center z-10">
          <div className="border-2 border-primary rounded-full p-1 ">
            <div className="p-2 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-1/4 left-0 right-0 flex justify-center z-10">
          <div className="border-2 border-primary rounded-full p-1 ">
            <div className="p-2 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-7 left-0 right-0 flex justify-center z-10">
          <div className="border-2 border-primary rounded-full p-1 ">
            <div className="p-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderHistory;
