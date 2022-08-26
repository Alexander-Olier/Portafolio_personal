import { TextField } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 mt-12 lg:flex w-full h-screen  justify-center align-items">
      <div className="bg-none w-full lg:w-5/12 flex items-center bg-[url('../public/img/contact/vector.png')] bg-no-repeat bg-left-bottom">
        <div className="grid">
          <h1 className="text-4xl lg:text-7xl font-bold uppercase">Contact</h1>
          <p className="m-0 lg:mr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:w-7/12 flex items-center justify-center">
        <form className="grid border-2 p-10 lg:border-2 rounded-xl">
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Mail" variant="standard" />
          <TextField id="standard-basic" label="Phone" variant="standard" />
          <textarea
            className="resize-none h-32 mt-5 quitB"
            placeholder="Description"
          />
          <button className="mt-5 buttonForm">Submit</button>
        </form>
      </div>
    </div>
  );
}
