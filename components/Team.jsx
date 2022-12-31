/* eslint-disable @next/next/no-img-element */
import React from "react";
import sanityClient, { urlFor } from "../sanity";
import { useState, useEffect } from "react";
const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
   *[_type == "team"]{
     ...,
   
     
   }`
      )
      .then((data) => {
        console.log(data);
        setTeam(data);
      });
  }, []);
  return (
    <div
      className="
  "
    >
      <div className="items-center  flex justify-center p-5 text-4xl font-bold">
        <h1>Meet our Team</h1>
      </div>
      <div className="flex flex-row flex-wrap lg:px-20 px-5 items-center gap-10 mb-10 justify-center ">
        {team.map((t) => {
          return (
            <div
              key={t.name}
              className="card shadow-md shadow-gray-400 rounded-lg w-full md:w-3/12 h-72"
            >
              <div className=" h-4/5">
                <img
                  src={urlFor(t.mainImage).url()}
                  alt="image"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-xl shadow-sm shadow-black">
                <span>{t.name}</span>
                <span> {t.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
