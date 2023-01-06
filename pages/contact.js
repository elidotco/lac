import { groq } from "next-sanity";
import React from "react";
import { Header } from "../components";
import Contact from "../components/Contact";
import client from "../sanity";

const contact = ({ logo }) => {
  return (
    <div>
      <Header logo={logo} />
      <Contact />
    </div>
  );
};

export async function getStaticProps() {
  const logo = await client.fetch(
    groq`*[_type == "logo"]
  {...,}`
  );

  return {
    props: { logo }, // will be passed to the page component as props
  };
}

export default contact;
