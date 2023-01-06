import { groq } from "next-sanity";
import React from "react";
import { Crumb, Header } from "../components";
import Contact from "../components/Contact";
import client from "../sanity";

const services = ({ logo, services }) => {
  return (
    <div>
      <Header logo={logo} />
      <Crumb name="Services" />
      <div className="flex flex-row flex-wrap items-center justify-center"></div>

      <Contact />
    </div>
  );
};

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);
  const services = await client.fetch(groq`*[_type == "services"]{...,}`);

  return {
    props: { logo, services }, // will be passed to the page component as props
  };
}

export default services;
