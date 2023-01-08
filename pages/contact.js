import { groq } from "next-sanity";
import React from "react";
import { Header } from "../components";
import Contact from "../components/Contact";
import client from "../sanity";
import ScrollToTop from "react-scroll-to-top";
import Head from "next/head";
import { Crumb } from "../components";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
const contact = ({ logo }) => {
  return (
    <div>
      <Head>
        <title>Lac Global Limited || Home</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="language" content="en" />
      </Head>
      <ScrollToTop smooth className="sc" />
      <Header logo={logo} />
      <Crumb name="Contact Us" />
      <div className="flex items-center my-20 justify-center flex-col w-full">
        <div className="text-5xl  font-bold py-10">Addresses</div>

        <div className="flex flex-row flex-wrap lg:flex-nowrap justfy-center px-5 items-center  gap-10">
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center text-xl text-white">
            <p className="text-3xl font-bold"> Germany</p>
            <div className="flex items-center  flex-col justify-center">
              <p>Lac Global UG</p>
              <p>MArkstr. 41</p>
              <p>42369 Wuppertal</p>
            </div>
          </div>
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center  text-xl text-white">
            <p className="text-3xl font-bold">United Kingdom</p>
            <div className="flex items-center flex-col justify-center">
              <p>Lac Global Limited</p>
              <p>45 Kipling Avenue</p>
              <p>RM18 8HF</p>
              <p>Tilbury</p>
            </div>
          </div>
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center text-xl text-white">
            <p className="text-3xl font-bold"> Ghana</p>
            <div className="flex items-center flex-col justify-center">
              <p>Lac Global Limited</p>
              <p>134 Westland BLVD</p>
              <p>Westland - Accra</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-5 justify-center items-center  my-20 flex-col w-full">
        <div className="text-5xl py-10 text-green-500 font-bold">
          Social Media
        </div>

        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-center  gap-10">
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center text-xl text-white">
            <p className="text-3xl font-bold">
              {" "}
              <FaTwitter size={55} color="white" />
            </p>
            <div className="flex items-center  flex-col justify-center">
              <a
                className="underline"
                href="https://twitter.com/Gowaste_App"
                target="blank"
              >
                follow us on
              </a>
              <p text-3xl>Twitter</p>
            </div>
          </div>
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center text-xl text-white">
            <p className="text-3xl font-bold">
              {" "}
              <FaFacebook size={55} color="white" />
            </p>
            <div className="flex items-center  flex-col justify-center">
              <a
                className="underline"
                href="https://web.facebook.com/gowasteapp"
                target="blank"
              >
                like us on
              </a>
              <p text-3xl>Facebook</p>
            </div>
          </div>
          <div className="flex flex-col px-20 py-20 shadow-md bg-green-500 hover:bg-black shadow-gray-400 gap-10 items-center justify-center text-xl text-white">
            <p className="text-3xl font-bold">
              {" "}
              <FaInstagram size={55} color="white" />
            </p>
            <div className="flex items-center  flex-col justify-center">
              <a
                className="underline"
                href="https://www.instagram.com/gowaste_app/"
                target="blank"
              >
                follow us on
              </a>
              <p text-3xl>Instagram</p>
            </div>
          </div>
        </div>
      </div>

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
