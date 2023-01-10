/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react";

import React from "react";
import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const About = () => {
  return (
    <div className="ab">
      <div
        className="flex items-center
       justify-center"
      >
        <h1 className="text-6xl font-bold px-4 py-5 text text-green-500">
          Our Vision
        </h1>
      </div>
      <div className="flex flex-row px-10 md:flex-nowrap flex-wrap items-center mb-10 shadow-sm shadow-gray-500 p-10 gap-x-11 justify-center">
        <div className="w-full h-full static bg-white shadow-md shadow-gray-400 px-10 py-14  rounded-lg ">
          <div className="text-xl text-black font-semibold">
            <p>
              With our broad investment strategy, we attend to detailed
              sustainability in its diverse disciplines (Environmental, Climate,
              Economical and Social). LAC Global Limited supports the
              international vision and mission of being a key player in
              sustainable socio-economic development, especially in the
              developing parts of the African Region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
