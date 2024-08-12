import React from "react";


function ProjectDetail({ image, heading, text }) {
  return (
    <div className="p-4">
      <img
        src={image}
        alt={heading}
        className="w-full h-auto mb-4 rounded-lg"
      />
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default ProjectDetail;
