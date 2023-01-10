import { groq } from "next-sanity";
import Head from "next/head";

import { Crumb } from "../../components";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import { PortableText } from "@portabletext/react";

import client from "../../sanity";
import ScrollToTop from "react-scroll-to-top";

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

export default function Home({ logo, gowaste }) {
  return (
    <div className="">
      <ScrollToTop smooth className="sc" />
      <Head>
        <title>Lac Global Limited || Current Operations</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} />
      <Crumb name="GoWaste Privacy Policy" />
      <div>
        <div className="px-5 text-black">
          {gowaste.map((i, index) => (
            <div key={index}>
              <div className="bg-white text-black p-5 my-10 shadow-lg shadow-gray-400 text-2xl space-x-5">
                <p className="text-5xl font-bold py-5">User Privacy Policy</p>
                <PortableText value={i.cusc} components={ptComponents} />
              </div>
              <div className="bg-white my-10 p-5 text-black shadow-lg shadow-gray-400 text-2xl flex flex-col  justify-center items-center space-x-5">
                <p className="text-5xl text-black font-bold py-5">
                  Driver Privacy Policy
                </p>

                <PortableText value={i.driver} components={ptComponents} />
              </div>
              <div className="bg-white my-10 p-5 shadow-lg shadow-gray-400 text-2xl space-x-5 flex flex-col  justify-center items-center">
                <p className="text-3xl font-bold py-5">Agent Privacy Policy</p>

                <PortableText value={i.agent} components={ptComponents} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);
  const gowaste = await client.fetch(groq`*[_type == "gowastepolicy"]{...,}`);

  return {
    props: {
      logo,
      gowaste,
    }, // will be passed to the page component as props
  };
}
