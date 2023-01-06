import Link from "next/link";
import React from "react";
import ReactTyped from "react-typed";
import ScrollAnimation from "react-animate-on-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="w-full lg:h-screen h-96 hero items-center flex md:px-20 lg:justify-start justify-center ">
      <div className="flex flex-col md:px-10">
        <h2 className="lg:text-[30px] text-white font-bold">
          Hello , Welcome to
        </h2>

        <h1 className="lg:text-[80px] text-[35px] font-bold">
          LAC Global Limited
        </h1>

        <h3 className="lg:text-4xl text-white">
          <ReactTyped
            strings={["Innovative", "Creative", "High Quality", "Dedication"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </h3>
        <div className="mt-20 text-lg font-semibold">
          <Link href="/about">
            <div className="w-44 flex items-center justify-around px-1 py-1 h-14  text-white rounded-lg bg-[#228b22] hover:bg-black hover:transition-all hover:duration-150 transition duration-200">
              Learn More
              <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
