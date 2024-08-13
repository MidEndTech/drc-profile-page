

function TeamCards(props) {

  return (
    <div>
      <div key={props.index} className="z-10">
        <div  className="flex-col justify-center items-center text-center">
          <div className="flex justify-center items-center mt-10 mb-10">
            <img
              src={props.avatarImage}
              alt="pic"
              className="w-[276.57px] h-[220.07px]"
            />
          </div>

          <p className="font-[400] text-[20px] mt-5">{props.nameOfWorker}</p>


          <p className="font-[400] text-[16px] text-[#BE894A]">
            {props.workerTitile}
          </p>

          <div className="flex justify-center items-center  z-10 relative">
            <div
              className="border-2 rounded-full p-1 absolute top-1"
              style={{ borderColor: "#D9D9D9" }}
            >
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: "#D9D9D9" }}
              ></div>
            </div>
          </div>

          <div className="flex justify-center items-end mt-5">
            <p className="text-[16px] font-[400] mt-10 w-[276.57px]">
              {props.workerDescripe}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TeamCards;
