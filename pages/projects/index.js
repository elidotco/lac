import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { About, Crumb, Gallery, Hero } from "../../components";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

import client from "../../sanity";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

export default function Home({
  logo,
  gowaste,
  gowastepics,
  gofood,
  gofoodpics,
}) {
  return (
    <div className="">
      <ScrollToTop smooth className="sc" />
      <Head>
        <title>Lac Global Limited || Current Operations</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} />
      <Crumb name="Current Operations" />
      <div className="md:px-10 px-4">
        <div className="px-5 lg:px-10 py-10">
          <p className="text-5xl text-green-500 capitalize py-5">
            Introducing Go Waste
          </p>
          <div>
            {gowaste.map((i, index) => (
              <div
                key={index}
                className="bg-white p-5 shadow-lg text-black shadow-gray-400 text-xl "
              >
                <p>{i.intro[0].children[0].text}</p>
                <div className="flex flex-row gap-5 py-5 px-5 items-center justify-center text-xl">
                  Download the app on
                  {/* playstore */}
                  <a href={!i.playstore ? "#" : i.playstore}>
                    <FaGooglePlay size={35} color="green" />
                  </a>
                  <a href={!i.appstore ? "#" : i.appstore}>
                    <FaAppStore size={35} color="green" />
                  </a>
                </div>
                <div className="text-green-500 underline">
                  <Link href="/projects/wasteterms">
                    view the terms and conditions
                  </Link>
                </div>
              </div>
            ))}
            <div>
              <Gallery gallery={gowastepics} />
            </div>

            {gowaste.map((i, index) => (
              <div
                key={index}
                className="bg-white p-5 shadow-lg text-black shadow-gray-400 text-xl space-x-5"
              >
                <p className="text-3xl font-bold py-5">
                  User Terms and Conditions
                </p>
                <p>{i.cusc[0].children[0].text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-2 md:px-10">
          <p className="text-5xl font-bold text-green-500 capitalize py-5">
            Introducing Go Food
          </p>
          {gofood.map((i, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-lg text-black shadow-gray-400 text-xl space-x-5"
            >
              <p>{i.intro[0].children[0].text}</p>
              <div className="flex flex-row gap-5 py-5 px-5 items-center justify-center text-xl">
                Download the app on
                {/* playstore */}
                <a href={!i.playstore ? "#" : i.playstore}>
                  <FaGooglePlay size={35} color="green" />
                </a>
                <a href={!i.appstore ? "#" : i.appstore}>
                  <FaAppStore size={35} color="green" />
                </a>
              </div>
              <div className="text-green-500 underline">
                <Link href="/projects/gowasteterms">
                  view the terms and conditions
                </Link>
              </div>
            </div>
          ))}
          <div>
            <Gallery gallery={gofoodpics} />
          </div>

          {gofood.map((i, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-lg text-black shadow-gray-400 text-xl space-x-5"
            >
              <p className="text-3xl font-bold py-5">
                User Terms and Conditions
              </p>
              <p>{i.cusc[0].children[4].text}</p>
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
