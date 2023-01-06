import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import { About, Gallery, Hero } from "../../components";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Services from "../../components/Services";
import Team from "../../components/Team";
import client from "../../sanity";

export default function Home({ about, team, gallery, services, logo }) {
  console.log(services);
  return (
    <div className="">
      <Head>
        <title>Lac Global Limited || Home</title>
        <meta name="description" content="lac global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={logo} />
      <Hero />
      <Services services={services} />
      <div>
        <About about={about} />
      </div>
      <Team team={team} />
      <Gallery gallery={gallery} />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const team = await client.fetch(groq`*[_type == "team"]{
    ...,
  
    
  }`);

  const about = await client.fetch(groq`*[_type == "about"]{...,}`);
  const gallery = await client.fetch(groq`*[_type == "gallery"]{...,}`);
  const services = await client.fetch(groq`*[_type == "services"]{...,}`);
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);

  return {
    props: { team, about, gallery, services, logo }, // will be passed to the page component as props
  };
}
