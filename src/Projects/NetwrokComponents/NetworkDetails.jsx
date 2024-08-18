import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";

function NetworkDetails() {
  const { id } = useParams();
  const project = Object.values(data).find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-10 flex flex-col text-center items-center mt-24">
      <img src={project.image} alt={project.heading} className="" />
      <Heading className="text-primary p-10">{project.heading}</Heading>
      <Paragraph className="text-dark-green text-lg text-justify px-20">
        {project.text}
      </Paragraph>
    </div>
  );
}

export default NetworkDetails;
