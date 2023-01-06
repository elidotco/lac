import { groq } from "next-sanity";
import React from "react";
import { Header } from "../components";
import Contact from "../components/Contact";
import client from "../sanity";

const contact = () => {
  return (
    <div>
      <Header />
      <Contact />
    </div>
  );
};

export async function getStaticProps() {
  const logo = await clientt.fetch(groq`*[_type == "logo"]{...,}`);

  return {
    props: { logo }, // will be passed to the page component as props
  };
}

export default contact;
