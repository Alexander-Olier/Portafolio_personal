import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div>
      <header className="flex lg:inline-flex w-full fixed bg-[#F3F3F3] z-10 shadow-lg shadow-cyan-500/50">
        <div className="flex items-center">
          <img src="./img/logo.png" className="m-2" alt="logo buho" />
          <h4 className="text-xs lg:text-lg uppercase">dev olier</h4>
        </div>
        <ul className="hidden lg:flex ml-auto items-center space-x-6 uppercase">
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
        <div className="my-auto ml-auto lg:hidden">
          <button onClick={() => setActive(!active)}>
            <img
              src={!active ? "./img/menu_open.png" : "./img/close.png"}
              alt="icono_menu"
              width="40px"
              height="40px"
            />
          </button>
        </div>
      </header>
      <ul className={active ? "absolute h-full w-4/5 bg-slate-100 z-10 mt-24 uppercase text-center right-0 lg:hidden" : "hidden"} style={{background:"#F3F3F3"}}>
        <li>
          <a href="/" className="text-base">
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
    </div>
  );
}
