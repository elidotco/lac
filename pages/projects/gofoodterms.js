import { groq } from "next-sanity";
import Head from "next/head";

import { Crumb } from "../../components";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

import client from "../../sanity";
import ScrollToTop from "react-scroll-to-top";
import { PortableText } from "@portabletext/react";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

export default function Home({
  logo,

  gofood,
}) {
  return (
    <div className="">
      <Head>
        <title>Lac Global Limited || Current Operations</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} />
      <Crumb name="GoFood Terms and Conditions" />
      <div>
        <div className="lg:px-10 px-5 ">
          {gofood.map((i, index) => (
            <div key={index}>
              <div className="bg-white text-black p-5 my-10 shadow-lg shadow-gray-400 text-2xl space-x-5">
                <p className="text-5xl font-bold py-5">
                  User Terms and Conditions
                </p>

                <PortableText value={i.cusc} components={ptComponents} />
              </div>
              <div className="bg-white my-10 p-5  text-black shadow-lg shadow-gray-400 text-2xl  items-center justify-center flex flex-col">
                <p className="text-5xl font-bold w-full py-5">
                  Resturantant Terms and Conditions
                </p>

                <PortableText value={i.rsc} components={ptComponents} />
              </div>
              <div className="bg-white my-10 p-5  text-black shadow-lg shadow-gray-400 text-2xl  items-center justify-center flex flex-col">
                <p className="text-5xl font-bold w-full py-5">
                  Courier Terms and Conditions
                </p>

                <PortableText value={i.csc} components={ptComponents} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <ScrollToTop smooth className="sc" />
    </div>
  );
}

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);
  const gofood = await client.fetch(groq`*[_type == "gofood"]{...,}`);

  return {
    props: {
      logo,

      gofood,
    }, // will be passed to the page component as props
  };
}
