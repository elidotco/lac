/* eslint-disable @next/next/no-img-element */
import { groq } from "next-sanity";
import Head from "next/head";

import React from "react";
import { Crumb, Header } from "../components";
import Contact from "../components/Contact";
import client, { urlFor } from "../sanity";

const about = ({ logo, about }) => {
  return (
    <div>
      <Head>
        <title>Lac Global Limited || About us</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} />
      <div>
        <Crumb name="About" />
      </div>
      <div>
        <div
          className="flex py-10
       justify-start lg:px-20 px-5 flex-col"
        >
          <span className="flex flex-row items-center">
            <div className="w-20 h-1 bg-black"></div>
            <span className="text-2xl font-bold text-green-500">
              Welcome to Lac Global Limited
            </span>
          </span>
          <h1 className="text-6xl font-bold px-4 py-5 text text-green-500">
            Who we are
          </h1>
        </div>
        <div className="flex flex-row px-10 md:flex-nowrap flex-wrap items-center mb-10 shadow-sm shadow-gray-500 p-10 gap-x-11 justify-center">
          {about.map((item, index) => (
            <>
              <div className="w-full h-full static  ">
                <div className="text-xl font-semibold">
                  <p>{item.complete_bio[0].children[0].text}</p>
                  <p>{item.bio[0].children[0].text}</p>
                </div>
              </div>
              <div key={index} className="md:w-3/5 w-full">
                <img
                  src={urlFor(item.image).url()}
                  alt="image"
                  className="h-96   top w-full"
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);
  const about = await client.fetch(groq`*[_type == "about"]{...,}`);

  return {
    props: { logo, about }, // will be passed to the page component as props
  };
}

export default about;
