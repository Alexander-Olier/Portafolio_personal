import React from "react";

export default function Portafolio() {
  return (
    <div className="grid grid-cols-1 mt-12 lg:flex w-full h-screen justify-center">
      <div className="h-full w-full my-10 lg:w-5/12 flex h-4/5 bg-[url('../public/img/portafolio/vector.png')] bg-[length:40%] bg-no-repeat bg-right-bottom">
        <div className="grid">
          <h1 className="text-4xl lg:text-7xl font-bold uppercase ">
            Project 1
          </h1>
        </div>
      </div>
      <div className="m-0 lg:w-7/12">
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
