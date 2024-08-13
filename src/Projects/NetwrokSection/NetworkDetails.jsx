import React from "react";

function ProjectDetail({ image, heading, text }) {
  return (
    <div className="p-4">
      <img
        src={image}
        alt={heading}
        className="w-1/2 h-auto mx-auto rounded-lg"
      />
      <h2 className=" text-primary text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-dark-green text-lg">{text}</p>
    </div>
  );
}

export default ProjectDetail;