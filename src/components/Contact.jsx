import { Button, TextField } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center align-items">
      <div className="w-5/12 flex items-center bg-[url('../public/img/contact/vector.png')] bg-no-repeat bg-left-bottom	">
        <div className="grid">
          <h1 className="text-7xl font-bold uppercase">Contact</h1>
          <p className="mr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="w-7/12 flex items-center justify-center">
        <form className="grid w-full border-2 rounded-xl p-12">
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
