import { groq } from "next-sanity";
import React from "react";
import { Crumb, Gallery, Header } from "../components";
import Contact from "../components/Contact";
import client from "../sanity";
import ScrollToTop from "react-scroll-to-top";
import Head from "next/head";

const services = ({ logo, services, gallery }) => {
  return (
    <div>
      <ScrollToTop smooth className="sc" />
      <Head>
        <title>Lac Global Limited || Services</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="en" />
      </Head>
      <Header logo={logo} />
      <Crumb name="Services" />
      <div className="flex  items-center justify-center px-10">
        <div className="px-5 py-5">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-full shadow-lg shadow-gray-400 flex justify-center items-center flex-col gap-10 my-20 "
              >
                <h2 className="text-5xl">{item.title}</h2>
                <p className="text-lg px-5 py-5">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Gallery gallery={gallery} />

      <Contact />
    </div>
  );
};

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);
  const services = await client.fetch(groq`*[_type == "services"]{...,}`);
  const gallery = await client.fetch(groq`*[_type == "gallery"]{...,}`);

  return {
    props: { logo, services, gallery }, // will be passed to the page component as props
  };
}

export default services;
