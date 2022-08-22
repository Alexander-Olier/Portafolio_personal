import React from "react";

export default function Portafolio() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-5/12 h-screen flex items-center bg-[url('../public/img/portafolio/vector.png')] bg-no-repeat bg-right-bottom	">
        <h1 className="text-7xl font-bold uppercase">Project 1</h1>
      </div>
      <div className="w-7/12 m-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
