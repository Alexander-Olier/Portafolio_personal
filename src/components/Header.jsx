import React from "react";

export default function Header() {
  return (
    <div>
      <header className="inline-flex w-full mb-10">
        <div className="flex items-center">
          <img src="./img/logo.png" className="m-2" alt="logo buho"/>
          <h4 className="text-lg uppercase">dev olier</h4>
        </div>
        <ul className="flex ml-auto items-center space-x-6 uppercase">
          <li>
            <a href="/" className="border-2 border-black p-2">
              Inicio
            </a>
          </li>
          <li>
            <a href="/" className="text-base">
              About us
            </a>
          </li>
          <li>
            <a href="/" className="text-base">
              Portafolio
            </a>
          </li>
          <li>
            <a href="/" className="text-base">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
