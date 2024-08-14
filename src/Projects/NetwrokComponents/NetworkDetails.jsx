import React from "react";
import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";

function NetworkDetails({ image, heading, text }) {
  return (
    <div className="p-10 flex flex-col text-center items-center">
      <img src={image} alt={heading} className="w-[100px]}" />
      <Heading className=" text-primary p-10 ">{heading}</Heading>
      <Paragraph className="text-dark-green text-lg text-justify px-20 ">
        {text}
      </Paragraph>
    </div>
  );
}

export default NetworkDetails;
