/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react";

import React from "react";
import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const About = ({ about }) => {
  return (
    <div>
      <div
        className="flex items-center
       justify-center"
      >
        <h1 className="text-6xl font-bold px-4 py-5 text text-green-500">
          Our Vision
        </h1>
      </div>
      <div className="flex flex-row px-10 md:flex-nowrap flex-wrap items-center mb-10 shadow-sm shadow-gray-500 p-10 gap-x-11 justify-center">
        {about.map((item, index) => (
          <>
            <div key={index} className="md:w-3/5 w-full">
              <img
                src={urlFor(item.image).url()}
                alt="image"
                className="h-96   top w-full"
              />
            </div>
            <div className="w-full h-full static  ">
              <div className="text-xl font-semibold">
                <p>{item.bio[0].children[0].text}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
