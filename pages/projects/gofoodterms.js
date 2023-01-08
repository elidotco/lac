import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { About, Crumb, Gallery, Hero } from "../../components";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Team from "../../components/Team";
import client from "../../sanity";
import ScrollToTop from "react-scroll-to-top";

import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export default function Home({
  services,
  logo,
  gowaste,
  gowastepics,
  gofood,
  gofoodpics,
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
        <div className="px-10">
          {gofood.map((i, index) => (
            <div key={index}>
              <div className="bg-white p-5 my-10 shadow-lg shadow-gray-400 text-xl space-x-5">
                <p className="text-3xl font-bold py-5">
                  User Terms and Conditions
                </p>
                <p>{i.cusc[0].children[4].text}</p>
              </div>
              <div className="bg-white my-10 p-5 shadow-lg shadow-gray-400 text-xl space-x-5">
                <p className="text-3xl font-bold py-5">
                  Resturantant Terms and Conditions
                </p>
                <p>{i.rsc[0].children[0].text}</p>
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
  const gowaste = await client.fetch(groq`*[_type == "gowaste"]{...,}`);
  const gofood = await client.fetch(groq`*[_type == "gofood"]{...,}`);
  const gowastepics = await client.fetch(groq`*[_type == "gowastepics"]{...,}`);
  const gofoodpics = await client.fetch(groq`*[_type == "gofoodpics"]{...,}`);

  return {
    props: {
      logo,
      gowaste,
      gowastepics,
      gofood,
      gofoodpics,
    }, // will be passed to the page component as props
  };
}
