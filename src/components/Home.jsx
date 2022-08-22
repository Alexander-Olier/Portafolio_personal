import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" w-6/12 ">
        <h2 className="uppercase text-lg text-regal-gris font-semibold">
          dev frontend
        </h2>
        <h1 className="text-7xl font-bold uppercase">Olier Alexander</h1>
        <div className="flex space-x-3 my-3">
          <button>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </button>
          <button>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </button>
        </div>
        <p>
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. 
        </p>
      </div>
      <div className="my-12 w-6/12">
        <img
          src="./img/home1.svg"
          className="ml-auto"
          width="70%"
          height="70%"
        />
      </div>
    </div>
  );
}
